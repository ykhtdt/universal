import Component from "/src/shared/base/component.js";

class Section extends Component {
  template() {
    const children = this.props.children;

    return `
      <section class="section" data-component="section">
        ${children}
      </section>
    `;
  }
}

export default Section;