import { Request, Response } from "express"
import { addTodo, getTodos } from "../models/todo.model"

export const todos = (req: Request, res: Response) => {

    getTodos().then(response => {
        res.send(response)
    }).catch(error => {
        console.log(error);        
    })
}

export const create = (req: Request, res: Response) => {

    addTodo(req.body).then(response => {
        res.send(response)
    }).catch(error => {
        console.log(error);        
    })
}
