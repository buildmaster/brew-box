export function combineConditionalClassNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
