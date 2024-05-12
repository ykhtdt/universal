import Component from "../shared/base/component.js";

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
    return `
      <h1>Welcome Home</h1>
      <div>
        ${this.state.count}
      </div>
      <div>
        <button data-button-id="count-plus">
          PLUS
        </button>
      </div>
    `;
  }
}

export default Home;