import { StyleSheet } from "react-native";

export function parseStyle(fn: (...args: any[]) => any, params: any, theme: any) {
  const result = fn(params, theme);
  return StyleSheet.create(result);
}
