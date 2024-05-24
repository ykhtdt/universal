class Component {
  target;
  props;
  state;
  params;

  constructor({ target = null, props, state, params }) {
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
    if (this.target) {
      this.target.innerHTML = await this.template();
    }
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
    if (!this.target) {
      return;
    }

    this.target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) {
        return false;
      }

      callback(event);
    })
  }
}

export default Component;
