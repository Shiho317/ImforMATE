'use strict';

//change background colour

const comments = document.querySelector('.comment')
const category = document.getElementById('category')
const options = document.querySelectorAll('option')
const list = document.querySelector('.list');
const input = document.querySelector('.input');

category.addEventListener('change', () =>{
  console.log(category.value);

  if(category.value === 'spot'){
      comments.style.backgroundColor = '#7e9c84';
      comments.style.boxShadow = '#ebd9d9';
      input.style.backgroundColor = '#ebd9d9';
      }else if(category.value === 'education'){
        comments.style.backgroundColor = '#d1d1b5';
        comments.style.boxShadow = '#b8abab';
        input.style.backgroundColor = '#b8abab';
      }else if(category.value === 'health'){
        comments.style.backgroundColor = '#adccc6';
        comments.style.boxShadow = '#e8ebc5';
        input.style.backgroundColor = '#e8ebc5';
      }else if(category.value === 'house'){
          comments.style.backgroundColor = '#bdbead';
          comments.style.boxShadow = '#c3b4d6';
          input.style.backgroundColor = '#c3b4d6';
        }else if(category.value === 'living'){
          comments.style.backgroundColor = '#dbc7d9';
          comments.style.boxShadow = '#796062';
          input.style.backgroundColor = '#796062';
        }else if(category.value === 'trip'){
          comments.style.backgroundColor = '#cbaf9c';
          comments.style.boxShadow = '#ac7187';
          input.style.backgroundColor = '#ac7187';
        }else if(category.value === 'others'){
          comments.style.backgroundColor = '#929090';
          comments.style.boxShadow = '#cac4a4'
          input.style.backgroundColor = '#cac4a4';
        }
}, false);


// provide btn event

const provideBtn = document.querySelector('.provide__btn');

provideBtn.addEventListener('click', function(){
  provideBtn.style.opacity = 0.5;
  provideBtn.style.boxShadow = 'none';
});


//input url event

const urlBtn = document.querySelector('.url');
const urlInput = document.querySelector('.url input');

urlBtn.addEventListener('click', function(){
  urlInput.style.display = 'inline-block';
});


//preview files

function previewFiles(file){
  const preview = document.querySelector('#preview');

  const reader = new FileReader;

  reader.onload = function(e){
    const imgUrl = e.target.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    preview.appendChild(img);
  }

  reader.readAsDataURL(file);
};

const fileInput = document.querySelector('#photo');
const fileSelect = function(){
  const files = fileInput.files;
  for(let i = 0; i < files.length; i++){
      previewFiles(files[i]);
  }
}
fileInput.addEventListener('change', fileSelect);
