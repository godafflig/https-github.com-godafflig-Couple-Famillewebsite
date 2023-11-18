// GERE AFFICHAGE DU MENU RESPONSIVE
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("saveForm");
    const menuContainer = document.querySelector(".menu-container");

    menuButton.addEventListener("click", () => {

        menuContainer.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // ... (code précédent)

    // Gestion du deuxième modal

    let btnmediatrice = document.getElementById("myBtn1")
    let btn2 = document.getElementById("myBtn2");
    let modal = document.getElementById("myModal");
    let modal2 = document.getElementById("myModal2");
    let modal3 = document.getElementById("myModal3");
    let modal4 = document.getElementById("myModal4");
    // let span2 = document.getElementsByClassName("close")[1]; // Utilisez l'index 1 pour le deuxième modal
    // let span3 = document.getElementsByClassName("close")[2];
    var span4 = document.getElementById("myModal4").querySelector(".close");
    var span3 = document.getElementById("myModal3").querySelector(".close");
    var span2 = document.getElementById("myModal2").querySelector(".close");
    var span1 = document.getElementById("myModal").querySelector(".close");

    btnrdv.onclick = function () {
        modal4.style.display = "block";
    }
    btn2.onclick = function () {
        modal2.style.display = "block";
    }
    btnmediatrice.onclick = function () {
        modal3.style.display = "block";
    }
    span1.onclick = function () {
        modal.style.display = "none";
    }
    span2.onclick = function () {
        modal2.style.display = "none";
    }
    span3.onclick = function () {
        modal3.style.display = "none";
    }
    span4.onclick = function () {
        modal4.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal2) {
            modal2.style.display = "none";
        }
        if (event.target == modal3) {
            modal3.style.display = "none";
        }
        if (event.target == modal4) {
            modal4.style.display = "none";
        }
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});

document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("saveForm");
    const menuContainer = document.querySelector(".nav_list");
    const imageElement = menuButton;

    menuButton.addEventListener("click", () => {
        menuContainer.classList.toggle("active");

        // Vérifiez l'attribut src actuel pour déterminer quelle image afficher
        if (imageElement.getAttribute("src") === "/Image/menu.png") {
            // Changez l'image au clic
            imageElement.setAttribute("src", "/Image/autre_image.png");
        } else {
            // Revert to the original image if it's already changed
            imageElement.setAttribute("src", "/Image/menu.png");
        }

    });
});
let btnmediatrice = document.getElementById("myBtn1")
let btnrdv = document.getElementById("Rdv")
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
let lastScrollY = 0;

function checkScroll() {
    const triggerOffset = window.innerHeight / 6;
    const scrollY = window.scrollY;

    // Vérifiez la direction du défilement
    if (scrollY > lastScrollY) {
        // Vers le bas
        animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top + scrollY;
            if (elementTop < scrollY + window.innerHeight - triggerOffset) {
                element.classList.add('active');
            }
        });
    } else {
        // Vers le haut
        animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top + scrollY;
            if (elementTop > scrollY + window.innerHeight - triggerOffset) {
                element.classList.remove('active');
            }
        });
    }

    lastScrollY = scrollY;
}


    document.getElementById("ouvrirEmail").addEventListener("click", function(event) {
        event.preventDefault();
        var emailLink = document.getElementById("ouvrirEmail").getAttribute("href");
        window.location.href = emailLink;
    });

