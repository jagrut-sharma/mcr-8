import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <Outlet />
    </div>
  );
}
