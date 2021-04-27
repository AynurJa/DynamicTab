[...document.querySelectorAll('.tabs li')].map(li => {
    li.onclick = function() {
        document.querySelector('.tabs li.active').classList.remove("active");
        this.classList.add("active");

        tabContentchanger();

    }
})

//prev
document.querySelector('.prev').onclick = function() {
    const activeLi = document.querySelector('.tabs li.active');
    activeLi.classList.remove("active");
    if (activeLi.previousElementSibling) {

        activeLi.previousElementSibling.classList.add('active');
    } else {

        document.querySelector('.tabs').lastElementChild.classList.add('active');

    }
    tabContentchanger();
}

//next

document.querySelector('.next').onclick = function() {
    const activeLi = document.querySelector('.tabs li.active');
    activeLi.classList.remove("active");
    if (activeLi.nextElementSibling) {

        activeLi.nextElementSibling.classList.add('active');
    } else {

        document.querySelector('.tabs').firstElementChild.classList.add('active');

    }
    tabContentchanger();
}


//tabContentchanger function 
function tabContentchanger() {

    document.querySelector('.tab_content.active').classList.remove("active");
    const index = document.querySelector('.tabs li.active').getAttribute("data-index");
    const connectedTab = document.querySelector(`.tab_content[data-index="${index}"]`)


    connectedTab.classList.add("active");
}