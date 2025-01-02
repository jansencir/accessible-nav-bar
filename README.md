# Accessible Nav Bar
Build a nav bar with submenu's that's accessibility friendly

## Objective
Create a navigation bar with submenu's that open/close with hover, or when a button is clicked (with the enter key).

## Note
I'll update this over time as I learn more about accessibility and best practices (I'm still a beginner). If you would like to give me pointers, please don't hesitate! (:

## How It Works
It is a single module that handles the navbar events.
1. The module grabs the parent `<li>` with `class="contains-submenu"`
2. The module then looks for the `<button>` with `class="dropdown-btn"` and adds it to a variable
3. The module then looks for the child `<ul>` submenu with `class="submenu"`
4. A hover event listener is attached to the parent `<li>` element
5. A click event listener is attached to the `<button>` element
6. Finally, `aria-expanded=true/false` is toggled depending on if the submenu is open or close which is controlled by the submenuOpen and submenuClose functions

As long as your `class="contains-submenu"`, `class="dropdown-btn"`, and `class="submenu"` are in the right place, it should work.

## Versions (2)
When researching the placement of "aria-expanded," I was getting different two answers. So, I did the only logical thing and did a version for both until I get a definite concrete one.

### Place "aria-expanded" in the parent `<li>` tag
Used in:
- index.html
- main1.js

### Place "aria-expanded" in the `<button>` that toggles the submenu
Used in:
- index2.html
- main2.js