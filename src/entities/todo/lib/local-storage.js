export const getTodoFromLocalStorage = () => {
  const todo = localStorage.getItem("todo");
  return todo ? JSON.parse(todo) : [];
};

export const saveTodoToLocalStorage = (todo) => {
  localStorage.setItem("todo", JSON.stringify(todo));
};
