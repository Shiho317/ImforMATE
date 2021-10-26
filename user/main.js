//change profile modal
const modal = document.querySelector('.modal');
const closeConcent = document.querySelector('.close__concent');
const btnCloseAlert = document.querySelector('.close');
const btnCancelAlert = document.querySelector('.cancel');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelector('.edit');
const done = document.querySelector('.done');

const openModal = function(e){
  e.preventDefault();

  modal.classList.remove('hidden');
};

const openAlert = function(e){
  e.preventDefault();

  closeConcent.classList.remove('alert');
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', openAlert);

const closeModal = function(e){
  e.preventDefault();

  modal.classList.add('hidden');
}

const closeAlert = function(e){
  e.preventDefault();

  closeConcent.classList.add('alert')
}

btnCloseAlert.addEventListener('click',closeModal);
btnCloseAlert.addEventListener('click', closeAlert);
btnCancelAlert.addEventListener('click', closeAlert);

done.addEventListener('click', closeModal);

//change icon
const iconChange = document.querySelector('.change');
const changeInModal = document.querySelector('.change--inmodal');
const iconModal = document.querySelector('.chooseyours');
const btnCloseChoose = document.querySelector('.btn--close-choose');

const openChoose = function(e){
  e.preventDefault();

  iconModal.classList.remove('show');
}

const closeChoose = function(e){
  e.preventDefault();

  iconModal.classList.add('show');
}

iconChange.addEventListener('click', openChoose);
changeInModal.addEventListener('click', openChoose);
btnCloseChoose.addEventListener('click', closeChoose);

const icons = document.querySelectorAll('.chooseyours__icon img');
const iconImage = document.querySelector('.icon__img--src');
const modalImage = document.querySelector('.modal__img--src')
console.log(icons);

const choose = function(){

  for(let i = 0; i < icons.length; i++){
  icons[i].addEventListener('click', function(){
    iconImage.src = `../src/img/choose_logo-${i+1}.png`;
    modalImage.src = `../src/img/choose_logo-${i+1}.png`;
  });
};
};
choose();

icons.forEach(icon => {
  icon.addEventListener('click', closeChoose);
});

//change background-color

//change input
const helloName = document.querySelector('.name');
const userName = document.querySelector('.user__name');
const userInput = document.querySelector('#modal__user');

const countryName = document.querySelector('.country__name');
const countryInput = document.querySelector('#modal__country');

const cityName = document.querySelector('.city__name');
const cityInput = document.querySelector('#modal__city');

const twitterName = document.querySelector('.twitter__name');
const twitterInput = document.querySelector('#modal__twitter');


console.log(helloName.textContent)

const changeInput = function(e){
  e.preventDefault();
  const userValue = userInput.value;
  userName.textContent = userValue;
  helloName.textContent = `${userValue}.`;

  const cityValue = cityInput.value;
  cityName.textContent = cityValue;

  const twitterValue = twitterInput.value;
  twitterName.textContent = twitterValue;
};

done.addEventListener('click', changeInput);

console.log(countryInput);
const body = document.querySelector('body');
console.log(body);

countryInput.addEventListener('change', function(){
  console.log(countryInput.value);

  countryName.textContent = countryInput.value;
  countryInput.style.color = '#bdbdbd';

  if(countryName.textContent === 'Canada'){
    body.style.backgroundImage = 'url(../src/img/canada-bg.jpg)';
  }else if(countryName.textContent === 'United States'){
    body.style.backgroundImage = 'url(../src/img/unitedstates-bg.jpg)';
  }else if(countryName.textContent === 'United Kingdom'){
    body.style.backgroundImage = 'url(../src/img/unitedkingdom-bg.jpg)';
  }else if(countryName.textContent === 'Australia'){
    body.style.backgroundImage = 'url(../src/img/australia-bg.jpg)';
  }else if(countryName.textContent === 'New Zealand'){
    body.style.backgroundImage = 'url(../src/img/newzealand-bg.jpg)';
  }else if(countryName.textContent === 'Germany'){
    body.style.backgroundImage = 'url(../src/img/germany-bg.jpg)';
  }else if(countryName.textContent === 'Japan'){
    body.style.backgroundImage = 'url(../src/img/japan-bg.jpg)';
  }else if(countryName.textContent === 'South Korea'){
    body.style.backgroundImage = 'url(../src/img/southkorea-bg.jpg)';
  }else if(countryName.textContent === 'France'){
    body.style.backgroundImage = 'url(../src/img/france-bg.jpg)';
  }
});


//change greeting

const hello = document.querySelector('.greeting');

function greeting(){
  const nowTime = new Date();
  const nowHour = nowTime.getHours();
  console.log(typeof nowHour);
  
  if(nowHour < 12){
    hello.textContent = 'Good morning, ';
    console.log(hello.textContent);
  }else if(nowHour < 18){
    hello.textContent = 'Good afternoon, ';
    console.log(hello.textContent);
  }else if(nowHour < 24 || nowHour < 6){
    hello.textContent = 'Good evening, ';
    console.log(hello.textContent);
  }
}
setInterval(greeting());
