import { types } from "../actions";
const { USER } = types;

const initialState = {
  signedIn: true,
  loading: false
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER.SIGNIN_REQUEST: {
      return {
        ...state,
        loading: true
      };
    }
    default: {
      return state;
    }
  }
}

export default authReducer;
