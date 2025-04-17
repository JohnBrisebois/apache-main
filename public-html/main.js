const page = document.getElementById("body");
const up = document.getElementById("up")
const down = document.getElementById("down")

var pageArr = document.getElementsByClassName("pageitem");
var pageIndex = 0;
pageArr[pageIndex].style.display = "inline";
page.addEventListener("wheel",scroll);
down.addEventListener("click", clickDown);
up.addEventListener("click", clickUp);
var pageTop = 0;

function clickDown() {
    scroll(1);
}

function clickUp () {
    scroll(-1);
}

function scrollVis(curr) {
    setTimeout(function() {
        curr.style.display = "none";
        curr.style.top = pageTop + "px";
        page.addEventListener("wheel", scroll);
        down.addEventListener("click", clickDown);
        up.addEventListener("click", clickUp);
    }, 300);
}

function scroll(event) {
    var anim = null;
    var pos = 0;
    var opacity = 0;
    var opacity2 = 1;
    var direction;
    if(event != 1 && event != -1) {
        direction = event.deltaY
    } else {
        direction = event;
    }
    if (direction < 0 && pageIndex > 0) {
        page.removeEventListener("wheel", scroll)
        down.removeEventListener("click", clickDown);
        up.removeEventListener("click", clickUp);
        let curr = pageIndex;
        anim = setInterval(function() {scrollAnim(curr, 1)}, 25);
        scrollVis(pageArr[curr])
        pageIndex--;
        pageArr[pageIndex].style.opacity = 0;
        pageArr[pageIndex].style.display = "inline";
    } else if (direction > 0 && pageIndex < pageArr.length - 1) {
        page.removeEventListener("wheel", scroll);
        down.removeEventListener("click", clickDown);
        up.removeEventListener("click", clickUp);
        let curr = pageIndex;
        let currTop = pageArr[curr].offsetTop;
        anim = setInterval(function() {scrollAnim(curr, -1)}, 25);
        scrollVis(pageArr[curr])
        pageIndex++;
        pageArr[pageIndex].style.opacity = 0;
        pageArr[pageIndex].style.display = "inline";
    }

    function scrollAnim(curr, dir) {
        const offset = 200;
        if (pos > offset) {
            pos = 0;
            clearInterval(anim);
        } else {
            opacity = 2 * opacity + 0.0005;
            opacity2 = opacity2/2;
            pos = pos + offset/10;
            pageArr[curr].style.top = pageTop + dir * pos + "px"
            pageArr[curr].style.opacity = opacity2;
            pageArr[curr - dir].style.top = pageTop + -1 * dir * (offset + offset/10) + dir * pos + "px";
            pageArr[curr - dir].style.opacity = opacity;
        }
    }
}