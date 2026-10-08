import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS; // O process.env.DB_PASSWORD según como lo llames
const DB_NAME = process.env.DB_NAME;

// Construimos la URI de Atlas
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ntepddy.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

export const connectDB = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB conectado correctamente: ${db.connection.host}`);
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1);
  }
};