import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; 
import dotenv from 'dotenv';
dotenv.config()

// Konfigurasi koneksi database
const db = new Sequelize(process.env.DB_NAME,process.env.DB_HOST,process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mysql', // Dialek database
  dialectModule: mysql2, // Dialek MySQL menggunakan mysql2
});

export default db; // Gunakan `export` untuk ES Modules
