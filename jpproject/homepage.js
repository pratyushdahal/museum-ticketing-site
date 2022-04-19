// sticky navigation bar

const navbar = document.querySelector('.nav-bar');
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky');
}



// login form link

function myFunction() {
    const x = document.getElementById('container1');
    x.style.display = 'block';
}

//login cross icon close

function cut() {
    const y = document.getElementById('container1');
    y.style.display = 'none';
}

//register form link

function myFunction1() {
    const y = document.getElementById('container2');
    y.style.display = 'block';
}

// register cross icon close

function cut1() {
    const x = document.getElementById('container2');
    x.style.display = 'none';
}



//close when we click outside the screen//
var form = document.getElementById('container1');
window.onclick = function(event) {
    if (event.target == form) {
        form.style.display = "none";
    }
}