const googleSearch = document.querySelector('.google-search');
const googleSearchForm = document.querySelector('#googleSearch-form');
const naverSearch = document.querySelector('.naver-search');
const naverSearchForm = document.querySelector('#naverSearch-form');

function handleGoogleSearch(event) {
  event.preventDefault();
  const searching = googleSearch.value;
  googleSearch.value = '';
  window.open(`https://www.google.com/search?q=${searching}`, '_blank');
}

function handleNaverSearch(event) {
  event.preventDefault();
  const searching = naverSearch.value;
  naverSearch.value = '';
  window.open(
    `https://search.naver.com/search.naver?query=${searching}`,
    '_blank'
  );
}

googleSearchForm.addEventListener('submit', handleGoogleSearch);
naverSearchForm.addEventListener('submit', handleNaverSearch);