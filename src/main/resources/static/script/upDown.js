let computerNum = 0;
let userInput = $('[name=user-input]');
let playButton = $('[name=play-button]');
let history = [];
let resultArea = $('#result-area');
let resetButton = $('[name=reset-button]');
let chanceArea = $('#chance-area');
let chances = 5;
let gameOver = false;

playButton.on('click', play);
resetButton.click(reset);
userInput.on('focus', function(){
    userInput.val('');
});

function pickRandomNum(){
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답 : ",computerNum);
}

function play(){
    let userValue = userInput.val();

    if(userValue < 1 || userValue > 100){
        resultArea.text('1과 100사이 숫자를 입력하세요.');
        return false;
    }

    if(history.includes(userValue)){
        resultArea.text('이미 입력한 숫자입니다.');
        return false;
    }

    history.push(userValue);

    chances--;
    chanceArea.text(`남은 기회 : ${chances}번`);

    if(userValue < computerNum){
        resultArea.text('Up!!');
    }else if(userValue > computerNum){
        resultArea.text("Down!!");
    }else{
        resultArea.text("정답!!");
        gameOver = true;
    }

    if(chances < 1){
        gameOver = true;
    }

    if(gameOver === true){
        playButton .prop('disabled', true);
    }
}

function reset(){
    //user Input init
    userInput.val('');

    //새로운 random Number 생성
    pickRandomNum();
    resultArea.text('결과값이 여기 나옵니다.');
}

pickRandomNum();