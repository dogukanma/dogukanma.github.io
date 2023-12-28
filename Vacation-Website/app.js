document.addEventListener("DOMContentLoaded", function () {

  let heartArr = document.getElementsByClassName("fa-heart");
  let divListingArr = document.getElementsByClassName("div-listing");
  let imageArr = document.querySelectorAll(".selected-small-images img");
  let mainSelectedImg = document.querySelector(".main-image");
  for (let i = 0; i < heartArr.length; i++) {
    const heartIcon = heartArr[i];
    heartIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      if (heartIcon.style.color === "red") {
        heartIcon.style.color = "black";
        heartIcon.style.opacity = "0.5";
      } else {
        heartIcon.style.color = "red";
        heartIcon.style.opacity = "0.8";
      }
    });
  }

  for(let i = 0; i < divListingArr.length; i++){
    divListingArr[i].addEventListener("click", () => {
      window.location = "selected_house.html";
    })
  }

  // Change the selected image on selected_house.html
  for(let i = 0; i < imageArr.length; i++){
    const focusedImage = imageArr[i];
    focusedImage.addEventListener("click", () => {
      mainSelectedImg.setAttribute("src", focusedImage.getAttribute("src"));
    })
  }
  
});
