import { useNavigate } from "react-router-dom";
import { setLoading } from "../../redux/Slices/loadingSlice";
import { apiConnector } from "../apiConnector";
import { courseEndpoints, endpoints } from "../apis";
import { notify } from "../../Utils/Toaster";
import { useDispatch } from "react-redux";

export function sendOTP(email, path) {
  const navigate = useNavigate();
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await apiConnector("POST", endpoints?.SENDOTP_API);
      if (!response?.data?.success) {
        dispatch(setLoading(false));
        notify(response?.data?.message, "success");
      } else {
        notify("OTP Sent Successfully", success);
        navigate(path);
      }
    } catch (e) {
      console.error(e);
      dispatch(setLoading(false));
    }
  };
}

export const login = async (payload) => {
  debugger
  // return async (dispatch) => {
  //   try {
  //     dispatch(setLoading(true));
      const response = await apiConnector("POST", endpoints?.LOGIN_API , payload);
      return response

  //     debugger;
  //     if (!response?.data?.success) {
  //       dispatch(setLoading(false));
  //       notify(response?.data?.message, "success");
  //     } else {
  //       notify("OTP Sent Successfully", success);
  //       navigate(path);
  //     }
  //   } catch (e) {
  //     dispatch(setLoading(false));
  //     notify(e, "error");
  //   }
  // };
}

export const getAllCategory = async () => {
  const response = await apiConnector("GET", courseEndpoints?.COURSE_CATEGORIES_API);
  return response;
};
