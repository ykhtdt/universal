class Component {
  constructor(params) {
    this.params = params;
  }

  // 페이지 제목 변경
  setTitle(title) {
    document.title = title;
  }

  async template() {
    return "";
  }
}

export default Component;
