// 메뉴 열고 닫기, 현재 페이지 표시
(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.querySelector('nav.menu');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});}
  var here=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('nav.menu a').forEach(function(a){
    if(a.getAttribute('href')===here){a.setAttribute('aria-current','page');}
  });
})();
