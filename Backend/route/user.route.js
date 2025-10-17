import express from 'express'
import { signup,login} from '../controller/user.controller.js'; 
const router = express.Router();

router.post("/signup", signup)
router.post("/login", login) //post use kiya hai kyuki data bhejna hai

export default router;