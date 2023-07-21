const boxes = document.querySelectorAll('td');

function playMain() {
    var colorPaint = "red"

    boxes.forEach(item => {
        item.addEventListener("click", () => {
            if (colorPaint == "red") {
                item.style.background = colorPaint;
                colorPaint = "green";
                checkResult("red");
                document.querySelectorAll('h2')[0].style.color = "gray";
                document.querySelectorAll('h2')[1].style.color = "green";
            }
            else {
                item.style.background = colorPaint;
                colorPaint = "red"
                checkResult("green");
                document.querySelectorAll('h2')[0].style.color = "red";
                document.querySelectorAll('h2')[1].style.color = "gray";
            }
        })
    })
}
function checkResult(color) {
    //check horizontal
    if ((boxes[0].style.background == color && boxes[1].style.background == color && boxes[2].style.background == color)
        || (boxes[3].style.background == color && boxes[4].style.background == color && boxes[5].style.background == color)
        || (boxes[6].style.background == color && boxes[7].style.background == color && boxes[8].style.background == color)) {
        alert(color + " won horizontaly");
        restartGame();
    }

    //checkVertical
    else if ((boxes[0].style.background == color && boxes[3].style.background == color && boxes[6].style.background == color)
        || (boxes[1].style.background == color && boxes[4].style.background == color && boxes[7].style.background == color)
        || (boxes[2].style.background == color && boxes[5].style.background == color && boxes[8].style.background == color)) {
        alert(color + " won verticaly");
        restartGame();
    }
    //checkDiagonal
    else if ((boxes[0].style.background == color && boxes[4].style.background == color && boxes[8].style.background == color)
        || (boxes[2].style.background == color && boxes[4].style.background == color && boxes[6].style.background == color)) {
        alert(color + " won in diagonal");
        restartGame();
    }
}
function restartGame() {
    boxes.forEach(item => {
        item.style.background = "transparent";
        document.querySelectorAll('h2')[0].style.color = "red";
        document.querySelectorAll('h2')[1].style.color = "gray";
    })
}
playMain();