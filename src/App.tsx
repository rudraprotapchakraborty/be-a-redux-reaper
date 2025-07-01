import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";

function App() {
  return (
    <div className="mt-24">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
