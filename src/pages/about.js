import Component from "../shared/base/component.js";

class About extends Component {
  constructor(params) {
    super(params);
    this.setTitle("About");
  }

  async getHtml() {
    console.log(this.params.id);

    return `
      <h1>Welcome About</h1>
      <p>
        Welcome back
      </p>
      <a href="/posts" data-link>View recent posts</a>
    `;
  }
}

export default About;