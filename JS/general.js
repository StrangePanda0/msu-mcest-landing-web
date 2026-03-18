function setTheme(theme){
    document.getElementById("body").className = theme;
    localStorage.setItem("theme", theme);
}

/* Load saved theme */

window.onload = function(){

    let savedTheme = localStorage.getItem("theme");

    if(savedTheme){
        document.body.className = savedTheme;
    }
};