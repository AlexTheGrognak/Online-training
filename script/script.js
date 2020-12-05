function showDialog() {
    document.getElementById("pop-up").classList.toggle("showDialog");
}
function closeDialog() {
    document.getElementById("pop-up").classList.remove("showDialog");
}
function scrollToEvent() {
    const el = document.getElementById('event');
    el.scrollIntoView({behavior: "smooth"});
};
function scrollToSchedule() {
    const el = document.getElementById('training-schedule');
    el.scrollIntoView({behavior: "smooth"});
};
function scrollToCompaniInfo() {
    const el = document.getElementById('company');
    el.scrollIntoView({behavior: "smooth"});
};
function dropMenu() {
    document.getElementById("header").classList.add("showHeader");
    document.getElementById("header").classList.add("show");
    document.getElementById("header").classList.add("hide");
    document.getElementById("header").classList.remove("close");
}
function closeMenu() {
    
    document.getElementById("menu").classList.remove("show");
    document.getElementById("header").classList.remove("hide");
    document.getElementById("header").classList.add("close");
}