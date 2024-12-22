
// ARIA-EXPANDED placed in button item
const navController2 = () => {
  const containsSubmenu = document.querySelectorAll(".contains-submenu");
  containsSubmenu.forEach((parent) => {
    const child = parent.querySelector(".submenu");
    const button = parent.querySelector(".dropdown-btn");

    // Hover
    function navHover(parent, child, button) {
      parent.addEventListener("mouseover", () => {
        submenuOpen(child, button);
      });
    
      parent.addEventListener("mouseout", () => {
        submenuClose(child, button);
      });
    };
    
    // Click
    function navClick(child, button) {
      button.addEventListener("click", () => {
        if (button.getAttribute("aria-expanded") === "false") {
          submenuOpen(child, button);
        } else if (button.getAttribute("aria-expanded") === "true") {
          submenuClose(child, button);
        }
      }
    )}
    
    // Submenu Controllers
    function submenuOpen(child, button) {
      button.setAttribute("aria-expanded", "true");
      child.style.display = "block";
      button.style.transform = "rotate(180deg)";
    }
    
    function submenuClose(child, button) {
      button.setAttribute("aria-expanded", "false");
      child.style.display = "none";
      button.style.transform = "rotate(360deg)";
    }

    navHover(parent, child, button);
    navClick(child, button);
  })
};

navController2();