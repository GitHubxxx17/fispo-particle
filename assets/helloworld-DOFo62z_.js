import { u as useMDXComponents, j as jsxRuntimeExports } from "../client-entry.js";
const frontmatter = {
  "title": "hello world",
  "categories": "test",
  "date": "2025-03-07 10:00:00",
  "tags": ["test"],
  "cover": "/cover/a.jpg"
};
const mdInfo = "hello worldasd{% tip success %}aaa{% endtip %}";
const toc = [{
  "id": "hello-world",
  "text": "hello world",
  "depth": 1
}, {
  "id": "asd",
  "text": "asd",
  "depth": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    div: "div",
    h1: "h1",
    h2: "h2",
    p: "p",
    span: "span",
    ...useMDXComponents(),
    ...props.components
  }, { Icon } = _components;
  if (!Icon) _missingMdxReference("Icon");
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsxs(_components.h1, {
      id: "hello-world",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#hello-world",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "hello world"]
    }), "\n", jsxRuntimeExports.jsxs(_components.h2, {
      id: "asd",
      children: [jsxRuntimeExports.jsx(_components.a, {
        className: "header-anchor",
        href: "#asd",
        children: jsxRuntimeExports.jsx(_components.span, {
          className: "icon icon-link"
        })
      }), "asd"]
    }), "\n", jsxRuntimeExports.jsxs(_components.div, {
      className: "tip success",
      children: [jsxRuntimeExports.jsx(_components.span, {
        className: "tip-icon",
        children: jsxRuntimeExports.jsx(Icon, {
          icon: "check"
        })
      }), "\n", jsxRuntimeExports.jsx(_components.p, {
        children: "aaa"
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected component `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
export {
  MDXContent as default,
  frontmatter,
  mdInfo,
  toc
};
