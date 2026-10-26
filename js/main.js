(function(){
  var b=document.querySelector('.menu'),n=document.getElementById('nav');
  function close(){n.classList.remove('open');b.setAttribute('aria-expanded','false');b.textContent='☰'}
  if(b&&n){
    b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o);b.textContent=o?'✕':'☰'});
    n.addEventListener('click',function(e){if(e.target.closest('a'))close()});
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close()});
  }
  var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(el){io.observe(el)});
  }else els.forEach(function(el){el.classList.add('in')});
})();
