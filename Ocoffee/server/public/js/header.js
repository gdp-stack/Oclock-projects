function toggleMenuVisibility() {
  console.log("test");
  if (
    document
      .querySelector(".nav-menu-mobile-responsive")
      .classList.contains("visible")
  ) {
    document
      .querySelector(".nav-menu-mobile-responsive")
      .classList.remove("visible");
    console.log("test2");
  } else {
    document
      .querySelector(".nav-menu-mobile-responsive")
      .classList.add("visible");
    console.log("test3");
  }
}
