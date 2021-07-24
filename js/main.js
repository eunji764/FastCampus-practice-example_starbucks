// 스크롤 배지 & ScrollToTop
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
// document = html자체, window = 프로젝트가 나타나고있는 브라우저창을 말함 우리가보고있는 화면자체
window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY>500){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity : 0,
      display : 'none'
    });
    gsap.to(toTopEl, .2, {
      x : 0
    });
  } else {
    // 배지 보여주기
    gsap.to(badgeEl, .6, {
      opacity : 1,
      display : 'block'
    });
    gsap.to(toTopEl, .2, {
      x : 100
    });
  }
}, 300));
//_.throttle(함수,시간(밀리세컨단위)) => 함수에 밀리세컨시간만큼 부하를 줘서 함수가 우르르실행되는걸 방지함, 스크롤이벤트와 관련된 작업할때 사용함

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7,{
    scrollTo : 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay : (index+1) * .7,
    opacity : 1
  })
})


// 공지슬라이드

// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay : true,
  loop : true
});


// 프로모션 슬라이드

new Swiper('.promotion .swiper-container', {
  // direction : 'horizontal' => 기본값
  slidesPerView : 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데 보이기
  loop : true,
  // autoplay : {
  //   delay: 5000
  // },
  pagination : {
    el : '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable : true, // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation : {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next'
  }
});

// AWARDS 슬라이드

new Swiper('.awards .swiper-container', {
  autoplay : true,
  loop : true,
  spaceBetween : 30,
  slidesPerView : 5,
  navigation : {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next',
  }
});



const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  }else {
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size){
  // gsap.to(요소, 지속시간, {옵션})
  gsap.to(selector, random(1.5, 2.5), 
  {
    y: size,
    repeat : -1, // 무한반복
    yoyo : true,
    ease: Power1.easeInOut,
    delay : random(0, delay)
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);





const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    // setClassToggle(요소, '토글할클래스이름')
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});



