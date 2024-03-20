import Dashboard from "./pages/Dashboard.jsx";
import {
    HomeIcon,
    StatsIcon,
    CreditIcon,
    PersonIcon,
    DocumentIcon,
    RocketIcon,
    SupportIcon,
  } from "./components/Icons/Icons";

var dashRoutes = [
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      layout: "/admin",
    },
    {
      path: "/inventory",
      name: "Inventory",
      component: Dashboard,
      layout: "/admin",
    }];

    export default dashRoutes;