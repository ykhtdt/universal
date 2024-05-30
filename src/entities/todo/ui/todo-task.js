import Component from "/src/shared/base/component.js";

class TodoTask extends Component {
  toggleTask(index) {
    console.log("Toggle Task", index);
    // saveTodoToLocalStorage(todo);
    // 부모의 state를 변경하여 리렌더링을 시켜야한다.
  }

  setEvent() {
    const { index } = this.props;

    /**
     * @TODO
     * page가 아닌 경우 component.js의 target에 대한 고민이 필요하다.
     * 그리고 이벤트 핸들러에 함수를 전달할 수 없으므로 부모의 state를 변경할 방법이 없다.
     * toggleTask에서 현재 checkbox의 체크 상태를 변경하더라도, 부모의 state(todo)의 disabled를 수정해야만 한다.
     */
    this.addEvent('change', `[data-input-id="todo-task-checkbox-${index}"]`, (event) => {
      this.toggleTask(index);
    });
  }

  template() {
    const { index, text, disabled } = this.props;

    /**
     * @TODO
     * template-parser.js로 인하여 모든 props의 타입이 변경되는 문제
     * 현재 parseAttributes에서 임시로 대응 중
     */
    console.log(typeof index, typeof disabled);

    return `
      <li class="todo-task">
        <input
          type="checkbox"
          ${disabled ? "checked" : ""}
          data-input-id="todo-task-checkbox-${index}"
          class="todo-task-checkbox"
        />
        <p class="todo-task-text">
          ${text}
        </p>
      </li>
    `
  }
}

export default TodoTask;