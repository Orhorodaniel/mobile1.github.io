const header = document.querySelector('header');
const menubx = document.querySelector(".menubx");
const nightbx = document.querySelector(".nightbx");
const content1 = document.querySelector(".content1");
const content2 = document.querySelector(".content2");
const nav = document.querySelector(".nav");
const home = document.querySelector(".home-pg");
const projects = document.querySelector(".projects-pg");
const contact = document.querySelector(".team-pg");
const about = document.querySelector(".about-pg");
const pg1 = document.querySelector(".pg1");
const pg2 = document.querySelector(".pg2");
const pg3 = document.querySelector(".pg3");
const pg4 = document.querySelector(".pg4");
const textbx = document.querySelector(".textbx");
const cont1 = document.getElementById("cont1");
const cont2 = document.getElementById("cont2");
const cont3 = document.getElementById("cont3");
const cont4 = document.getElementById("cont4");

// Header sticky

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

// Sliding js
const container = document.querySelector('.container2');
const caro = document.querySelector('.caro');
// To add command to the buttons
const arrowBtn = document.querySelectorAll('.container2 p');

// To get the width of the first card
const firstCardWidth = caro.querySelector('.card').offsetWidth;

// To make infinite scrolling and making an array for caro childern, which are li elements
const caroChildrens = [...caro.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the caro at oncce
let cardPerView = Math.round(caro.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to the beginning of caro for infinite scrolling
caroChildrens.slice(-cardPerView).reverse().forEach(card => {
    caro.insertAdjacentHTML('afterbegin', card.outerHTML);
});

// Insert copies of the first few cards to the end of caro of caro for infinite scrolling
caroChildrens.slice(0, cardPerView).forEach(card => {
    caro.insertAdjacentHTML('beforeend', card.outerHTML);
});

// Add event listeners for the arrow buttons to scroll the ('.caro') left and right
arrowBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log(btn.id);
        caro.scrollLeft += btn.id === 'left' ? - firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    caro.classList.add('dragging');
    //Records the initial cursor and scroll position of the ('.caro')
    startX = e.pageX;
    startScrollLeft = caro.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if IsDragging is false return from here
    //Updates the scroll position of the ('.caro') based on the cursor movement
    caro.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    caro.classList.remove('dragging');
}

// For autoplay of cards *not necessary*
const autoPlay =() => {
    // Return if window is smaller than 800
    if(window.innerWidth < 800) return;
    // Autoplay the caro after every 2500 ms
    timeoutId = setTimeout(() => caro.scrollLeft += firstCardWidth, 2500)
}
autoPlay();

const infiniteScroll = () => {
    // If the caro is at the beginning, scroll to the end
    if(caro.scrollLeft === 0) {
        caro.classList.add("no-transition");
        caro.scrollLeft = caro.scrollWidth - (2 * caro.offsetWidth);
        caro.classList.remove("no-transition");
    }

    // If the caro is at the end, scroll to the beginning
    else if(caro.scrollLeft === caro.scrollWidth - caro.offsetWidth){
        caro.classList.add("no-transition");
        caro.scrollLeft = caro.offsetWidth;
        caro.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over caro
    clearTimeout(timeoutId);
    if(!container.matches(":hover")) autoPlay();
}

caro.addEventListener('mousedown', dragStart);
caro.addEventListener('mousemove', dragging);
document.addEventListener('mouseup', dragStop);
caro.addEventListener('scroll', infiniteScroll);

nightbx.onclick = () => {
    nightbx.classList.toggle("active");
    nav.classList.toggle("active");
}

menubx.onclick = () => {
    content1.classList.toggle("active");
    content2.classList.toggle("active");
    menubx.classList.toggle("active");
}

home.onclick = () => {
    content1.classList.remove("active");
    content2.classList.remove("active");
    menubx.classList.remove("active");
}

projects.onclick = () => {
    content1.classList.remove("active");
    content2.classList.remove("active");
    menubx.classList.remove("active");
}

about.onclick = () => {
    content1.classList.remove("active");
    content2.classList.remove("active");
    menubx.classList.remove("active");
}

contact.onclick = () => {
    content1.classList.remove("active");
    content2.classList.remove("active");
    menubx.classList.remove("active");
}

pg1.onclick = () => {
    pg1.classList.add("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    cont1.classList.remove("first");
    cont2.classList.remove("first");
    cont3.classList.remove("first");
    cont4.classList.remove("first");
    cont1.classList.remove("second");
    cont2.classList.remove("second");
    cont3.classList.remove("second");
    cont4.classList.remove("second");
    cont1.classList.remove("third");
    cont2.classList.remove("third");
    cont3.classList.remove("third");
    cont4.classList.remove("third");
}

pg2.onclick = () => {
    pg2.classList.add("active");
    pg1.classList.remove("active");
    pg3.classList.remove("active");
    pg4.classList.remove("active");
    cont1.classList.add("first");
    cont2.classList.add("first");
    cont3.classList.add("first");
    cont4.classList.add("first");
    cont1.classList.remove("second");
    cont2.classList.remove("second");
    cont3.classList.remove("second");
    cont4.classList.remove("second");
    cont1.classList.remove("third");
    cont2.classList.remove("third");
    cont3.classList.remove("third");
    cont4.classList.remove("third");
}

pg3.onclick = () => {
    pg3.classList.add("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg4.classList.remove("active");
    cont1.classList.remove("first");
    cont2.classList.remove("first");
    cont3.classList.remove("first");
    cont4.classList.remove("first");
    cont1.classList.add("second");
    cont2.classList.add("second");
    cont3.classList.add("second");
    cont4.classList.add("second");
    cont1.classList.remove("third");
    cont2.classList.remove("third");
    cont3.classList.remove("third");
    cont4.classList.remove("third");
}

pg4.onclick = () => {
    pg4.classList.add("active");
    pg1.classList.remove("active");
    pg2.classList.remove("active");
    pg3.classList.remove("active");
    cont1.classList.remove("first");
    cont2.classList.remove("first");
    cont3.classList.remove("first");
    cont4.classList.remove("first");
    cont1.classList.remove("second");
    cont2.classList.remove("second");
    cont3.classList.remove("second");
    cont4.classList.remove("second");
    cont1.classList.add("third");
    cont2.classList.add("third");
    cont3.classList.add("third");
    cont4.classList.add("third");
}