import Component from "/src/shared/base/component.js";

class Section extends Component {
  template() {
    const { className, children } = this.props;

    return `
      <section class="section ${className}" data-component="section">
        ${children}
      </section>
    `;
  }
}

export default Section;