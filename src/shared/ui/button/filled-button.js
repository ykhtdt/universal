import Component from "/src/shared/base/component.js";

class FilledButton extends Component {
  template() {
    const { id, className, children } = this.props;

    // 아래 코드는 동작하지 않는다. 템플릿 리터럴을 사용하여 HTML 문자열을 생성할 때 함수를 전달할 수 없다.
    // const onClick = this.props.onClick;
    // onClick(); // onClick is not a function

    const classes = className ? `filled-button ${className}` : "filled-button";

    return `
      <button
        class="${classes}"
        data-button-id="${id}"
        data-component="filled-button"
      >
        ${children}
      </button>
    `;
  }
}

export default FilledButton;