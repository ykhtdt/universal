class Component {
  target;
  props;
  state;
  params;

  constructor({ target, props, state, params }) {
    this.target = target;
    this.props = props;
    this.state = state;
    this.params = params;
    this.initialState();
    this.setEvent();
    this.render();
  }

  initialState() {}

  mounted() {}

  async template() {
    return "";
  }

  async render() {
    this.target.innerHTML = await this.template();
    this.mounted();
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState
    };

    this.render();
  }

  setEvent() {}

  addEvent(eventType, selector, callback) {
    this.target.addEventListener(eventType, (event) => {
      // closest: 일치하는 요소를 선택자와 일치하는 요소를 찾을 때까지, 자기 자신을 포함해 위쪽으로 문서 트리를 순회
      if (!event.target.closest(selector)) {
        return false;
      }

      callback(event);
    })
  }
}

export default Component;
