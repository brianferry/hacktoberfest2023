export const findAllShadowroots = (parent: Element, depth = null, set = new Set()) => {
  const currentDepth = 1;
  const recursiveSeek = (_parent: Element) => {
    if (_parent.shadowRoot) {
      // check for selectors in shadowRoot
      set.add(_parent);
      // look for nested components with shadowRoots
      for (const child of [..._parent.shadowRoot.querySelectorAll('*')].filter(i => i.shadowRoot)) {
        // make sure we haven't hit our depth limit
        if (depth === null || currentDepth < depth) {
          recursiveSeek(child);
        }
      }
    }
  };
  recursiveSeek(parent);
  return set;
};
