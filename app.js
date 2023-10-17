import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";

const $app = document.getElementById("app");

export const app = () => {
  $app.appendChild(Header());
  $app.appendChild(Main());
  $app.appendChild(Footer());
  Router();
};
