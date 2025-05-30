import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import BasicLayouts from "../layout/BasicLayout";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import AddData from "../pages/dashboard/AddData";
import Intro from "../pages/dashboard/Intro";
import Profile from "../pages/dashboard/Profile";
import DashboardLayouts from "../layout/Dashboard.Layouts";
import PrivateRoute from "./PrivateRoute";



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
      <Route
				path="/dashboard"
				element={
					<PrivateRoute>
						<DashboardLayouts/>
					</PrivateRoute>
				}
			>
				<Route path="/dashboard/intro" element={<Intro />} />
				<Route path="/dashboard/adddata" element={<AddData />} />
				<Route path="/dashboard/profile" element={<Profile />} />
			</Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}