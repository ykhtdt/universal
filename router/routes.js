import NotFound from "/src/pages/not-found.js";
import Home from "/src/pages/home.js";
import Posts from "/src/pages/posts.js";
import Post from "/src/pages/post.js";

import Todo from "/src/pages/todo/page.js";

const routes = [
  { path: "/", view: Home },
  { path: "/todo", view: Todo },
  { path: "/posts", view: Posts },
  { path: "/posts/:category", view: Posts },
  { path: "/posts/:category/:id", view: Post },
];

export { routes, NotFound };