function onload(){
    
}
function displayBtn(item){
    item.lastElementChild.lastElementChild.classList.add("d-block");
    item.lastElementChild.lastElementChild.classList.remove("d-none");
    item.lastElementChild.lastElementChild.style.width = "130px";
    //item.lastElementChild.style.bottom = "8%";
}

function hideBtn(item){
    item.lastElementChild.lastElementChild.classList.add("d-none");
    item.lastElementChild.lastElementChild.classList.remove("d-block");
    //item.lastElementChild.style.bottom = "8%";
}
function displayIcons(item){
    item.firstElementChild.classList.remove("d-none");
    item.firstElementChild.classList.add("d-block");
    item.lastElementChild.classList.remove("d-none");
    item.lastElementChild.classList.add("d-block");
}
function hideIcons(item){
    item.firstElementChild.classList.add("d-none");
    item.firstElementChild.classList.remove("d-block");
    item.lastElementChild.classList.add("d-none");
    item.lastElementChild.classList.remove("d-block");
}