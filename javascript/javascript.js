function onload(){
    let cards = document.getElementsByClassName("card");
    cards.forEach(card => {
        addEventListener(onmouseover(displayBtn),card);
        addEventListener(onmouseout(hideBtn),card);
    });
}
function displayBtn(){
    let cardBody=this.getElementById("card-body");
    let btn = this.getElementById("btn");
    btn.style.width = "150px";
    btn.classList.add("d-block");
    btn.classList.remove("d-none");
    cardBody.style.bottom = "200px";
}

function hideBtn(){
    var cardBody=document.getElementById("card-body");
    let btn = document.getElementById("btn");
    //btn.style.width = "150px";
    btn.classList.remove("d-block");
    btn.classList.add("d-none");
    cardBody.style.bottom = "170px";
}