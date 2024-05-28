import Component from "/src/shared/base/component.js";

class Container extends Component {
  template() {
    const children = this.props.children;

    return `
      <div class="container" data-component="container">
        ${children}
      </div>
    `;
  }
}

export default Container;