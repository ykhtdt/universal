/**
 * 주어진 템플릿을 DOMParser를 사용하여 XML 문서로 파싱한 후, 각 노드를 컴포넌트 맵을 통해 처리하고 조합하여 최종 문자열을 반환합니다.
 * tagName을 템플릿에서 작성한 태그 명 그대로 사용하기 위해 `application/xml`을 사용하여 XML 문서로 파싱한다.
 */
const parseTemplate = (template, componentMap) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(`<div>${template}</div>`, 'application/xml');

  return Array.from(document.documentElement.childNodes).map(node => processNode(node, componentMap)).join('');
};

/**
 * 노드의 속성을 객체로 파싱하여 반환한다.
 * 컴포넌트의 경우 props로 사용할 수 있게 한다.
 */
const parseAttributes = (node) => {
  return Array.from(node.attributes).reduce((attributes, attr) => {
    attributes[attr.name] = attr.value;
    return attributes;
  }, {});
};

/**
 * 주어진 노드를 컴포넌트 맵을 이용하여 처리합니다.
 * 텍스트 노드인 경우 텍스트를 반환하고, 컴포넌트 클래스가 있는 경우 해당 컴포넌트를 생성하여 템플릿을 호출합니다.
 * 그렇지 않은 경우에는 노드의 속성과 자식 노드를 처리하여 HTML 문자열을 생성합니다.
 */
const processNode = (node, componentMap) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  const ComponentClass = componentMap[node.tagName];

  if (ComponentClass) {
    const props = parseAttributes(node);
    const children = Array.from(node.childNodes).map(child => processNode(child, componentMap)).join('');
  
    const component = new ComponentClass({
      props: {
        ...props,
        children
      }
    });

    return component.template();
  }

  const attributes = Array.from(node.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' ');
  const children = Array.from(node.childNodes).map(child => processNode(child, componentMap)).join('');

  return `<${node.tagName} ${attributes}>${children}</${node.tagName}>`;
};

export default parseTemplate;