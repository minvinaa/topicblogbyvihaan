function bodyLoad() {
    document.getElementById("btn").style.fontSize = "15px";
    document.getElementById("btn").style.backgroundColor = "#00ffcc";
    document.getElementById("btn").style.borderRadius = "25px";
    document.getElementById("btn").style.borderWidth = "5px";
    document.getElementById("btn").style.borderColor = "#353436";
    document.getElementById("btn").style.padding = "10px";
}
function changetheme() {
    document.getElementById("para").style.fontSize = "20px"
    document.getElementById("para").style.color = "#35159e"
    document.getElementById("body").style.backgroundColor = "#76f595"
    document.getElementById("anchortag").style.color = "#11c229"
    document.getElementById("nameheading").style.borderColor = "#64e85d"
    document.getElementById("btn").style.backgroundColor = "#12e807";



}
function changeimageover() {
    document.getElementById("cartoon_image").src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBg7JTLoMAA185IXg53x_i7z23V-20VlGA1g&usqp=CAU"
}
function changeimageleave() {
    document.getElementById("cartoon_image").src = "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Doraemon_characters_%282005%29.png/220px-Doraemon_characters_%282005%29.png"

}