var imges = document.getElementById("container").getElementsByTagName("img");

for (i = 0; i < imges.length; i++) {

    imges[i].addEventListener("click", function () {
        showimg(this)
    })
}

function showimg(el) {
    var mask = document.querySelector("#mask").style.display = "block";
    bigimg = document.createElement("img")
    bigimg.src = el.src;
    bigimg.style.width = "500px";
    bigimg.style.height = "300px";
    bigimg.style.position = "absolute"
    bigimg.style.zIndex = "990";

    calcImagepos()
    document.body.appendChild(bigimg);
}
document.body.onresize = calcImagepos;

function calcImagepos() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    bigimg.style.left = (width - 500) / 2 + "px";
    bigimg.style.top = (height - 300) / 2 + "px";
}
mask = document.querySelector("#mask").addEventListener("click", function () {
    hideMask(this)
})

function hideMask(mask) {
    mask.style.display = "none"
    document.body.removeChild(bigimg);
}
