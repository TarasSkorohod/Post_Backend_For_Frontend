import mongoose from "mongoose";
import express from 'express';




mongoose
    .connect('mongodb+srv://admin:admin@cluster0.6xbcj9p.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB err', err))


const app = express();




