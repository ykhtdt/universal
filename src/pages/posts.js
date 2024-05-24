import Component from "/src/shared/base/component.js";

class Posts extends Component {
  template() {
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