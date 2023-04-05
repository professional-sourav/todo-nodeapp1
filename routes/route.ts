import express from 'express'
import { create, todos } from '../controller/todo.controller'

export const router = express.Router()

router.get('/', todos)
router.post('/create', create)