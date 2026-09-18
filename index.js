
    // Get all navbar links
    const navLinks = document.querySelectorAll(".nav-link");

    // Get all sections
    const sections = document.querySelectorAll("section[id]");


    function setActiveLink(id) {

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + id) {
                link.classList.add("active");
            }

        });

    }


    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    setActiveLink(entry.target.id);

                }

            });

        },

        {
           

            rootMargin: "-100px 0px -50% 0px",

            threshold: 0
        }

    );


    
    sections.forEach(section => {

        observer.observe(section);

    });


    
    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });





// SIMPLE MOBILE MENU 

const menuBtn =
        document.querySelector(".menu-btn");

    const navMenu =
        document.querySelector(".nav-menu");

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("show");

    });


    document
        .querySelectorAll(".nav-link")
        .forEach(link => {

            link.addEventListener("click", () => {

                navMenu.classList.remove("show");

            });

        });





    // PRODUCT ENQUIRY AUTO SELECT
    

    const enquireButtons =
        document.querySelectorAll(".enquire-btn");

    const productSelect =
        document.getElementById("productSelect");


    enquireButtons.forEach(button => {

        button.addEventListener("click", function (event) {

           
            const product =
                this.getAttribute("data-product");


            
            if (productSelect) {

                productSelect.value = product;

            }

        });

    });





