import Component from "/src/shared/base/component.js";

import Container from "/src/shared/ui/layout/container.js";
import Section from "/src/shared/ui/layout/section.js";
import Heading from "/src/shared/ui/typography/heading.js";

const componentMap = {
  Container,
  Section,
  Heading,
};

class Home extends Component {
  constructor(args) {
    super({ ...args, componentMap });
  }

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

  template() {
    return `
      <Container>
        <Section>
          <Heading level="1">Welcome Home</Heading>
          <div>${this.state.count}</div>
          <div>
            <button data-button-id="count-plus">PLUS</button>
          </div>
        </Section>
        <section class="wrapper">
          Temp
        </section>
      </Container>
    `
  }
}

export default Home;