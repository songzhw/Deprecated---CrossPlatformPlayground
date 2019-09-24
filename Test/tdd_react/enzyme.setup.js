import { configure } from "enzyme/build";
import Adapter from "enzyme-adapter-react-16/build";
import JestStyledComponents from "jest-styled-components";

configure({ adapter: new Adapter() });
