import Component from "/src/shared/base/component.js";

class FilledButton extends Component {
  template() {
    const { id, children } = this.props;

    return `
      <button class="filled-button" data-button-id="${id}">
        ${children}
      </button>
    `;
  }
}

export default FilledButton;