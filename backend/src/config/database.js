import dotenv from 'dotenv';
import sql from 'mssql';

dotenv.config();

// Support future dual DB types if needed
const DB_TYPE = (process.env.DB_TYPE || 'sqlserver').toLowerCase();

let pool; // For SQL Server, this will be a ConnectionPool instance

async function init() {
  if (DB_TYPE !== 'sqlserver') {
    console.error(`Unsupported DB_TYPE '${DB_TYPE}'. Expected 'sqlserver'.`);
    process.exit(1);
  }

  const config = {
    server: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '1433', 10),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    options: {
      encrypt: process.env.DB_ENCRYPT !== 'false',
      trustServerCertificate: process.env.DB_TRUST_SERVER_CERT === 'true'
    },
    pool: {
      min: 0,
      max: 10,
      idleTimeoutMillis: 30000
    }
  };

  pool = new sql.ConnectionPool(config);
  pool.on('error', err => {
    console.error('❌ Unexpected SQL Server pool error:', err);
  });

  try {
    await pool.connect();
    console.log('✅ Connected to Azure SQL Database');
  } catch (err) {
    console.error('❌ Failed to connect to Azure SQL Database:', err);
    process.exit(1);
  }
}

// Helper to run parameterized queries using $1 style for easier migration.
export async function query(text, params = []) {
  if (!pool) await init();
  const request = pool.request();
  params.forEach((val, i) => request.input(`p${i}`, val));
  // Convert $1, $2 ... into @p0, @p1 ...
  const transformed = params.length ? text.replace(/\$(\d+)/g, (_, n) => `@p${parseInt(n, 10)-1}`) : text;
  const result = await request.query(transformed);
  return result.recordset;
}

export async function getPool() {
  if (!pool) await init();
  return pool;
}

export default { query, getPool };
