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
    this.addEvent('click', '[data-button-id="count-increase"]', (event) => {
      // console.log(event.target);
      this.setState({
        count: this.state.count + 1,
      });
    });

    this.addEvent('click', '[data-button-id="count-decrease"]', (event) => {
      // console.log(event.target);
      this.setState({
        count: this.state.count - 1,
      });
    });
  }

  /**
   * 
   * 템플릿 리터럴을 사용하여 HTML 문자열을 생성할 때, onClick과 같은 이벤트 핸들러에 직접 함수를 전달하는 것은 불가능하다.
   * 이는 템플릿 리터럴이 단순한 문자열이기 때문이며, 문자열 내에서 JavaScript 함수 참조를 포함할 수 없기 때문이다.
   * 때문에, 컴포넌트에 이벤트를 추가하려면 id를 전달하고 이를 setEvent로 처리한다.
   */
  template() {
    const repeat = Array.from({ length: 5 }, (_, i) => i + 1);

    return `
      <Container>
        <Heading level="1">Home</Heading>
        <Section>
          <article>
            <div class="text">Count ${this.state.count}</div>
            <div class="button-group">
              <FilledButton id="count-increase">Increase</FilledButton>
              <FilledButton id="count-decrease">Decrease</FilledButton>
            </div>
          </article>
        </Section>
        <section>
          <article>
          ${repeat.map((item, i) => `
            <Heading level="${i + 1}">
              Heading Level ${item}
            </Heading>
           `
          ).join("")}
          </article>
        </section>
      </Container>
    `
  }
}

export default Home;