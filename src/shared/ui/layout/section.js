import Component from "/src/shared/base/component.js";

class Section extends Component {
  async template() {
    const children = this.props.children;

    return `
      <section class="section">
        ${children}
      </section>
    `;
  }
}

export default Section;