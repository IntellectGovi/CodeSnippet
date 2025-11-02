"use client";

import { useState } from "react";
import { AppSidebar } from "../components/sideBar/AppSidebar";
import { DashboardStats } from "../components/sideBar/DashboardStats";
import { RecentActivities } from "../components/sideBar/RecentActivity";
import { Menu } from "lucide-react";
import "../styles/dashboard.css";
import LabeledInput from "../components/common/LabelledInput";

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(true);
  const isMobile = window.innerWidth <= 768;

  return (
    <div>
      <AppSidebar />

      <div
        style={{
          width: "70vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="dashboard-about">
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row", gap: "12px" }}>
              <div className="dashboard-logo">{"GU"}</div>
              <div style={{ textAlign: "left" }}>
                <div className="main-font">{"Govind Upadhyay"}</div>

                <div className="dashboard-mail">
                  {"govind.upadhayay19@gmail.com"}
                </div>
              </div>
            </div>
            <button className="custom-button">Edit</button>
          </div>
        </div>
        <div
          className="dashboard-about"
          style={{
            height: "20vh !important",
            width: "100vw !important",
            marginTop: "20px !important",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div style={{ textAlign: "left", gap: "20px" }}>
              <h1 style={{ fontSize: "20px", fontWeight: "600" }}>About</h1>
              <p className="dashboard-mail" style={{ color: "grey" }}>
                {"Tell us Something about yourself"}
              </p>
            </div>
            <button className="custom-button">Edit</button>
          </div>
        </div>
        <div className="dashboard-about">
          <div
            style={{
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <h1 className="main-font">Personal Details</h1>
              <button className="custom-button">Edit</button>
            </div>

            <div style={{ width: "100%", marginTop: "25px" , display:"flex" , gap:"20px" , flexWrap:"wrap"}}>
              <div style={{ width: "30%" }}>
                <LabeledInput
                  label={"First Name"}
                  value={"Govind"}
                  className="col-span-12"
                />
              </div>
              <div style={{ width: "30%" }}>
                <LabeledInput label={"Last Name"} value={"Govind"} />
              </div>
              <div style={{ width: "30%" }}>
                <LabeledInput label={"Account Type"} value={"Govind"} />
              </div>
              <div style={{ width: "30%" }}>
                <LabeledInput label={"Phone No."} value={"Govind"} />
              </div>
              <div style={{ width: "30%" }}>
                <LabeledInput
                  label={"Email"}
                  value={"Govind.upadhayay19@gmail.com"}
                />
              </div>
              <div style={{ width: "30%" }}>
                <LabeledInput label={"Date Of Birth"} value={"12.02.20012"} />
              </div>
              <div style={{ width: "30%" }}>
                <LabeledInput label={"Gender"} value={"Male"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
