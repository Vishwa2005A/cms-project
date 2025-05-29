import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import BasicLayouts from "../layout/BasicLayout";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BasicLayouts />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About/>} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}