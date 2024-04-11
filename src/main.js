import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { objectSearch } from './js/pixabay-api';
import { createMarkup } from './js/render-functions';
import { showLoading } from './js/render-functions';
import { hideLoading } from './js/render-functions';

const form = document.querySelector('.search-form');
const loader = document.querySelector('.css-loader');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handelSubmit);

function handelSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const dataSearch = event.currentTarget.elements.data.value.trim();
  if (dataSearch === '') {
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'bottomRight',
      messageColor: 'white',
      backgroundColor: 'red',
      progressBarColor: 'black',
    });
  }
  showLoading(loader);
  objectSearch(dataSearch)
    .then(data => {
      if (data.hits.length === 0) {
        hideLoading(loader);
        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
          messageColor: 'white',
          backgroundColor: 'red',
          progressBarColor: 'black',
        });
      }
      hideLoading(loader);
      gallery.innerHTML = createMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        message: `${error}`,
      });
    })
    .finally(() => {
      form.reset();
    });
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});
