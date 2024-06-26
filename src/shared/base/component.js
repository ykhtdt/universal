import parseTemplate from "./template-parser.js";

class Component {
  target;
  props;
  state;
  params;
  componentMap;

  constructor({ target = null, props, state, componentMap = {}, params }) {
    this.isMounted = false;

    /**
     * @TODO
     * 페이지가 아닌 컴포넌트의 경우 target에 대한 고민이 필요하다.
     */
    this.target = target || document.querySelector("#app");
    this.props = props;
    this.state = state;
    this.params = params;
    this.componentMap = componentMap;
    this.initialState();
    this.setEvent();
    this.render();
  }

  initialState() {}

  mounted() {}

  template() {
    return "";
  }

  render() {
    if (this.target) {
      this.target.innerHTML = parseTemplate(this.template(), this.componentMap);
    }

    if (!this.isMounted) {
      this.isMounted = true;
      this.mounted();
    }
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
    // if (!this.target) {
    //   return;
    // }

    this.target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) {
        return false;
      }

      callback(event);
    })
  }
}

export default Component;
