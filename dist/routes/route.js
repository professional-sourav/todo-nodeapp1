"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const todo_controller_1 = require("../controller/todo.controller");
exports.router = express_1.default.Router();
exports.router.get('/', todo_controller_1.todos);
exports.router.post('/create', todo_controller_1.create);
