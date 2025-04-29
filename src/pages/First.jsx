import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../css/navbar.css';
import '../css/footer.css';
import { Outlet, useLocation } from "react-router-dom";

function First(){
  const location = useLocation();

  // List of defined routes (add your actual defined paths here)
  const knownRoutes = [
    "/",
    "/quote", 
    "/contacts", 
    "/restaurants", 
  ];

  // Routes where footer should always be hidden
  const hideFooterRoutes = ["/restaurants", "/contacts"];

  // Check if current path is in hideFooterRoutes or not in knownRoutes (i.e. it's a 404)
  const shouldHideFooter =
    hideFooterRoutes.includes(location.pathname) ||
    !knownRoutes.includes(location.pathname);

  return (
    <>
      <Navbar />
      <Outlet />
      {!shouldHideFooter && <Footer />}
    </>
  );
}

export default First;