import SimpleLightbox from "simplelightbox";

export function onOpenGalleryClick() {
    const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250,
    captions: true,
    })
  lightbox.refresh()
}