import Component from "/src/shared/base/component.js";

import Container from "/src/shared/ui/layout/container.js";
import Section from "/src/shared/ui/layout/section.js";
import Heading from "/src/shared/ui/typography/heading.js";
import FilledButton from "/src/shared/ui/button/filled-button.js";

const componentMap = {
  Container,
  Section,
  Heading,
  FilledButton,
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
      this.setState({
        count: this.state.count + 1,
      });
    });
  }

  template() {
    const repeat = Array.from({ length: 5 }, (_, i) => i + 1);

    return `
      <Container>
        <Section>
          <Heading level="1">Welcome Home</Heading>
          <div>${this.state.count}</div>
          <div>
            <FilledButton id="count-plus">Plus</FilledButton> 
          </div>
        </Section>
        <section class="wrapper">
          Temp
          ${repeat.map((item) => `
            <Heading level="2">
              ${item}
            </Heading>
           `
          ).join("")}
          Test, I
        </section>
      </Container>
    `
  }
}

export default Home;