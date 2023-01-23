import "./style.css";

// import { initScene } from "./scene/scene";

// initScene();

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("nav");
menuButton?.addEventListener("click", () => {
  nav?.classList.toggle("hidden");
});
