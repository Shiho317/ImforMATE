'use strict';



const comments = document.querySelector('.comment')
const category = document.getElementById('category')
const options = document.querySelectorAll('option')
const list = document.querySelector('.list');

category.addEventListener('change', () =>{
  console.log(category.value);

  if(category.value === 'spot'){
      comments.style.backgroundColor = '#7e9c84'
      }else if(category.value === 'education'){
        comments.style.backgroundColor = '#d1d1b5'
      }else if(category.value === 'health'){
        comments.style.backgroundColor = '#adccc6'
      }else if(category.value === 'house'){
          comments.style.backgroundColor = '#b68f8f'
        }else if(category.value === 'living'){
          comments.style.backgroundColor = '#dbc7d9'
        }else if(category.value === 'trip'){
          comments.style.backgroundColor = '#cbaf9c'
        }else if(category.value === 'others'){
          comments.style.backgroundColor = '#929090'
        }
}, false);
