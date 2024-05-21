import Component from "../shared/base/component.js";

class NotFound extends Component {
  async template() {
    return `
      <h1>Page Not Found</h1>
    `;
  }
}

export default NotFound;