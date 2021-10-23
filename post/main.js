'use strict';

//change background colour

const category = document.getElementById('category')
const options = document.querySelectorAll('option')
const list = document.querySelector('.list');
const input = document.querySelector('.input');
const bgInput = document.querySelector('.input__bg');

category.addEventListener('change', () =>{
  console.log(category.value);

  if(category.value === 'spot'){
      input.style.backgroundColor = '#7e9c84';
      input.style.boxShadow = '#ebd9d9';
      bgInput.style.backgroundColor = '#ebd9d9';
      }else if(category.value === 'education'){
        input.style.backgroundColor = '#d1d1b5';
        input.style.boxShadow = '#b8abab';
        bgInput.style.backgroundColor = '#b8abab';
      }else if(category.value === 'health'){
        input.style.backgroundColor = '#adccc6';
        input.style.boxShadow = '#e8ebc5';
        bgInput.style.backgroundColor = '#e8ebc5';
      }else if(category.value === 'house'){
          input.style.backgroundColor = '#bdbead';
          input.style.boxShadow = '#c3b4d6';
          bgInput.style.backgroundColor = '#c3b4d6';
        }else if(category.value === 'living'){
          input.style.backgroundColor = '#dbc7d9';
          input.style.boxShadow = '#796062';
          bgInput.style.backgroundColor = '#796062';
        }else if(category.value === 'trip'){
          input.style.backgroundColor = '#cbaf9c';
          input.style.boxShadow = '#ac7187';
          bgInput.style.backgroundColor = '#ac7187';
        }else if(category.value === 'others'){
          input.style.backgroundColor = '#929090';
          input.style.boxShadow = '#cac4a4'
          bgInput.style.backgroundColor = '#cac4a4';
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
