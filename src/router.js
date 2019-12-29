import Home from "./views/Home"; // เข้าถึงแบบ relative path
import About from "./views/About";
import Contact from "./views/Contact";
import Form from "./views/Form";
import Photo from "./views/Photo";
import User from "./views/User";
import UserProfile from "./views/UserProfile";
import Search from "./views/Search";
import Prob from "./views/Prob";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/form",
    component: Form
  },
  {
    path: "/photo",
    component: Photo
  },
  {
    path: "/user",
    component: User
  },
  {
    path: "/user/:id", // สิ่งนี้เรียกว่า parameter route
    component: UserProfile
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/prob",
    component: Prob
  }
];

const router = new VueRouter({ routes: routes, mode: "history" });

export default router;
