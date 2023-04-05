import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export const getTodos = async () => {

    await prismaClient.$connect();

    const todos = await prismaClient.todo.findMany()

    console.log(todos); 
    
    return todos;
}

export const addTodo = async (postData: any) => {

    await prismaClient.$connect();

    const todo = await prismaClient.todo.create({
        data: postData
    })

    return postData;   
}
