import Component from "/src/shared/base/component.js";

class Heading extends Component {
  template() {
    const { as, children } = this.props;

    // 'as' prop은 1부터 6 사이의 유효한 값만을 가질 수 있습니다.
    const tag = Math.max(1, Math.min(6, parseInt(as))) || 1;

    return `
      <h${tag} class="heading">
        ${children}
      </h${tag}>
    `;
  }
}

export default Heading;