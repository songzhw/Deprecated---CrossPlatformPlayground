export function removeItem<T>(ary: T[], item: T) {
  return ary.filter(element => element !== item);
}


export function removeBy<T>(ary: T[], filter: (item: T) => boolean) {
  return ary.filter(filter);
}


