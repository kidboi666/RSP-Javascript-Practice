const computerTag = document.querySelector('#computer')
computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0`;

let computerChoice = 'rock'
const rspCoord = {
  scissors : '-142px', // 가위
  rock : '0', // 바위
  paper : '-284px', // 보
}
const intervalMaker = () => {  // 고차함수
  return setInterval(() => {
    if (computerChoice === 'rock') {
      computerChoice = 'scissors'
    } else if (computerChoice === 'scissors') {
      computerChoice = 'paper'
    } else if (computerChoice === 'paper') {
      computerChoice = 'rock'
    }
    computerTag.style.background = `url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${rspCoord[computerChoice]} 0`;
  }, 50);
}
let intervalId = intervalMaker();

const rockTag = document.querySelector('#rock')
const scissorsTag = document.querySelector('#scissors')
const paperTag = document.querySelector('#paper')

// 가위: 1 , 바위: 0, 보: -1
// 나\컴퓨터  가위   바위    보
//  가위      0     1     2
//  바위     -1     0     1
//  보       -2    -1    0

const score = {
  rock : 0,
  scissors : 1,
  paper : -1,
};

// const clickButton = (myChoice) => () => { // return을 생략할 수 있다.
const clickButton = (myChoice) => {
  return () => {
    clearInterval(intervalId);
    const myScore = score[myChoice]; // 바위 점수 가져오기
    const computerScore = score[computerChoice] // 컴퓨터가 선택한 점수 가져오기
    const diff = myScore - computerScore; // 내 점수랑 컴퓨터 점수 빼기
    const scoreTag = document.querySelector('#score') // 스코어 아이디 가져오기
    let accScore = Number(scoreTag.textContent); // 스코어 아이디 숫자형 변환
    if (diff === 0) { // 내점수,컴퓨터점수 빼기 해서 0이면 무승부
      // 할 수 있는 동작이 없음 (필요없음)
    } else if (diff === 2 || diff === -1) { // 이긴 경우
      accScore += 1
    } else if (diff === -2 || diff === 1) { // 진 경우
      accScore -= 1
    }
    scoreTag.textContent = accScore;
    setTimeout(() => {
      intervalId = intervalMaker();
    }, 1000);
  };
};

rockTag.addEventListener('click', clickButton('rock'));

scissorsTag.addEventListener('click', clickButton('scissors'));

paperTag.addEventListener('click', clickButton('paper'));

const clickButton = () => {
  // 어떤 동작
  return undefined;
}

rockTag.addEventListener('click', clickButton('rock'))
//undefined)
// 함수를 호출하면 그 자리를 그 함수의 리턴값으로 대체 되는 것이다.