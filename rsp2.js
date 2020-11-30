var imageCoord = 0;
var rsp = {
  바위: '0',
  가위: '-142px',
  보: '-284px',
}
// Object.entries -> 객체를 2차원 배열로 바꿔주는 것
// indexOf 1차원 배열
// find,findIndex 2차원 배열
function computerChoice(imageCoord) {
  return Object.entries(rsp).find(function(v) {
    return v[1] === imageCoord;
  })[0];
}

var interval
function intervalMaker() {
  interval = setInterval(function () { // 비동기
    if (imageCoord === rsp.바위) {
      imageCoord = rsp.가위;
    } else if (imageCoord === rsp.가위) {
      imageCoord = rsp.보;
    } else {
      imageCoord = rsp.바위;
    }
    document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) '+ imageCoord + ' 0';
  }, 100)  
};
intervalMaker();

var score = {
  가위: 1,
  바위: 0,
  보: -1,
};

document.querySelectorAll('.btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    clearInterval(interval)
    setTimeout(function() {
      intervalMaker();
    }, 1000);
    var myChoice = this.textContent;
    var myScore = score[myChoice];
    var computerScore = score[computerChoice(imageCoord)];
    var scoreCal = myScore - computerScore;
    if (scoreCal === 0) {
      console.log('비겼습니다');
    } else if ([1, -2].includes(scoreCal)) {
//score[myChoice] - score[computerChoice(imageCoord)] === 1 || score[myChoice] - score[computerChoice(imageCoord)] === -2) {
      console.log('졌습니다');
    } else {
      console.log('이겼습니다!');
    }
  });
});

// 가위:1  바위:0  보:-1
// 나\컴    가위      바위        보
//   가위   1 1  0    1 0  1    1 -1  2
//   바위   0 1  -1   0 0  0    0 -1  1
//    보  -1 1  -2  -1 0  -1   -1 -1 0
// 비겼을때 0
// 내가 이겼을때 2, -1
// 내가 졌을때 1, -2

// 실질적인 비동기 코드의 실행 위치

// setInterval은 실행 반복의 간격을 의미
// setTimeout은 단일 실행의 시작 순간을 의미

// 1,2차원 배열의 차이 알아보기