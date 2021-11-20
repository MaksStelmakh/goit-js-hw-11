import './css/styles.css';
import axios from "axios";
import { getPhoto } from "./api-service"

const input = document.querySelector(`#search-form`)
const gallery = document.querySelector(`.image-info`)

let searchForm = ` `

input.addEventListener(`submit`, onSearch)

function onSearch(evt) {
    evt.preventDefault()
    searchForm = evt.currentTarget.elements.searchQuery.value

    getPhoto(searchForm)
        .then(createGallery)
        .catch(error => console.log(error))


}

function createGallery(resp) {
        // console.log(resp)
        return resp.map((arr) => {
            const {webformatURL,likes,views,comments,downloads} = arr.data.hits
            return gallery.innerHTML = `<li><div class="image-box">
          <img src="${webformatURL}" alt="" width="400px" height="300px">
          <ul class="about-img">
          <li class="name-numbers">Likes
            <p class="number">${likes}</p>
          </li>
          <li class="name-numbers">Views<p class="number">
            ${views}
          </p></li>
          <li class="name-numbers">Comments<p class="number">
            ${comments}
          </p></li>
          <li class="name-numbers">Downloads<p class="number">${downloads}</p></li>
        </ul>
        </div></li>`
        }).join("")
        }    


// collections: 5373
// comments: 177
// downloads: 366671
// id: 2785074
// imageHeight: 2628
// imageSize: 2235576
// imageWidth: 3943
// largeImageURL: "https://pixabay.com/get/gf0e9d3193a8456c078e3dfd5221b1239c72558a9903bc6c46e248482dc2e7854e208fbc54cadd5e74d99b71abac189ce7c165db8561c23a659c863e948ae41e6_1280.jpg"
// likes: 1302
// pageURL: "https://pixabay.com/photos/cocker-spaniel-puppy-pet-canine-2785074/"
// previewHeight: 99
// previewURL: "https://cdn.pixabay.com/photo/2017/09/25/13/12/cocker-spaniel-2785074_150.jpg"
// previewWidth: 150
// tags: "cocker spaniel, puppy, pet"
// type: "photo"
// user: "PicsbyFran"
// userImageURL: "https://cdn.pixabay.com/user/2020/05/08/15-39-26-890_250x250.jpg"
// user_id: 6087762
// views: 581528
// webformatHeight: 426
// webformatURL: "https://pixabay.com/get/g537c873cf89c4b793b036f79d45a955b1d873109b26d98d9df7a2c34a76df051b0855d112f4f76953191ceba1ff3a9499f48df7732a72bf058d9ff8ec1db674a_640.jpg"
// webformatWidth: 640