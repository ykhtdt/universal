import Component from "/src/shared/base/component.js";
import Container from "/src/shared/ui/layout/container.js";

class Home extends Component {
  initialState() {
    this.state = {
      count: 0,
    };
  }

  setEvent() {
    this.addEvent('click', '[data-button-id="count-plus"]', ({ target }) => {
      console.log(target);
      this.setState({
        count: this.state.count + 1,
      });
    });
  }

  async template() {
    const container = new Container({
      target: document.createElement('div'),
      props: {
        children: `
          <h1>Welcome Home</h1>
          <div>
            ${this.state.count}
          </div>
          <div>
            <button data-button-id="count-plus">
              PLUS
            </button>
          </div>
        `
      }
    });

    return container.template();
  }
}

export default Home;