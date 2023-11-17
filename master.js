let lang = 
{
    ar: {
    },
    en : 
    {
    }

}

// let selector = document.getElementById("select");
// selector.onchange = updatelanguage();

// function updatelanguage ()
// {
//     let language = selector.options[selector.selectedIndex].value;
//     let nodse = document.querySelectorAll("[data-lang]");

//     let i = nodse.length;

//     while(i--)
//     {
//         let key = nodse[i].getAttribute('data-lang');
//         nodse[i].innerHTML = lang[language][key];
//     }
// }

window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}