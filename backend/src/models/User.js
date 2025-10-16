import pool from '../config/database.js';

class User {
  static async create({ email, passwordHash, fullName, organization }) {
    const query = `
      INSERT INTO users (email, password_hash, full_name, organization)
      VALUES ($1, $2, $3, $4)
      RETURNING id, email, full_name, organization, role, created_at
    `;
    
    const values = [email, passwordHash, fullName, organization];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0];
  }

  static async findById(id) {
    const query = `
      SELECT id, email, full_name, organization, role, is_active, created_at
      FROM users WHERE id = $1
    `;
    const result = await pool.query(query, [id]);
    return result.rows[0];
  }

  static async updateLastLogin(userId) {
    const query = 'UPDATE users SET updated_at = CURRENT_TIMESTAMP WHERE id = $1';
    await pool.query(query, [userId]);
  }

  static async getAll() {
    const query = `
      SELECT id, email, full_name, organization, role, is_active, created_at
      FROM users
      ORDER BY created_at DESC
    `;
    const result = await pool.query(query);
    return result.rows;
  }
}

export default User;
