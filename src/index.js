import './css/styles.css';
// import axios from "axios";
import Notiflix from 'notiflix';
import 'simplelightbox/dist/simple-lightbox.min.css';
import debounce from "lodash.debounce"
import { articles } from "./articles"
import { onOpenGalleryClick } from "./onOpenGallery"

const input = document.querySelector(`#search-form`)
const gallery = document.querySelector(`ul.image-info`)
const loadMore = document.querySelector(`.loader`)

let searchForm = ` `
let page = 1
const DEBOUNCE_DELAY = 300;

window.addEventListener(`scroll`, debounce(infiniteScroll), DEBOUNCE_DELAY)

function infiniteScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (clientHeight + scrollTop >= scrollHeight - 5) {
    loadMore.classList.add(`show`)
    page += 1
    getPhoto().then(createGallery).catch(error => console.log(error))
    return
  }
}

gallery.addEventListener(`click`, onOpenGalleryClick)

input.addEventListener(`submit`, onSearch)

function onSearch(evt) {
  evt.preventDefault()
  clearContainer()
    searchForm = evt.currentTarget.elements.searchQuery.value
  if (searchForm.length === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
    return
  }
  page = 1
  getPhoto().then(createGallery).catch(error => console.log(error))

}

function getPhoto() {
  const BASE_URL = `https://pixabay.com/api/?key=24435694-017d2bab3470121913608c0c0`
  const SETTINGS = `&image_type=photo&orientation=horizontal&safesearch=true`
  if (page >= 13) {
    alert(`The pictures are over`);
    return
  }
  return fetch(`${BASE_URL}${SETTINGS}&per_page=40&page=${page}&q=${searchForm}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error fetching data`)
      }
      return response.json()
    })
}

// Запрос не бэк через Axios
// function getPhoto() {
//   const BASE_URL = `https://pixabay.com/api/?key=24435694-017d2bab3470121913608c0c0`
//   const SETTINGS = `&image_type=photo&orientation=horizontal&safesearch=true`
//   if (page >= 13) {
//     alert(`The pictures are over`);
//     return
//   }
//     return axios.get(`${BASE_URL}${SETTINGS}&per_page=40&page=${page}&q=${searchForm}`);
// }

function createGallery(resp) {
  console.log(resp)
  if (resp.totalHits === 0) {
    Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.")
    gallery.innerHTML = ``
    return
  } else if (page === 1) {
    Notiflix.Notify.success(`Hooray! We found ${resp.totalHits} images.`);
  } 
  loadMore.classList.remove(`show`)
  return resp.hits.map(({ webformatURL, likes, views, comments, downloads, tags, largeImageURL }) => {
            return gallery.insertAdjacentHTML(`beforeend`, articles({ webformatURL, likes, views, comments, downloads, tags, largeImageURL }))
        }).join("")
        }    



function clearContainer() {
  return gallery.innerHTML = ``
}

