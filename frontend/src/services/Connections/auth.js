import { setLoading } from "../../redux/Slices/loadingSlice";
import { apiConnector } from "../apiConnector";
import { courseEndpoints, endpoints } from "../apis";
import { notify } from "../../Utils/Toaster";
import { setUserData } from "../../redux/slices/UserSlice";
import { setToken } from "../../redux/slices/authSlice";

export function sendOTP(email, navigate) {
  return async (dispatch) => {
    ;
    try {
      dispatch(setLoading(true));
      const response = await apiConnector("POST", endpoints?.SENDOTP_API, {
        email,
      });
      if (response?.data?.success) {
        dispatch(setLoading(false));
        notify(response?.data?.message, "success");
        navigate("/verify-otp");
      } else {
        notify(response?.data?.message, "error");
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.error(error);
      notify(error?.response?.data?.message, "error");
    }
  };
}

export function signup(payload, navigate) {
  return async (dispatch) => {
    dispatch(setLoading(true));
    ;
    try {
      const response = await apiConnector(
        "POST",
        endpoints?.SIGNUP_API,
        payload
      );
      if (response?.data?.success) {
        dispatch(setLoading(false));
        notify(response?.data?.message, "success");
        navigate("/login");
      } else {
        dispatch(setLoading(false));
        notify(response?.data?.message);
      }
    } catch (error) {
      dispatch(setLoading(false));
      notify(error?.response?.data?.message, "error");
      console.error(error);
    }
  };
}

export const login = (payload, navigate) => {
  return async (dispatch) => {
    try {
      const response = await apiConnector(
        "POST",
        endpoints?.LOGIN_API,
        payload
      );
      if (response?.data?.success) {
        notify(response?.data?.message, "success");
        dispatch(setUserData(response?.data?.user));
        dispatch(setToken(response?.data?.token));
        navigate("/dashboard");
      } else {
        notify(response?.data?.message, "error");
      }
    } catch (error) {
      dispatch(setLoading(false));
      notify(error?.response?.data?.message, "error");

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

export const resetPasswordToken = async (email) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector(
        "POST",
        endpoints?.RESETPASSTOKEN_API,
        { email }
      );
      if (!response) {
        dispatch(setLoading(false));
      }
    } catch (error) {
      dispatch(setLoading(false));
      console.error(error);
    }
  };
};
