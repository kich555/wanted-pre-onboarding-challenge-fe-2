import { db } from '~/utils/db.server'


export async function getUserTodos(user) {
  return db.todo.findMany({
    where: { creater: user }
  });
}

export async function getSingleTodo (id) {
  return db.todo.findUnique({where: {id}})
}

export async function updateUserTodos(todos) {
  for (const todo of todos) {
    await db.todo.update({
      where: { id:todo.id },
      data: todo,
    });
  }
}

export async function updateSingleTodo ({ _id: id, ...data }) {
  const result = await db.todo.findUnique({ where: { id } })
  if (id !== result?.id) return 
  return db.todo.update({ where: { id }, data })
}

export async function createTodo({ userId, ...data }) {
  
  return db.todo.create({ data: {
    createrId:userId, 
    ...data, 
    description:'',
    done: data.progress ==='done' ? true: false,
    }})
}

export async function deleteTodo({ _id: id }) {
  const todo = await getSingleTodo(id)
  if (id !== todo?.id) return;
  return db.todo.delete({
    where: { id }
  })
}