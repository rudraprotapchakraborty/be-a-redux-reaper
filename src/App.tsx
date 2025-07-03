import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 mt-24 px-4">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
