const mode    = document.getElementById("modo");
const light   = document.getElementById("light");
const dark    = document.getElementById("dark");
const body    = document.body;

mode.addEventListener('click', function(){
    body.classList.toggle('light-theme');

    dark.classList.toggle('inactive');
    light.classList.toggle('inactive');
});