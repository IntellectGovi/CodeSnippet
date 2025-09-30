import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Label } from "../components/UI/Label";
import { cn } from "../lib/utils";
import { Textarea } from "../components/UI/TextArea";
import { apiConnector } from "../services/apiConnector";
import { endpoints } from "../services/apis";
import { Input } from "../components/UI/Input";
import { notify } from "../Utils/Toaster";
import { setLoading } from "../redux/Slices/loadingSlice";
import { useDispatch } from "react-redux";

const SendResetMail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const token = location.pathname.split("/").at(-1);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch;
    dispatch(setLoading(true));
    const payload = {
      password: e.target[0]?.value,
      confirmPassword: e.target[0]?.value,
      token: token,
    };
    const response = await apiConnector(
      "post",
      endpoints?.RESETPASSWORD_API,
      payload
    );
    if (response?.data?.success) {
      dispatch(setLoading(false));
      notify(response?.data?.message, "success");
      navigate("/login");
    } else {
      dispatch(setLoading(false));
      notify(response?.data?.message, "error");
    }
  };

  return (
    <div
      className="w-80"
      style={{
        margin: "0 auto",
      }}
    >
      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="confirmPassword">Confirm password</Label>
          <Input id="confirmPassword" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          RESET PASSWORD &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
};

export default SendResetMail;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
