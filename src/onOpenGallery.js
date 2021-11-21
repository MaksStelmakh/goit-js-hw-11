import SimpleLightbox from "simplelightbox";

export function onOpenGalleryClick(evt) {
  evt.preventDefault()
    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
    captions: true,
})
}