window.addEventListener("scroll", () => {
  const main = document.querySelector("#main") as HTMLDivElement;
  const header = document.querySelector("#header") as HTMLDivElement;
  if (!main || !header) {
    return;
  }
  const headerHeight = header?.getBoundingClientRect().height;
  const mainY = main?.getBoundingClientRect().top;
  header.style.opacity = (3 * headerHeight - mainY) / headerHeight + "";
});

export {};
