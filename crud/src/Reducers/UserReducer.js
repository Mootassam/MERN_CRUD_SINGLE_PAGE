export const UserReducer = (state = { User: [] }, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return { loading: true };
    case "GET_USER_SUCCUSS":
      return { loading: true, User: action.payload };
    case "GET_USER_FAILED":
      return { ...state, payload: action.payload };
    default:
      return state;
  }
};

export const AddUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_USER_REQUEST":
      return { loading: true };
    case "ADD_USER_SUCCESS":
      return { loading: false, success: true };
      window.location.reload();
    case "ADD_USER_FAILED":
      return { loading: true, error: action.error };
    default:
      return state;
  }
};

export const DeleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return { loading: true };
    case "DELETE_USER_SUCCESS":
      return { loading: false, success: true };
    case "DELETE_USER_FAILED":
      return { loading: true, payload: action.error };

    default:
      return state;
  }
};
