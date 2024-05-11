import Component from "../shared/base/component.js";

class Home extends Component {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }

  async template() {
    return `
      <h1>Welcome Home</h1>
      <p>
        Welcome back
      </p>
      <a href="/posts" data-link>View recent posts</a>
    `;
  }
}

export default Home;