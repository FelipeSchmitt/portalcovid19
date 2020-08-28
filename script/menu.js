function menufull(){
const menu = document.getElementById("menu").style
const body = document.body.style
if (menu.visibility == "hidden"){
    menu.visibility="visible"
    body.overflow="hidden";
}else{
    menu.visibility="hidden"
    body.overflow="visible";
}
}