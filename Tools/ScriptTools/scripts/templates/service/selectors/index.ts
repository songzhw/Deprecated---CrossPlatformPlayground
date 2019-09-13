import { Configuration } from "../configuration";
import { resolveOptionalProperty } from "@kobo/_utils";

// TODO change it based on your requirement
export const {{selectorName}} = (state:any, id: string)=> {
  const library = resolveOptionalProperty(`${Configuration.store.namespace}.library`, state);
  return library ? library[id] : {};
};
