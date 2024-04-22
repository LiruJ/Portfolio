imageOverlay = document.getElementById("image-overlay");
imageOverlayImage = document.getElementById("image-overlay-image");
imageOverlayCaption = document.getElementById("image-overlay-caption");

function onImageClicked(imageElement)
{
    
    imageOverlay.style.display = "block";
    
    imageOverlayImage.style.aspectRatio = imageElement.naturalWidth + "/" + imageElement.naturalHeight;

    imageOverlayImage.src = imageElement.src;

    var imageCaptionElement = imageElement.parentElement.parentElement.querySelector(".project-image-caption");

    imageOverlayCaption.innerText = imageCaptionElement.innerText;
}

function onOverlayClicked()
{
    imageOverlay.style.display = "none";
}