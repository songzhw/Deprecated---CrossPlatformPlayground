import LocalizedStrings from "react-native-localization";

const i18nStrings = require("./strings.json");
/* make it "any", so we could get no warnings when we use `strings.hello` */
export const strings : any = new LocalizedStrings(i18nStrings);
