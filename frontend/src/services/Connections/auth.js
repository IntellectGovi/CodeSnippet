import { useNavigate } from "react-router-dom";
import { setLoading } from "../../redux/Slices/loadingSlice";
import { apiConnector } from "../apiConnector";
import { courseEndpoints, endpoints } from "../apis";
import { notify } from "../../Utils/Toaster";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/slices/UserSlice";
import { setToken } from "../../redux/slices/authSlice";

export function sendOTP(email, navigate) {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector("POST", endpoints?.SENDOTP_API, {
        email,
      });
      debugger;
      if (response?.data?.success) {
        dispatch(setLoading(false));
        notify(response?.data?.message, "success");
        navigate("/verify-otp");
      } else {
        notify(response?.data?.message, "error");
      }
    } catch (error) {
      console.error(error);
      notify(error, success);
      dispatch(setLoading(false));
    }
  };
}

// export const login = async (payload) => {
//   const dispatch = useDispatch();
//   const response = await apiConnector("POST", endpoints?.LOGIN_API, payload);
//   if (response?.success) {
//     dispatch(setUserData(response));
//     dispatch(setToken(response));
//   }
//   return response;
// };

export const login = (payload) => {
  debugger;
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "POST",
        endpoints?.LOGIN_API,
        payload
      );
      if (response?.success) {
        notify(response?.message, "success");
        dispatch(setUserData(response));
        dispatch(setToken(response));
      } else {
        notify(response?.message, "error");
      }
    } catch (error) {
      console.error("Error while Logging in ", error);
    }
  };
};

export const getAllCategory = async () => {
  const response = await apiConnector(
    "GET",
    courseEndpoints?.COURSE_CATEGORIES_API
  );
  return response;
};
