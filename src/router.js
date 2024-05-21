import Home from "./pages/home.js";
import Posts from "./pages/posts.js";
import Post from "./pages/post.js";
import NotFound from "./pages/not-found.js";

const pathToRegex = (path) => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "([^\\/]+)") + "$");

const getParams = (match) => {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

  return Object.fromEntries(keys.map((key, i) => {
    return [key, values[i]];
  }));
};

// 새로운 URL로 이동하고, 이동한 후에는 새로운 URL에 따라 적절한 페이지를 렌더링하기 위해 router 함수를 호출한다.
const redirectTo = (url) => {
  window.history.pushState({}, "", url);
  router();
};

// 브라우저의 URL 경로에 따라 적절한 페이지를 렌더링
const router = async () => {
  // 현재 URL 경로를 가져옴
  const currentPath = window.location.pathname;

  // 현재 경로가 슬래시로 끝나면 슬래시를 제거하고 리디렉션
  if (currentPath !== "/" && currentPath.endsWith("/")) {
    const trimmedPath = currentPath.slice(0, -1);
    redirectTo(trimmedPath);
    return;
  }

  // 주어진 경로에 대해 페이지를 매핑
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts },
    { path: "/posts/:id", view: Posts },
    { path: "/posts/:category/:id", view: Post },
  ];

  // 현재 URL 경로와 각 경로에 대한 페이지 클래스를 매핑하여 배열에 저장한다.
  const potentialMatches = routes.map(route => {
    return {
      route: route,
      result: currentPath.match(pathToRegex(route.path))
    };
  });

  // 현재 URL에 대한 매칭되는 경로를 찾는다.
  let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

  // 매칭되는 경로가 없으면 404로 설정한다.
  if (!match) {
    match = {
      route: {
        path: "/404",
        view: NotFound,
      },
      result: [currentPath]
    };
  }

  // 매칭된 경로와 URL이 정확히 일치하지 않는 경우 404 처리
  // ex. `/posts/category/id`는 `/posts/:category`에 매칭되지 않는다.
  const matchIsValid = match.result && match.result[0] === currentPath;

  if (!matchIsValid) {
    match = {
      route: {
        path: "/404",
        view: NotFound,
      },
      result: [currentPath]
    };
  }

  // match에 따라 뷰(페이지 클래스의 인스턴스)를 생성한다.
  new match.route.view({
    target: document.querySelector("#app"),
    params: getParams(match)
  });

  // console.log(getParams(match));

  // document.querySelector("#app").innerHTML = await view.template();
};

// 브라우저의 뒤로가기/앞으로 가기 버튼을 클릭할 때마다 router 함수가 호출되어 적절한 페이지를 렌더링한다.
window.addEventListener("popstate", router);

// 페이지의 모든 HTML이 로드되고 파싱된 후에 실행되어, 사용자가 링크를 클릭했을 때 페이지를 새로고침하지 않고도
// 해당 링크에 대한 내용을 로드하고 렌더링한다.
document.addEventListener("DOMContentLoaded", () => {
  // 사용자가 클릭 이벤트를 발생시킬 때, 클릭된 요소가 a 태그인지 확인하고
  // a 태그라면 해당 링크로 이동하는 기본 동작을 막고 redirectTo 함수를 호출한다.
  document.body.addEventListener("click", (event) => {
    const anchor = event.target.closest("a");

    if (anchor) {
      event.preventDefault();

      const currentUrl = window.location.href;
      const nextUrl = anchor.href;

      if (nextUrl !== currentUrl) {
        redirectTo(nextUrl);
      }
    }
  });
});

export {
  router,
  redirectTo,
};