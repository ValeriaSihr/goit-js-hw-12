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

let page = 1;

form.addEventListener('submit', handelSubmit);

async function handelSubmit(event) {
  event.preventDefault();
  gallery.innerHTML = '';
  const dataSearch = event.currentTarget.elements.data.value.trim();

  sessionStorage.setItem('text', dataSearch);
  page = 1;

  if (dataSearch === '') {
    form.reset();
    return iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'bottomRight',
      messageColor: 'white',
      backgroundColor: 'darkred',
      progressBarColor: 'black',
    });
  }

  showLoading(loader);

  await objectSearch(dataSearch, page)
    .then(data => {
      console.log(data);
      if (data.hits.length === 0) {
        form.reset();

        return iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'bottomRight',
          messageColor: 'white',
          backgroundColor: 'darkred',
          progressBarColor: 'black',
        });
      }
      form.reset();

      gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

      lightbox.refresh();

      if (page < 500) {
        loadBtn.classList.replace('btn-hidden', 'load-more');
      }
      if (page > 500) {
        loadBtn.classList.replace('load-more', 'btn-hidden');
      }
      // if (data.hits.length < 200) {
      //   loadBtn.classList.replace('btn-hidden', 'load-more');
      // } else {
      //   loadBtn.classList.replace('load-more', 'btn-hidden');
      // }
    })
    .catch(error => {
      form.reset();
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'bottomRight',
        messageColor: 'white',
        backgroundColor: 'darkred',
        progressBarColor: 'black',
      });
    })
    .finally(() => {
      hideLoading(loader);
    });
}

// loading
const loadBtn = document.querySelector('.load-more-btn');
loadBtn.addEventListener('click', loadMore);

async function loadMore() {
  loadBtn.disabled = true;

  try {
    const text = sessionStorage.getItem('text');
    page += 1;
    const data = await objectSearch(text, page);

    gallery.insertAdjacentHTML('beforeend', createMarkup(data.hits));

    loadBtn.disabled = false;

    // !!!!!!!!!!!!!!!!!!!!
    if (data.hits.length < 15) {
      loadBtn.classList.add('btn-hidden');
    }

    const item = document.querySelector('.gallery-item');
    console.log(item);
    const itemHeight = item.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: itemHeight * 3,
      behavior: 'smooth',
    });
  } catch (error) {
    alert(error.message);
  }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsPosition: 'bottom',
  captionsDelay: 250,
});
