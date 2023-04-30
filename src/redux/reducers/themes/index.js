import { SET_THEME } from "../../actions/themes";
import { useColorScheme } from "react-native";

const themeReducer = (state = { theme: 1 }, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        theme: action.theme, // light or dark
      }
    default:
      return state;
  }
}
// light : 1
// dark : 0
export default themeReducer;
