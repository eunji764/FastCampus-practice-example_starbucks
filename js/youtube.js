
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


function onYouTubeIframeAPIReady() {
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8',  // 최초 재생할 유튜브 영상 ID
    playerVars : {
      autoplay : true, // 자동재생 여부
      loopplay : true, // 반복재생 유무
      playlist : 'An6LvWQuj_8' //반복재생할 유튜브 영상 ID 목록
    },
    events : {
      onReady(event){
        event.target.mute() // 음소거
      }
    }
  });
}

