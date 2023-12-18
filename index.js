let btns = document.querySelectorAll(".line");
let menu = document.querySelector(".ham-logo");
let itemList = document.querySelector(".item-list");
let active = 0;
menu.onclick = () => {
  active = active? 0:1;
  btns.forEach((btn) => {
    btn.classList.toggle("active-ham-icon");
    itemList.classList.toggle("no-display");
  });
};
itemList.onclick = () => {
  if(active){
    active = active? 0:1;
    setTimeout(()=>{ btns.forEach((btn) => {
      btn.classList.toggle("active-ham-icon");
      itemList.classList.toggle("no-display");
    });}, 280);
 
}
};
