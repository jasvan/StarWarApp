import Home from "../page/Home/Home";
import { Error404 } from "../page/404/Error404";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    component: Error404,
  },
];

export default routes;