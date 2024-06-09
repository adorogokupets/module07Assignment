import express from 'express'
import {getAllEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee} from '../controllers/employees.js'
const router = express.Router()

router.route('/api/employees')
    .get(getAllEmployees)
    .post(createEmployee)
    .delete(deleteEmployee)
router.route('/api/employees/:id')
    .get(getEmployee)
    .patch(updateEmployee)

export default router