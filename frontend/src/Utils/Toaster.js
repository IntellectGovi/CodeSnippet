import toast from "react-hot-toast";

export const notify = (message, type) => {
  if (type === "success") {
    toast.success(message);
  } else if (type === "error") {
    toast.error(message);
  } else if (type === "Welcome") {
    toast("Hello Darkness!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  } else {
    toast(message);
  }
};
