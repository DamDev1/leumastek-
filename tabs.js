const qualityBox = document.querySelectorAll(".qualityBox")
const qualityBtn = document.querySelectorAll(".qualityBtn")

function showQualities(qualityIndex){
    qualityBox.forEach(function(show){
        show.style.display = "";
    });

    qualityBox[qualityIndex].style.display = "flex";
}

showQualities(0)