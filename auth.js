/*
js/auth.js - handles login, logout, and auth state checks (compat SDK used in HTML)
This script expects firebase.auth() to be available (loaded in the page via script tags).
*/
(function(){
  function $(id){ return document.getElementById(id); }
  const loginBtn = $('loginBtn');
  const emailInp = $('email');
  const passInp = $('password');
  const errorEl = $('error');

  if(loginBtn){
    loginBtn.addEventListener('click', function(){
      const email = emailInp.value.trim();
      const pass = passInp.value;
      if(!email || !pass){ errorEl.textContent = 'Enter email & password'; return; }
      firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(()=> {
          window.location.href = 'admin.html';
        })
        .catch(e=>{
          errorEl.textContent = e.message;
        });
    });
  }

  const logoutBtn = $('logoutBtn');
  if(logoutBtn){
    logoutBtn.addEventListener('click', function(){
      firebase.auth().signOut().then(()=>{
        window.location.href = 'index.html';
      });
    });
  }

  if(window.location.pathname.endsWith('admin.html')){
    firebase.auth().onAuthStateChanged(user=>{
      if(!user){
        window.location.href = 'index.html';
      } else {
        const el = $('authEmail');
        if(el) el.textContent = user.email;
      }
    });
  }
})();
