// AI added part to stop scroll when navigation bar is open in mobile
const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector("header nav .main-nav");
if (window.innerWidth <= 767) {
  menuIcon.addEventListener("mouseenter", () => {
    document.body.classList.add("no-scroll");
  });

  menuIcon.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (!navMenu.matches(":hover")) {
        document.body.classList.remove("no-scroll");
      }
    }, 200);
  });

  navMenu.addEventListener("mouseleave", () => {
    document.body.classList.remove("no-scroll");
  });
}
