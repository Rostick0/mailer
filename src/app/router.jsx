import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Confirm = lazy(() => import("../pages/Confirm"));
const Contact = lazy(() => import("../pages/Contact"));
const Faq = lazy(() => import("../pages/Faq"));
const Home = lazy(() => import("../pages/Home"));
const IMAP = lazy(() => import("../pages/IMAP"));
const Login = lazy(() => import("../pages/Login"));
const Mailing = lazy(() => import("../pages/Mailing"));
const Pricing = lazy(() => import("../pages/Pricing"));
const Proxy = lazy(() => import("../pages/Proxy"));
const Register = lazy(() => import("../pages/Register"));
const SMTP = lazy(() => import("../pages/SMTP"));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/confirm" element={<Confirm />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/imap" element={<IMAP />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mailing" element={<Mailing />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/proxy" element={<Proxy />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/smtp" element={<SMTP />}></Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
