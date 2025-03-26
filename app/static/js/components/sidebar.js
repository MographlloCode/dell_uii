document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar-wrapper");
    const dockButton = document.getElementById("dock-sidebar-btn");
    const userDetail = document.getElementById("user-detail");
    const menuItems = document.querySelectorAll(".menu-item-headline div p");
    const menuItemsLI = document.querySelectorAll(".menu-items-li");
    const submenus = document.querySelectorAll(".submenu-list");
    const dropSubmenuButtons = document.querySelectorAll("button[title$='-dropwdown-btn']")

    function toggleClass(element, className) {
        element.classList.toggle(className);
        console.log("Togglou")
    }

    function toggleSidebar() {
        dockButton.addEventListener("click", () => {
            const isOpen = sidebar.classList.contains("open");

            toggleMenuItems(isOpen)
            toggleSubmenuDropdownButtons(isOpen)
            toggleSubmenus(isOpen)

            toggleClass(sidebar, "open");
            toggleClass(sidebar, "closed");
            toggleClass(userDetail, "closed");
        });
    }

    function toggleSubmenuDropdownButtons(isOpen) {
        if (isOpen) {
            dropSubmenuButtons.forEach(subButton => subButton.classList.add("sidebar-closed")); 
            dropSubmenuButtons.forEach(subButton => subButton.classList.add("dwn-btn-open"));
        } else {
            dropSubmenuButtons.forEach(subButton => subButton.classList.remove("sidebar-closed"));
            dropSubmenuButtons.forEach(subButton => subButton.classList.remove("dwn-btn-open"));
        }
    }

    function toggleSubmenus(isOpen) {
        if (isOpen) {
            submenus.forEach(submenu => submenu.classList.add("sidebar-closed"));
            submenus.forEach(item => item.classList.add("submenu-closed"));
        } else {
            submenus.forEach(item => item.classList.remove("sidebar-closed"));
            submenus.forEach(item => item.classList.remove("submenu-open"));
        }
    }

    function toggleMenuItems(isOpen) {
        if (isOpen) {
            menuItems.forEach(item => item.classList.add("sidebar-closed"));
        } else {
            menuItems.forEach(item => item.classList.remove("sidebar-closed"));
        }
    }

    menuItemsLI.forEach(menuItem => {
        menuItem.addEventListener("click", function() {
            const isOpen = sidebar.classList.contains("open");

            const menuItemSubmenu = this.querySelector(".submenu-list")
            const menuItemDropdownBtn = this.querySelector(".dropdown-btn")
            const labels = document.querySelectorAll(".menu-item-label");

            if(isOpen) {
                // Toggle Submenu
                if(menuItemSubmenu.classList.contains("submenu-closed")){
                    menuItemSubmenu.classList.remove("submenu-closed")
                    menuItemSubmenu.classList.add("submenu-open")
                } else {
                    menuItemSubmenu.classList.remove("submenu-open")
                    menuItemSubmenu.classList.add("submenu-closed")
                }

                // Toggle Drodpwon Button
                toggleClass(menuItemDropdownBtn, "dwn-btn-open")

                // Show all labels
                labels.forEach(label => {
                    if(label.classList.contains("sidebar-closed")) {
                        label.classList.remove("sidebar-closed")
                    }
                })
            } else {
                // Open Sidebar
                sidebar.classList.remove("closed")
                sidebar.classList.add("open")

                // Show Dropdown Buttons and remove the behavior of open if present
                dropSubmenuButtons.forEach(button => {
                    button.classList.remove("sidebar-closed")

                    if(button.classList.contains('dwn-btn-open')) {
                        button.classList.remove('dwn-btn-open')
                    }
                })

                // Add open behavior to current dropdown button
                if(!menuItemDropdownBtn.classList.contains("dwn-btn-open")) {
                    menuItemDropdownBtn.classList.add("dwn-btn-open")
                }

                // Show all labels
                labels.forEach(label => {
                    toggleClass(label, "sidebar-closed")
                })

                // Remove sidebar closed behavior and toggle Submenu
                toggleClass(menuItemSubmenu, "sidebar-closed")
                if(menuItemSubmenu.classList.contains("submenu-closed")) {
                    menuItemSubmenu.classList.remove("submenu-closed")
                    menuItemSubmenu.classList.add("submenu-open")
                }
            }
        })
    })

    toggleSidebar()

});