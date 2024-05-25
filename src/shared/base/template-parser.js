const parseTemplate = (template, componentMap) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(template, 'text/html');

  return Array.from(document.body.childNodes).map(node => processNode(node, componentMap)).join('');
};

const parseAttributes = (node) => {
  const attributes = {};

  for (const attr of node.attributes) {
    attributes[attr.name] = attr.value;
  }

  return attributes;
};

const processNode = (node, componentMap) => {
  if (node.nodeType === Node.TEXT_NODE) {
    return node.textContent;
  }

  const ComponentClass = componentMap[node.tagName.toLowerCase()];

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

  return node.outerHTML;
};

export default parseTemplate;