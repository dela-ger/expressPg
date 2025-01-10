# expressPg
Learning about Express.js and Postgres
# Express.js with PostgreSQL Backend

This repository contains a simple Express.js server that connects to a PostgreSQL database to provide APIs for fetching header and image data. It is configured to allow cross-origin requests from a specified frontend origin.

## Features
- **REST API Endpoints**:
  - `/api/headers`: Fetches a single header record from the `headers` table.
  - `/api/images`: Fetches all records from the `images` table.
- **CORS Enabled**: Allows requests from `http://127.0.0.1:5500`.
- **Database Connection**: Uses `pg` library to connect to a PostgreSQL database.

## Prerequisites
- Node.js (v14 or later)
- PostgreSQL installed and running locally

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure the PostgreSQL Database
Ensure you have a PostgreSQL database running locally and create a database named `test4`. Create the following tables in the database:

#### Table: `headers`
```sql
CREATE TABLE headers (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT
);
```

#### Table: `images`
```sql
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    url TEXT NOT NULL,
    alt_text VARCHAR(255)
);
```

Populate the tables with sample data:
```sql
INSERT INTO headers (title, description) VALUES ('Welcome to Sunwin', 'Your trusted security partner');
INSERT INTO images (url, alt_text) VALUES ('https://example.com/image1.png', 'Sample Image 1');
```

### 4. Update Database Configuration
Update the `Pool` configuration in the `index.js` file:
```javascript
const pool = new Pool({
    user: 'your-username',
    host: 'localhost',
    database: 'test4',
    password: 'your-password',
    port: 5432,
});
```

### 5. Run the Server
Start the server:
```bash
node index.js
```

The server will run on `http://localhost:3001`.

### 6. Test the Endpoints
Use a tool like Postman or your frontend application to test the endpoints:
- `GET http://localhost:3001/api/headers`
- `GET http://localhost:3001/api/images`

## Frontend Integration
Ensure your frontend is hosted on `http://127.0.0.1:5500` or update the `CORS` configuration to match your frontend origin.

## Troubleshooting
- **CORS Issues**: Ensure the `origin` in the `cors` configuration matches your frontend's URL.
- **Database Errors**: Verify the database credentials and ensure the tables are correctly set up.

## License
This project is open-source and available under the MIT License.

