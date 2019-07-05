import { Configuration } from "../configuration";
import { resolveOptionalProperty } from "@kobo/_utils";

export const getLibrary = (state:any)=> {
  const library = resolveOptionalProperty(`${Configuration.store.namespace}.library`, state);
  return library ? Array.from(library) : [];
};
