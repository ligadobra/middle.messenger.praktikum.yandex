export default function render(query: string, component: any) {
  const root = document.querySelector(query);

  if (root) {
    return root.appendChild(component.getContent());
  }

  component.dispatchComponentDidMount();

  return root;
}
