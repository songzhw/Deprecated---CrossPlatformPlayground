export function getLayout(node: Element) {
  if (typeof node.getBoundingClientRect === "function") {
    return node.getBoundingClientRect();
  }
  return null;
}
