export function articles({ webformatURL, likes, views, comments, downloads, tags, largeImageURL }) {
  return `<li><div class="image-box"><a href="${largeImageURL}">
          <img class="img-hover" src="${webformatURL}" alt="${tags}" loading="lazy" width="400px" height="300px">
          </a>
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
}