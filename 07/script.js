window.addEventListener("load", () => {

    /*:::::::::::::: BOTÃO SELECT CIDADE :::::::::::::: */

    const nameInput = document.querySelector("input#name");
    const cityInput = document.querySelector("input#city");
    const citySelect = document.querySelector("ul#city");
    const cityOption = document.querySelectorAll("ul#city li");
    const modalMobile = document.querySelector(".modal-mobile");
    const modalCityOption = document.querySelectorAll(".modal-mobile ul#city li");

    cityInput.addEventListener("click", () => {

        if (window.innerWidth > 768) {
            citySelect.classList.toggle("hide");

            cityOption.forEach(option => {
                option.addEventListener("click", () => {
                    cityInput.value = option.textContent;
                });
            });

            window.addEventListener("click", (e) => {
                if (!citySelect.classList.contains("hide") && e.target.id != "city") {
                    citySelect.classList.add("hide");
                }
            });
        } else {

            modalMobile.classList.toggle("hide");

            modalCityOption.forEach(option => {
                option.addEventListener("click", () => {
                    cityInput.value = option.textContent
                });
            });

            modalMobile.addEventListener("click", (e) => {
                modalMobile.classList.add("hide");
            });
        };

    });

    window.addEventListener("resize", (e) => {
        if (e.target.innerWidth > 768) {
            if (!modalMobile.classList.contains("hide")) {
                modalMobile.classList.add("hide"); /*ocultar*/
                citySelect.classList.remove("hide"); /*exibir*/
            };
        } else {
            if (!citySelect.classList.contains("hide")) {
                citySelect.classList.add("hide"); /*exibir*/
                modalMobile.classList.remove("hide"); /*ocultar*/
            };
        };

    });

    /*:::::::::::::: FILTRO :::::::::::::: */
    const filterElementByName = document.querySelector(".search-field input#name");
    const filterElementByCity = document.querySelectorAll(".search-field ul li");
    const cards = document.querySelectorAll(".card");

    filterElementByName.addEventListener("input", filterElement);
    filterElementByCity.forEach(option => option.addEventListener("click", filterElement));

    function filterElement() {
        let element = event.target;
        let tag = element;
        if (element.tagName == "LI") {
            tag = "div.location";
            element = element.textContent;
        } else {
            tag = "h3";
            element = element.value;
        }
        if (element != "") {            
            cards.forEach(card => {
                let title = card.querySelector(tag);
                title = title.textContent.toLowerCase();
                let filterText = element.toLowerCase();

                if (!title.includes(filterText)) {
                    card.style.display = "none";
                } else {
                    card.style.display = "block";
                }
            });
        } else {
            cards.forEach(card => {
                card.style.display = "block";
            });
        };
    
    };
    
    document.querySelector("form button").addEventListener("click", (e) => {
        e.preventDefault();
    })
});