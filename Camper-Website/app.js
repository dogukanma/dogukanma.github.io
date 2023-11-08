document.addEventListener("DOMContentLoaded", () => {
  const toggleDropdown = document.querySelector(".toggle-dropdown");
  const dropdownMenu = document.querySelector(".ul-navbar-mobile");
  console.log(toggleDropdown);
  console.log(dropdownMenu);

  toggleDropdown.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("hide")) {
      dropdownMenu.classList.remove("hide");
    } else {
      dropdownMenu.classList.add("hide");
    }
  });
});
