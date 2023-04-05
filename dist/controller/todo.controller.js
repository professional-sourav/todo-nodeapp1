"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.todos = void 0;
const todo_model_1 = require("../models/todo.model");
const todos = (req, res) => {
    (0, todo_model_1.getTodos)().then(response => {
        res.send(response);
    }).catch(error => {
        console.log(error);
    });
};
exports.todos = todos;
const create = (req, res) => {
    (0, todo_model_1.addTodo)(req.body).then(response => {
        res.send(response);
    }).catch(error => {
        console.log(error);
    });
};
exports.create = create;
