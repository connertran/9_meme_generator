const addMemeBtn = document.querySelector('.submit-button');
const imgURL = document.querySelector('#image-input');
const textOnTop = document.querySelector('#text-on-top-input');
const textOnBottom = document.querySelector('#text-on-bottom-input');
const memeSection = document.querySelector('.memes');

// generate a meme and add it to the page
addMemeBtn.addEventListener('click', generateMeme);

function generateMeme(event) {
  // to prevent the page refreshing
  event.preventDefault();

  // give the user a warning
  if (imgURL.value.length === 0) {
    alert('Image URL is missing!');
    return;
  }
  if (textOnBottom.value.length === 0) {
    alert("Text On Bottom is missing!");
    return;
  }

  // creating new elements for a new meme
  let individualMemeDiv = document.createElement('div')
  let memeHoverLayer = document.createElement('div');
  let deleteIcon = document.createElement('div');
  let photo = document.createElement('img');

  memeHoverLayer.classList.add("meme-overlay")
  individualMemeDiv.classList.add("individual-meme-div");

  deleteIcon.innerText = "DELETE";
  deleteIcon.classList.add("delete-icon");

  photo.setAttribute('src', imgURL.value);
  photo.setAttribute('alt', 'Meme Image');
  photo.classList.add("meme-image-size");

  // Create elements for top and bottom text
  let topText = document.createElement('div');
  topText.textContent = textOnTop.value;
  topText.classList.add("meme-top-text");

  let bottomText = document.createElement('div');
  bottomText.textContent = textOnBottom.value;
  bottomText.classList.add("meme-bottom-text");

  // adding the delete icon to the hover layer
  memeHoverLayer.appendChild(deleteIcon);

  // Append the image and text elements to the individualMemeDiv
  // individualMemeDiv.appendChild(memeHoverLayer);
  individualMemeDiv.appendChild(topText);
  individualMemeDiv.appendChild(bottomText);
  individualMemeDiv.appendChild(photo);
  individualMemeDiv.appendChild(memeHoverLayer);

  memeSection.appendChild(individualMemeDiv);
  addClickListener(individualMemeDiv);

  // empty all the inputs in the form
  imgURL.value = "";
  textOnTop.value = "";
  textOnBottom.value = "";
}


// deleting the meme
function addClickListener(meme) {
  meme.addEventListener("click", deleteMeme);
}

function deleteMeme(event) {
  event.target.parentElement.parentElement.remove();
}
