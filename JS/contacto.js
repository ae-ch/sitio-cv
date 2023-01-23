const b_email = document.getElementById("button-email");
const t_email = document.getElementById("target-email");

const b_tel = document.getElementById("button-tel");
const t_tel = document.getElementById("target-tel");

const b_address = document.getElementById("button-address");
const t_address = document.getElementById("target-address");

const b_portfolio = document.getElementById("button-portfolio");
const t_portfolio = document.getElementById("target-portfolio");

b_email.addEventListener('click', function(){
    t_email.classList.toggle('inactive');
    t_address.classList.add('inactive');
    t_tel.classList.add('inactive');
    t_portfolio.classList.add('inactive');
})

b_tel.addEventListener('click', function(){
    t_tel.classList.toggle('inactive');
    t_address.classList.add('inactive');
    t_email.classList.add('inactive');
    t_portfolio.classList.add('inactive');
})

b_address.addEventListener('click', function(){
    t_address.classList.toggle('inactive');
    t_tel.classList.add('inactive');
    t_email.classList.add('inactive');
    t_portfolio.classList.add('inactive');
})

b_portfolio.addEventListener('click', function(){
    t_portfolio.classList.toggle('inactive');
    t_tel.classList.add('inactive');
    t_email.classList.add('inactive');
    t_address.classList.add('inactive');
})