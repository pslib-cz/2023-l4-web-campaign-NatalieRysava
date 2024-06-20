document.addEventListener("DOMContentLoaded", () => {
    const hamburgerButtons = document.querySelectorAll(".hamburger-menu");
    
    document.querySelector("body").onclick = (e) => {
        const menus = document.querySelectorAll(".hamburger-menu-list");
        let anyMenuActive = false;
        
        for (const menu of menus) {
            if (!menu.classList.contains("navbar__menu--hidden")) {
                anyMenuActive = true;
            }
            menu.classList.add("navbar__menu--hidden");
        }
        
        if (anyMenuActive) {
            document.body.classList.remove("no-scroll");
        }

        for (const button of hamburgerButtons) {
            button.classList.remove("hamburger-menu--active");
        }
    }
    
    for (const btn of hamburgerButtons) {
        btn.onclick = (event) => {
            event.stopPropagation();
            const menus = document.querySelectorAll(".hamburger-menu-list");
            let anyMenuActive = false;

            for (const menu of menus) {
                menu.classList.toggle("navbar__menu--hidden");
                if (!menu.classList.contains("navbar__menu--hidden")) {
                    anyMenuActive = true;
                }
            }
            
            if (anyMenuActive) {
                document.body.classList.add("no-scroll");
            } else {
                document.body.classList.remove("no-scroll");
            }
            
            btn.classList.toggle("hamburger-menu--active");
        }
    }
});
