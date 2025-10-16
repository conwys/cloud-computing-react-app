# SmartThings Backend API

Express.js REST API with PostgreSQL for user authentication.

## Features

- ✅ User registration and login
- ✅ JWT token-based authentication
- ✅ Password hashing with bcrypt
- ✅ PostgreSQL database
- ✅ Input validation
- ✅ Protected routes

## API Endpoints

### Authentication

#### Register New User
```
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "fullName": "John Doe",
  "organization": "Company Name" // optional
}
```

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Get Current User (Protected)
```
GET /api/auth/me
Authorization: Bearer <token>
```

#### Logout (Protected)
```
POST /api/auth/logout
Authorization: Bearer <token>
```

### Health Check
```
GET /api/health
```

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment

Create a `.env` file:

```bash
cp .env.example .env
```

Edit `.env` with your database credentials and JWT secret.

### 3. Setup PostgreSQL

```bash
# Install PostgreSQL (Ubuntu/Debian)
sudo apt-get update
sudo apt-get install -y postgresql postgresql-contrib

# Start PostgreSQL
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Create database and user
sudo -u postgres psql
```

In PostgreSQL shell:
```sql
CREATE DATABASE smartthings_db;
CREATE USER smartthings_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE smartthings_db TO smartthings_user;
\q
```

### 4. Initialize Database Tables

```bash
npm run init-db
```

### 5. Start Server

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

Server runs on http://localhost:3000

## Database Schema

### users table
- `id` - Serial primary key
- `email` - VARCHAR(255), unique, not null
- `password_hash` - VARCHAR(255), not null
- `full_name` - VARCHAR(255)
- `organization` - VARCHAR(255)
- `role` - VARCHAR(50), default 'user'
- `is_active` - BOOLEAN, default true
- `created_at` - TIMESTAMP
- `updated_at` - TIMESTAMP

### activity_logs table
- `id` - Serial primary key
- `user_id` - INTEGER (foreign key to users)
- `action` - VARCHAR(100)
- `ip_address` - VARCHAR(45)
- `user_agent` - TEXT
- `created_at` - TIMESTAMP

## Security

- Passwords are hashed with bcrypt (10 rounds)
- JWT tokens expire in 7 days (configurable)
- Protected routes require valid JWT token
- Email validation on registration
- Minimum password length: 6 characters

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production)
- `DB_HOST` - PostgreSQL host
- `DB_PORT` - PostgreSQL port
- `DB_NAME` - Database name
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `JWT_SECRET` - Secret key for JWT signing
- `JWT_EXPIRES_IN` - Token expiration time

## Error Handling

All endpoints return JSON responses:

Success:
```json
{
  "success": true,
  "message": "Operation successful",
  "data": { ... }
}
```

Error:
```json
{
  "success": false,
  "message": "Error message",
  "errors": [ ... ] // validation errors
}
```

## Testing

Test the API with curl:

```bash
# Health check
curl http://localhost:3000/api/health

# Register
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123","fullName":"Test User"}'

# Login
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'

# Get user (replace TOKEN)
curl http://localhost:3000/api/auth/me \
  -H "Authorization: Bearer TOKEN"
```
