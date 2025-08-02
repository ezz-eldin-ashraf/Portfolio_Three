const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector("header nav .main-nav");

// Only for small screens
if (window.innerWidth <= 767) {
  menuIcon.addEventListener("mouseenter", () => {
    document.body.classList.add("no-scroll");
  });

  menuIcon.addEventListener("mouseleave", () => {
    // Only remove scroll if menu isn't open (optional)
    setTimeout(() => {
      if (!navMenu.matches(":hover")) {
        document.body.classList.remove("no-scroll");
      }
    }, 200); // small delay to avoid flicker
  });

  navMenu.addEventListener("mouseleave", () => {
    document.body.classList.remove("no-scroll");
  });
}
