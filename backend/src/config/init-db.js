import db from './database.js';

const createTables = async () => {
  try {
    console.log('🔨 Creating database tables...');

    // Users table (Azure SQL)
    await db.query(`
      IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE name='users' AND schema_id = SCHEMA_ID('dbo'))
      BEGIN
        CREATE TABLE dbo.users (
          id INT IDENTITY(1,1) PRIMARY KEY,
          email NVARCHAR(255) NOT NULL UNIQUE,
          password_hash NVARCHAR(255) NOT NULL,
          full_name NVARCHAR(255),
          organization NVARCHAR(255),
          role NVARCHAR(50) DEFAULT 'user',
          is_active BIT DEFAULT 1,
          created_at DATETIME2 DEFAULT SYSUTCDATETIME(),
          updated_at DATETIME2 DEFAULT SYSUTCDATETIME()
        );
        CREATE INDEX idx_users_email ON dbo.users(email);
      END
    `);

    // Activity logs table
    await db.query(`
      IF NOT EXISTS (SELECT 1 FROM sys.tables WHERE name='activity_logs' AND schema_id = SCHEMA_ID('dbo'))
      BEGIN
        CREATE TABLE dbo.activity_logs (
          id INT IDENTITY(1,1) PRIMARY KEY,
          user_id INT NOT NULL,
          action NVARCHAR(100) NOT NULL,
          ip_address NVARCHAR(45),
          user_agent NVARCHAR(MAX),
          created_at DATETIME2 DEFAULT SYSUTCDATETIME(),
          CONSTRAINT fk_logs_user FOREIGN KEY (user_id) REFERENCES dbo.users(id)
        );
      END
    `);

    console.log('✅ Database tables created successfully');
  } catch (error) {
    console.error('❌ Error creating tables:', error);
    throw error;
  }
};

// Run this script directly with: node src/config/init-db.js
if (import.meta.url === `file://${process.argv[1]}`) {
  createTables()
    .then(() => {
      console.log('✅ Database initialization complete');
      process.exit(0);
    })
    .catch((error) => {
      console.error('❌ Database initialization failed:', error);
      process.exit(1);
    });
}

export default createTables;
