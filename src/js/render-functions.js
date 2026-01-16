import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const murkup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li class="gallery-item">
            <a href="${largeImageURL}"
              ><img src="${webformatURL}" alt="${tags}" loading="lazy"
            /></a>
            <ul class="description">
              <li><p><b>Likes</b>${likes}</p><li>
              <li><p><b>Views</b>${views}</p><li>
              </li><p><b>Comments</b>${comments}</p></li>
              </li><p><b>Downloads</b>${downloads}</p></li>
            </ul>
          </li>`
    )
    .join('');
  gallery.insertAdjacentHTML('beforeend', murkup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}
