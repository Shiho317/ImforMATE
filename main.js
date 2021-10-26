'use strict';

//sign up modal

const joinModal = document.querySelector('.join-modal');
const join = document.querySelector('.join');
const closeJoinModalBtn = document.querySelector('.btn-close-joinmodal');
const jumpSignUp = document.querySelector('.jump--signup');

const overlay = document.querySelector('.overlay');

const openSignUp = function(e){
  e.preventDefault();

  joinModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeSignUp = function(e){
  e.preventDefault();

  joinModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const changeToSignUp = function(e){
  e.preventDefault();

  joinModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  signInModal.classList.add('hidden');
}

join.addEventListener('click', openSignUp);
closeJoinModalBtn.addEventListener('click', closeSignUp);
jumpSignUp.addEventListener('click', changeToSignUp);

//sign in modal

const signInModal = document.querySelector('.signin-modal');
const signIn = document.querySelector('.signin');
const closeSignInModal = document.querySelector('.btn-close-signinmodal');
const jumpLogIn = document.querySelector('.jump--login');

const openSignIn = function(e){
  e.preventDefault();

  signInModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeSignIn = function(e){
  e.preventDefault();

  signInModal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const changeToLogIn = function(e){
  e.preventDefault();

  signInModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  joinModal.classList.add('hidden');
};

signIn.addEventListener('click', openSignIn);
closeSignInModal.addEventListener('click', closeSignIn);
jumpLogIn.addEventListener('click', changeToLogIn);


//log in error and success

const error = document.querySelector('.error');
const emailCheck = document.querySelector('.email-check');
const passwordCheck = document.querySelector('.password-check');
const welcomeBack = document.querySelector('.welcome-back');

const account1 = {
  name: 'InforMATE',
  email: 'Informate123@gmail.com',
  password: 'Informate123',
};

const account2 = {
  name: 'Shiho Nagano',
  email: 'shihonagano@gmail.com',
  password: 'Shihonagano123',
};

const accounts = [account1, account2];

console.log(accounts);

const logInBtn = document.querySelector('.login--btn');
let currentAccount;

logInBtn.addEventListener('click', function(e){
  e.preventDefault();

  currentAccount = accounts.find(acc => {
    if(acc.email === emailCheck.value)
    return acc
  });

  const splitName = currentAccount.name.split(' ');
  const firstName = splitName[0]
  console.log(firstName);

  if(currentAccount.password === passwordCheck.value){
    error.classList.add('correct');
    signInModal.classList.add('hidden');
    welcomeBack.innerHTML = `<h2>Welcome back, ${firstName}!</h2>
    <img src="src/img/InforMATE_logo.PNG">`;
    setTimeout(() => {
      location.href = 'user/index.html';
    }, 1000);
  }else if(currentAccount.password !== passwordCheck.value){
    error.classList.remove('correct');
  }
});

//sign up setting
const signUpName = document.querySelector('.name');
const signUpEmail = document.querySelector('.email');
const signUpPassword = document.querySelector('.password');
const confirmation = document.querySelector('.confirm');
const notMatch = document.querySelector('.notmatch');
const signUpBtn = document.querySelector('.signup--btn');
const caution = document.querySelector('.password__stricts');
const passwordLabel = document.querySelector('.password--input label');
const confirmationLabel = document.querySelector('.confirm--input label');
const exist = document.querySelector('.exist');
const emailLabel = document.querySelector('.email--input label');

signUpBtn.addEventListener('click', function(e){
  e.preventDefault();

  if(signUpPassword.value.length >= 8 && signUpPassword.value.match(/[a-zA-Z]/) && signUpPassword.value.match(/[0-9]/)){

    if(accounts.find(acc => acc.email === signUpEmail.value)){
      exist.innerHTML = '<p>* Your email is already registered.</p>';
      emailLabel.style.border = '1px solid red';
    }else{
      if(signUpPassword.value === confirmation.value){
      notMatch.classList.add('success');

      const newAcc = {
        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPassword.value
      };

      const splitName = newAcc.name.split(' ');
      const firstName = splitName[0]

      accounts.push(newAcc);
      console.log(accounts);

      joinModal.classList.add('hidden');
      welcomeBack.innerHTML = `<h2>Welcome, ${firstName}!<br/>Thank you for join!</h2>
      <img src="src/img/InforMATE_logo.PNG">`;
      setTimeout(() => {
      location.href = 'guide/index.html';
      }, 1000);

    }else{
      notMatch.classList.remove('success');
      confirmationLabel.style.border = '1px solid red'
    }
  }

  }else{
    caution.style.color = 'red';
    passwordLabel.style.border = '1px solid red';
  }
})