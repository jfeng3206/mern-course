import {Router} from 'express';
import rateLimiter from "express-rate-limit";

const router = Router();

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});

import { register, login, logout
 } from '../controllers/authControllers.js';
 import { validateRegisterInput, validateLoginInput } from '../middleware/validationMiddleware.js';

 router.route('/register').post(apiLimiter,validateRegisterInput,register);
 router.route('/login').post(apiLimiter,validateLoginInput,login);
 router.get('/logout', logout);

 export default router;