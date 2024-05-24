import Component from "/src/shared/base/component.js";

class Post extends Component {
  template() {
    console.log(this.params.id);

    return `
      <h1>Post</h1>
    `;
  }
}

export default Post;