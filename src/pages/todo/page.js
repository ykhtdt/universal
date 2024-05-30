import Component from "/src/shared/base/component.js";

import Container from "/src/shared/ui/layout/container.js";
import Section from "/src/shared/ui/layout/section.js";
import Heading from "/src/shared/ui/typography/heading.js";
import FilledButton from "/src/shared/ui/button/filled-button.js";

import TodoTask from "/src/entities/todo/ui/todo-task.js";
import {
  getTodoFromLocalStorage,
  saveTodoToLocalStorage,
} from "/src/entities/todo/lib/local-storage.js";

const componentMap = {
  // shared
  Container,
  Section,
  Heading,
  FilledButton,

  // entities
  TodoTask,
};

class Todo extends Component {
  constructor(args) {
    super({ ...args, componentMap });
  }

  initialState() {
    this.state = {
      todo: [],
    };
  }

  addTask() {
    const { todo } = this.state;

    const todoInput = document.querySelector('[data-input-id="todo-add-input"]');
    const newTask = todoInput.value.trim();

    if (newTask !== "") {
      const newTodo = {
        id: Date.now(),
        text: newTask,
        disabled: false,
      };

      const updatedTodo = [...todo, newTodo];

      this.setState({
        todo: updatedTodo,
      });

      saveTodoToLocalStorage(updatedTodo);

      todoInput.value = "";
    }
  }

  deleteAllTasks() {
    this.setState({
      todo: [],
    });

    saveTodoToLocalStorage([]);
  }

  setEvent() {
    this.addEvent('click', '[data-button-id="add-task"]', (event) => {
      this.addTask();
    });

    this.addEvent('click', '[data-button-id="delete-task"]', (event) => {
      this.deleteAllTasks();
    });

    this.addEvent('keydown', '[data-input-id="todo-add-input"]', (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        this.addTask();

        const todoInput = document.querySelector('[data-input-id="todo-add-input"]');
        todoInput.focus();
      }
    });
  }

  mounted() {
    const todo = getTodoFromLocalStorage();
    this.setState({
      todo,
    });
  }

  template() {
    const { todo } = this.state;
    
    const todoCount = todo.length;

    return `
      <Container>
        <Heading level="1">
          Todo
        </Heading>
        <Section className="todo-inner">
          <div class="todo-column">
            <Heading level="2">
              Todo List
            </Heading>
            <div class="input-area">
              <input
                type="text"
                placeholder="Add a new task"
                data-input-id="todo-add-input"
                class="input-field"
              />
              <FilledButton id="add-task" className="button-add-task">
                Add
              </FilledButton>
            </div>
            <ul class="todo-list">
              ${todo.map((task, index) => `
                  <TodoTask index="${index}" text="${task.text}" disabled="${task.disabled}" />
                `
              ).join("")}
            </ul>
            <hr />
            <div class="todo-counter">
              <p>
                <span data-span-id="todo-count">
                  ${todoCount}
                </span>
                items total
              </p>
              <FilledButton id="delete-task">
                Delete All
              </FilledButton>
            </div>
          </div>
        </Section>
      </Container>
    `
  }
}

export default Todo;