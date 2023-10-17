import express, { Router } from 'express';
import { getJobData, saveJobData } from '../Controoler/job.controller.js';

const router = express.Router();
router.post('/save', saveJobData);
router.get('/get', getJobData);

export default router;