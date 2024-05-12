import Component from "../shared/base/component.js";

class AboutView extends Component {
  async template() {
    console.log(this.params.id);

    return `
      <h1>Welcome AboutView</h1>
      <p>
        Welcome back
      </p>
      <a href="/posts" data-link>View recent posts</a>
    `;
  }
}

export default AboutView;