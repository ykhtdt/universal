import Component from "/src/shared/base/component.js";

class Section extends Component {
  template() {
    const { className, children } = this.props;

    const classes = className ? `section ${className}` : "section";

    return `
      <section class="${classes}" data-component="section">
        ${children}
      </section>
    `;
  }
}

export default Section;