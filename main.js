//게임기능
//랜덤번호 지정
//유저가 번호를 입력한다(1~100) 그리고 go버튼 누름
//만약에 유저가 랜덤번호를 맞추면 '정답!'
//랜덤번호 < 유저번호 : down!
//랜덤번호 > 유저번호 : up!
//reset버튼 클릭시, 게임 리셋(입력창 숫자 사라짐, 기회 초기화)
//남은 기회 횟수
//5번의 기회 다쓰면 게임 오버 > 숫자 더이상 추측 불가. 버튼 disable
//게임 오버 시 정답 알려주기
//범위 밖 숫자 입력, '입력값 확인하세요', 기회 깎지 않음
//유저가 이미 쓴 번호를 입력하면 '이미 쓴 번호', 기회 깎지 않음
//추가기능 +


let computerNum = 0;
let chance = 5;
let resultHistory =""
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chanceArea = document.getElementById("chance-area");
let historyArea = document.getElementById("history-area");

console.log(historyArea);




playButton.addEventListener("click",play);
playButton.addEventListener("click",countChance);
resetButton.addEventListener("click",reset);

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
}



function play(){
    let userValue = userInput.value // input태그에 입력된 값 가져오기

    if(computerNum < userValue){
        resultHistory = `${userValue} 보다 더 작은수입니다`
    
        
    
    }else if(computerNum > userValue){
        resultHistory = `${userValue} 보다 더 큰 수입니다`
        
    }else{
        resultHistory = "정답입니다"
        
    }
    
    resultArea.textContent = resultHistory

    history();
}

function history(){
    historyArea.textContent = resultHistory

}

function reset(){
    //input칸 숫자 없애기
    //결과나오는곳 칸 리셋
    //새로운 번호 생성
    //기회 초기화
    userInput.value=""
    resultArea.textContent = "결과나오는곳"
    historyArea.textContent = ""
    pickRandomNum();
    chance = 5;
    chanceArea.textContent = chance+" / 5";

}

function countChance(){
    if(chance>0){
        chance -=1;
        chanceArea.textContent = chance+" / 5";
        if(chance == 0){
            gameOver();
        }
    }
    console.log(chance)

}

function gameOver(){
    console.log("game over")
    chanceArea.textContent = "game over! press reset button";
    playButton.disabled = true;
}

pickRandomNum();
chanceArea.textContent = chance+" / 5";


