import axios from "axios";
export const AddUser = (user) => async (dispatch) => {
  dispatch({ type: "ADD_USER_REQUEST" });
  try {
    await axios.post("http://localhost:8080/api/add", {
      user,
    });
    dispatch({ type: "ADD_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "ADD_USER_FAILED", error: error });
  }
};
export const GetALlUser = () => async (dispatch) => {
  dispatch({ type: "GET_USER_REQUEST" });
  try {
    const response = await axios.get("http://localhost:8080/api/all");

    dispatch({ type: "GET_USER_SUCCUSS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_FAILED", payload: error });
  }
};

export const DeleteUser = (id) => async (dispatch) => {
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await axios.delete(
      `http://localhost:8080/api/delete/${id}`
    );
    dispatch({ type: "DELETE_USER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "DELETE_USER_FAILED", error: error });
  }
};
