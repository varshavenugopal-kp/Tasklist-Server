import { Router } from "express";
import taskController from "../controller/taskController.js";
const router=Router()

router.get('/',taskController.getTasks);
router.post('/add',taskController.addTask);
router.get('/single/:taskId',taskController.getSingle);
router.post('/delete',taskController.deleteTask);
router.post('/editData',taskController.editTask);
router.post('/priorData',taskController.getPriorityWise);

export default router