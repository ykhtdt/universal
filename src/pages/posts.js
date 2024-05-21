import Component from "../shared/base/component.js";

class Posts extends Component {
  async template() {
    console.log(this.params.id);

    return `
      <h1>Posts</h1>
      <p>
        Welcome
      </p>
    `;
  }
}

export default Posts;