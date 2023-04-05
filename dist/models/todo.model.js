"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = exports.getTodos = void 0;
const client_1 = require("@prisma/client");
const prismaClient = new client_1.PrismaClient();
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient.$connect();
    const todos = yield prismaClient.todo.findMany();
    console.log(todos);
    return todos;
});
exports.getTodos = getTodos;
const addTodo = (postData) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient.$connect();
    const todo = yield prismaClient.todo.create({
        data: postData
    });
    return postData;
});
exports.addTodo = addTodo;
