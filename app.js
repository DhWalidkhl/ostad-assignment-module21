import express from "express";

import cors from "cors";
import mongoose from "mongoose";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import hpp from "hpp";
import router from './routes/api.js'
import {
    MONGODB_CONNECTION,
    MAX_JSON_SIZE,
    URL_ENCODED,
    WEB_CACHE,
    REQUEST_LIMIT_NUMBER,
    REQUEST_LIMIT_TIME,
} from "./app/config/Config.js";

const app = express();

// Global Application Middleware
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
app.use(hpp());
app.use(helmet());
app.use(cookieParser());



// Rate Limiter
const limiter = rateLimit({
    windowMs: REQUEST_LIMIT_TIME,
    max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

// Web Caching
app.set("etag", WEB_CACHE);

// Database connection
mongoose.connect(MONGODB_CONNECTION, {autoIndex: true})
    .then(()=>{
        console.log('DB Connected')
    })
    .catch((err)=>{

        console.log(err.toString())
    })


// Set API Routes
app.use("/api/v1", router);
app.use('*', (req, res)=>{
    res.status(404).json({status: 'fail', message: 'Please use a valid API'})
})

// Set Application Storage
app.use(express.static("storage"));


export default app
