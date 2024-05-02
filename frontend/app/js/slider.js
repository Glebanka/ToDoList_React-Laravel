// function slider(){
//     let radios = ["r1", "r2", "r3", "r4"];
//     let radio = [];
//     for (let i = 0; i < radios.length; i++) {
//         if (radios[i] == "r4"){
//             document.getElementById(radios[0]).checked = true;
//         }
//         else if(document.getElementById(radios[i]).checked){
//             radio = radios[i+1];
//             document.getElementById(radio).checked = true;
//             break;
//         }
//     }
// }
// setInterval(slider, 8000);

function slider(direction) {
    let radios = ["r1", "r2", "r3", "r4"];
    let radio;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i] == "r4") {
            document.getElementById(radios[0]).checked = true;
        } else if (document.getElementById(radios[i]).checked) {
            if (direction === "next") {
                radio = radios[i + 1] || radios[0];
            } else if (direction === "prev") {
                radio = radios[i - 1] || radios[radios.length - 1];
            }
            document.getElementById(radio).checked = true;
            updateMarginLeft(radio);
            break;
        }
    }
}

function updateMarginLeft(radio) {
    let sliderItem = document.querySelector('.s1');
    switch (radio) {
        case "r1":
            sliderItem.style.marginLeft = '37.5%';
            break;
        case "r2":
            sliderItem.style.marginLeft = '12.5%';
            break;
        case "r3":
            sliderItem.style.marginLeft = '-12.5%';
            break;
        case "r4":
            sliderItem.style.marginLeft = '-37.5%';
            break;
    }
}

setInterval(() => slider('next'), 8000);