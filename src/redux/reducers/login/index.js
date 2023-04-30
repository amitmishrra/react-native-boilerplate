import { LOGIN_SUCCESS, LOGIN_START, LOGIN_FAILURE } from "../../actions/login";

const initialState = {
  loading: false,
  userData: null,
  errorMessage: null,
}

const loginReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...initialState,
        loading: true,
      }
    case LOGIN_SUCCESS:
      return {
        ...initialState,
        userData: action.userData,
      }
    case LOGIN_FAILURE:
      return {
        ...initialState,
        errorMessage: action.errorMessage,
      }
    default:
      return state;
  }
}

export default loginReducer;
