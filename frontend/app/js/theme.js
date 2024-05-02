const changeThemeButton = document.getElementById('theme');
let htmlStyle = document.getElementById('htmlId');
let whiteColor = document.getElementsByClassName('whiteColor');
let grayColor = document.getElementsByClassName('grayColor');

changeThemeButton.addEventListener('click', function(e) {
    e.preventDefault();
    changeTheme();
    if(changeThemeButton.innerHTML == 'тема<br>светлая') {
        changeThemeButton.innerHTML = 'тема<br>темная';
    } else {
        changeThemeButton.innerHTML = 'тема<br>светлая';
    }
});

function changeTheme() {
    if(htmlStyle.style.backgroundColor == "rgb(55, 55, 55)") {
        htmlStyle.style.backgroundColor = "rgba(232, 232, 232, 1)";
    }
    else{
        htmlStyle.style.backgroundColor = "rgb(55, 55, 55)";
    }
    for (let i = 0; i < whiteColor.length; i++) {
        if(whiteColor[i].style.color == "rgb(255, 255, 255)") {
        whiteColor[i].style.color = "rgba(0, 0, 0, 1)";
        }
        else{
        whiteColor[i].style.color = "rgb(255, 255, 255)"
        }
    }
    for (let i = 0; i < grayColor.length; i++) {
        console.log(grayColor[i].style.color);
        if(grayColor[i].style.color == "rgb(190, 190, 190)") {
            grayColor[i].style.color = "rgba(70, 70, 70, 1)";
        }
        else{
            grayColor[i].style.color = "rgb(190, 190, 190)"
        }
    }
}