import express from 'express';
import Route from './Router/route.js';
import db from './config.js';
import cors from 'cors';
import { data } from './model.js';
import dotenv from 'dotenv'
let app = express();

(async () => {
    
    try {
      await db.sync();
      await data.sync();
      console.log("berhasil");
    } catch (error) {
      console.error("Failed to sync database or insert data:", error);
    }
  })();
dotenv.config();
app.use(cors());
app.use(Route);
app.listen(process.env.PORT,()=>{
    console.log("berjalan")
})
