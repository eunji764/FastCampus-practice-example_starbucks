const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');


searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});


const badgeEl = document.querySelector('header .badges');
// document = html자체, window = 프로젝트가 나타나고있는 브라우저창을 말함 우리가보고있는 화면자체
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY>500){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
  } else {
    // 배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
  }
}, 300));
//_.throttle(함수,시간(밀리세컨단위)) => 함수에 밀리세컨시간만큼 부하를 줘서 함수가 우르르실행되는걸 방지함, 스크롤이벤트와 관련된 작업할때 사용함


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index+1) * .7,
    opacity : 1
  })
})





