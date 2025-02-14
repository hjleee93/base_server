import express from "express"
import { getTests } from '../controllers/testController'
const router = express.Router();

router.get("/tests", getTests);


export default router;
