// ARIA-EXPANDED placed in parent li item
const navController1 = () => {
  const containsSubmenu = document.querySelectorAll(".contains-submenu");
  containsSubmenu.forEach((parent) => {
    const child = parent.querySelector(".submenu");
    const button = parent.querySelector(".dropdown-btn");

    // Hover
    function navHover(parent, child, button) {
      parent.addEventListener("mouseover", () => {
        submenuOpen(parent, child, button);
      });
    
      parent.addEventListener("mouseout", () => {
        submenuClose(parent, child, button);
      });
    };
    
    // Click
    function navClick(parent, child, button) {
      button.onclick = () => {
        if (parent.getAttribute("aria-expanded") === "false") {
          submenuOpen(parent, child, button);
        } else if (parent.getAttribute("aria-expanded") === "true") {
          submenuClose(parent, child, button);
        }
      }
    }
    
    // Submenu Controllers
    function submenuOpen(parent, child, button) {
      parent.setAttribute("aria-expanded", "true");
      child.style.display = "block";
      button.style.transform = "rotate(180deg)";
    }
    
    function submenuClose(parent, child, button) {
      parent.setAttribute("aria-expanded", "false");
      child.style.display = "none";
      button.style.transform = "rotate(360deg)";
    }

    navHover(parent, child, button);
    navClick(parent, child, button);
  })
};

navController1();