import { Category } from "./Category.js";

export const Categories = () => {
  const $categories = document.createElement("section");
  $categories.classList.add("categories");
  $categories.appendChild(Category());
  $categories.appendChild(Category());
  $categories.appendChild(Category());
  $categories.appendChild(Category());
  $categories.appendChild(Category());
  $categories.appendChild(Category());
  return $categories;
};
