import Component from "/src/shared/base/component.js";
import Container from "/src/shared/ui/layout/container.js";
import Section from "/src/shared/ui/layout/section.js";

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
    const contentHTML = `
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

    const section = new Section({
      target: document.createElement('div'),
      props: {
        children: contentHTML,
      }
    });

    const sectionHTML = await section.template();

    const container = new Container({
      target: document.createElement('div'),
      props: {
        children: sectionHTML,
      }
    });

    const containerHTML = await container.template();

    return containerHTML;
  }
}

export default Home;