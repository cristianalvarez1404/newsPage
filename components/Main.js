import { Categories } from "./Categories.js";
import { Ad } from "./Ad.js";
import { RelevantNews } from "./Relevant-News.js";
import { PrimaryNews } from "./Primary-News.js";
export const Main = () => {
  const $main = document.createElement("main");
  $main.classList.add("main");
  $main.appendChild(RelevantNews());
  $main.appendChild(PrimaryNews());
  $main.appendChild(Ad());
  $main.appendChild(RelevantNews());
  $main.appendChild(Categories());

  return $main;
};
