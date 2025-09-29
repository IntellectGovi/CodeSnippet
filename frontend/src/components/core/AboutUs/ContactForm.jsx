"use client";
import * as React from "react";

import { cn } from "../../../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "../../UI/Label";
import { Input } from "../../UI/Input";
import { Textarea } from "../../UI/TextArea";
import { useState } from "react";
import { login, sendOTP } from "../../../services/Connections/auth";
import { apiConnector } from "../../../services/apiConnector";
import { endpoints } from "../../../services/apis";
import { useDispatch } from "react-redux";
import { notify } from "../../../Utils/Toaster";
import { useLocalStorage } from "../../../Utils/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../../redux/slices/UserSlice";
import { setSignUpData, setToken } from "../../../redux/slices/authSlice";

export default function Form({ type }) {
  const [userType, setUserType] = React.useState("student");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    if (type === "Login") {
      const payload = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      debugger;
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
        debugger;
        notify(response?.data?.message, "error");
      }
    }

    if (type === "SignUp") {
      console.log("e", e);
      debugger;

      const payload = {
        firstName: e.target[0]?.value,
        lastName: e.target[1]?.value,
        email: e.target[2]?.value,
        password: e.target[3]?.value,
        confirmPassword: e.target[4]?.value,
        accountType: userType,
      };

      dispatch(setSignUpData(payload));

      dispatch(sendOTP(payload?.email, navigate));
    }
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      {type === "SignUp" && (
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1 dark:bg-zinc-800">
          <button
            type="button"
            onClick={() => setUserType("student")}
            className={cn(
              "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
              userType === "student"
                ? "bg-white text-black shadow-sm dark:bg-zinc-700 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            )}
          >
            Student
          </button>
          <button
            type="button"
            onClick={() => setUserType("instructor")}
            className={cn(
              "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
              userType === "instructor"
                ? "bg-white text-black shadow-sm dark:bg-zinc-700 dark:text-white"
                : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            )}
          >
            Instructor
          </button>
        </div>
      )}
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
        {type === "Contact"
          ? "Got a Idea? We've got the skills. Let's team up"
          : type === "Login"
          ? "Welcome back to CodeSnippet"
          : "Create your CodeSnippet account"}
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        {type === "Contact"
          ? "Tell us more about yourself and what you're got in mind."
          : type === "LoginIn"
          ? "Login to CodeSnippet if you can because we don&apos;t have a login flow yet"
          : "Create an account to get started with CodeSnippet"}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {type === "SignUp" && (
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
        )}
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="yourEmail@fc.com" type="email" />
        </LabelInputContainer>
        {type === "Contact" ||
          ("SignUp" && (
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>
          ))}
        {type === "SignUp" && (
          <LabelInputContainer className="mb-4">
            <Label htmlFor="twitterpassword">Your twitter password</Label>
            <Input
              id="twitterpassword"
              placeholder="••••••••"
              type="password"
            />
          </LabelInputContainer>
        )}
        {type === "Contact" && (
          <LabelInputContainer className="mb-8">
            <Label htmlFor="bio">Tell us about yourself</Label>
            <Textarea
              id="bio"
              placeholder="Write a brief description about yourself..."
              rows={4}
            />
          </LabelInputContainer>
        )}
        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
        >
          {{
            Contact: "Send Message",
            SignUp: "Sign up",
            Login: "Log in",
          }[type] || ""}{" "}
          &rarr;
          <BottomGradient />
        </button>

        {type === "SignUp" && (
          <>
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

            <div className="flex flex-col space-y-4">
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="submit"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  GitHub
                </span>
                <BottomGradient />
              </button>
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="submit"
              >
                <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  Google
                </span>
                <BottomGradient />
              </button>
              <button
                className="group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-4 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
                type="submit"
              >
                <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300">
                  OnlyFans
                </span>
                <BottomGradient />
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

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
