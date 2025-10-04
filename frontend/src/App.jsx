import "./App.css";
import {
  Routes,
  Route,
  useNavigate,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "../src/components/common/Navbar";
import { useEffect, useState } from "react";
import { MainFooter } from "./components/common/MainFooter";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Preloader from "./components/PreLoader/PreLoader";
import { useSelector } from "react-redux";
import { CiShoppingCart } from "react-icons/ci";
import {
  IconActivity,
  IconBriefcase,
  IconChevronDown,
  IconEdit,
  IconHelp,
  IconLogout,
  IconSettings,
  IconShoppingBag,
  IconShoppingCart,
} from "@tabler/icons-react";
import { getAllCategory } from "./services/Connections/auth";
import { notify } from "./Utils/Toaster";
import { useLocalStorage } from "./Utils/useLocalStorage";
import Dashboard from "./Pages/Dashboard";
import OtpLogin from "./components/core/otp/OtpLogin";
import SendResetMail from "./Pages/SendResetMail";
import Form from "./components/core/AboutUs/ContactForm";
import ResetPassword from "./Pages/ResetPassword";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const location = useLocation();
  const token = useLocalStorage("token", "get");
  const userData = useLocalStorage("userData", "get");
  const [catalogList, setCatalogList] = useState([]);

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "aboutUs",
    },
    {
      name: "Catalog ↓",
      dropdown: catalogList,
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];

  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isLoadedOnce, setIsLoadedOnce] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const categoryResponse = async () => {
    try {
      const response = await getAllCategory();

      if (response?.data?.success) {
        setCatalogList(response?.data?.data);
      } else {
        notify("Error Occured while fetching the Category", "error");
      }
    } catch (e) {
      console.error("Error occured while fetching the Category", e);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" && isLoadedOnce) {
      setLoading(true);
      setIsLoadedOnce(true);
    } else {
      setLoading(false);
    }
  }, [location, isLoadedOnce]);

  useEffect(() => {
    categoryResponse();
    setIsProfileDropdownOpen(false);
  }, []);

  return (
    <>
     (
        <div style={{ position: "relative", marginBottom: "0px" }}>
          <Navbar>
            {/* Desktop Navigation */}
            <NavBody>
              <div className="flex items-center">
                <NavbarLogo />
              </div>
              <NavItems items={navItems} />
              {!token ? (
                <div className="flex items-center gap-4 ">
                  <button
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    <NavbarButton
                      variant="secondary"
                      className="cursor-pointer"
                    >
                      Login
                    </NavbarButton>
                  </button>
                  <button onClick={() => navigate("/signup")}>
                    <NavbarButton variant="primary">Sign Up</NavbarButton>
                  </button>
                </div>
              ) : (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Link to="/cart">
                    <button className="relative p-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors">
                      <IconShoppingCart size={24} />
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        3
                      </span>
                    </button>
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() =>
                        setIsProfileDropdownOpen(!isProfileDropdownOpen)
                      }
                      className="flex items-center gap-2 p-2 text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100 transition-colors"
                    >
                      {/* <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <IconUser size={18} className="text-white" />
                  </div> */}
                      <img
                        src={userData?.image}
                        alt="profile"
                        className="w-8 h-8 rounded-full object-cover"
                      />

                      <IconChevronDown
                        size={16}
                        className={`transition-transform ${
                          isProfileDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Profile Dropdown Menu */}
                    {isProfileDropdownOpen === true && (
                      <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-neutral-200 dark:border-neutral-700 z-50">
                        {/* User Info Section */}
                        <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                          <div className="flex items-center gap-3">
                            <div className="">
                              <img
                                src={userData?.image}
                                alt="profile"
                                className="w-8 h-8 rounded-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">
                                {userData?.firstName + " " + userData?.lastName}
                              </h3>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                {userData?.email}
                              </p>
                            </div>
                            <button className="p-1 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300">
                              <IconEdit size={16} />
                            </button>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="p-2">
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                          >
                            <IconActivity size={20} />
                            <span>Profile Activity</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                          >
                            <IconBriefcase size={20} />
                            <span>Manage Projects</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                          >
                            <IconShoppingBag size={20} />
                            <span>Purchases</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                          >
                            <IconSettings size={20} />
                            <span>Account Settings</span>
                          </a>
                          <a
                            href="#"
                            className="flex items-center gap-3 px-3 py-2 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors"
                          >
                            <IconHelp size={20} />
                            <span>Help Center</span>
                          </a>
                        </div>

                        {/* Plan Status */}
                        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-neutral-900 dark:text-neutral-100">
                                Student Plan Active
                              </p>
                              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                284 Days Left
                              </p>
                            </div>
                            <button className="px-3 py-1 bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 rounded-md text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors">
                              Upgrade
                            </button>
                          </div>
                        </div>

                        {/* Logout */}
                        <div className="p-2 border-t border-neutral-200 dark:border-neutral-700">
                          <button
                            className="flex items-center gap-3 px-3 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors w-full"
                            onClick={() => {
                              localStorage.clear();
                              navigate("/");
                            }}
                          >
                            <IconLogout size={20} />
                            <span>Logout</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
              <MobileNavHeader>
                <div className="flex items-center">
                  <NavbarLogo />
                </div>
                <MobileNavToggle
                  isOpen={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                />
              </MobileNavHeader>

              <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)}
              >
                {navItems.map((item, idx) => {
                  return (
                    <div key={`mobile-nav-${idx}`} className="w-full">
                      <a
                        href={item.link}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="relative block text-neutral-600 dark:text-neutral-300"
                      >
                        <span className="block">{item.name}</span>
                      </a>
                      {item?.dropdown?.length > 0 && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item?.dropdown?.map((dropdownItem, dropdownIdx) => {
                            return (
                              <a
                                key={`mobile-dropdown-${idx}-${dropdownIdx}`}
                                href={dropdownItem.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block text-sm text-neutral-500 dark:text-neutral-400"
                              >
                                {dropdownItem.name}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
                {!token ? (
                  <div className="flex w-full flex-col gap-4">
                    <NavbarButton
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/login");
                      }}
                      variant="primary"
                      className="w-full"
                    >
                      Login
                    </NavbarButton>
                    <NavbarButton
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        navigate("/signup");
                      }}
                      variant="primary"
                      className="w-full"
                    >
                      Sign Up
                    </NavbarButton>
                  </div>
                ) : (
                  <Link to="/cart">
                    <CiShoppingCart />
                    {cartItems > 0 && <span>{cartItems}</span>}
                  </Link>
                )}
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
      )

      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Routes>
        <>
          <Route path="/" element={<Home />} />
        </>
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <OpenRoute>
              <SignUp />
            </OpenRoute>
          }
        />
        <Route path="/verify-otp" element={<OtpLogin />} />
        <Route
          path="/forget-password"
          element={<Form type="reset-password" />}
        />
        <Route path="/update-password/:id" element={<SendResetMail />} />
      </Routes>
      {/* FOOTER */}
      {!location.pathname === "/dashboard" && (
        <div style={{ position: "relative", marginBottom: "0px" }}>
          <MainFooter />
        </div>
      )}
    </>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  if (!useLocalStorage("token", "get")) {
    notify("UnAuthorized Access", "error");
    navigate("/");
  } else {
    return children;
  }
};
const OpenRoute = ({ children }) => {
  const navigate = useNavigate();
  if (useLocalStorage("token", "get")) {
    navigate("/dashboard");
  } else {
    return children;
  }
};
