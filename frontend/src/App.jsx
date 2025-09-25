import "./App.css";
import { Routes, Route, useNavigate, useNavigation } from "react-router-dom";
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
function App() {
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
      dropdown: [
        { name: "Electronics", link: "#electronics" },
        { name: "Clothing", link: "#clothing" },
        { name: "Home & Garden", link: "#home-garden" },
        { name: "Sports", link: "#sports" },
        { name: "Books", link: "#books" },
        { name: "Toys", link: "#toys" },
      ],
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

  useEffect(() => {
    if (location.pathname === "/" && isLoadedOnce) {
      setLoading(true);
      setIsLoadedOnce(true);
      // const timer = setTimeout(() => {
      //   setLoading(false);
      // }, 3000);
      // return () => clearTimeout(timer)
    } else {
      setLoading(false);
    }
  }, [location, isLoadedOnce]);
  return (
    <>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center">
            <NavbarLogo />
          </div>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 ">
            <button
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              <NavbarButton variant="secondary" className="cursor-pointer">
                Login
              </NavbarButton>
            </button>
            <button onClick={() => navigate("/signup")}>
              <NavbarButton variant="primary">Sign Up</NavbarButton>
            </button>
          </div>
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
                  {console.log("item?.dropdownitem?.dropdown", item?.dropdown)}
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
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <Routes>
        <>
          <Route path="/" element={<Home />} />
        </>
        <Route path="/aboutUs" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* FOOTER */}
      <div style={{ position: "relative", marginBottom: "0px" }}>
        <MainFooter />
      </div>
    </>
  );
}

export default App;
