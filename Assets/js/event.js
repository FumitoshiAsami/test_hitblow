//画面遷移
function transition(){
    $('#ttl').toggleClass('passive');
    $('#main').toggleClass('passive');
}


//タイトル
//スタートボタン
$('#start-btn').on('click', function() {
    transition();
    start();
});




 

$('#help-btn').on('click', function() {

    $('#help').fadeToggle();

});






//メイン

//keypad 数字
var inputarray =[];

var msg = document.getElementById("msg");
var view = document.getElementById("numview");


var key = document.querySelectorAll(".key");
key.forEach((value) => {
  value.addEventListener("click", function(e) {

    var input= Number(e.target.innerHTML);//数値に変換
    if(inputarray.length===3){
        msg.innerHTML = "入力できるのは3桁まで";
    }else if(inputarray.includes(input)===true){
        msg.innerHTML = "既に入力済";
    }else{
        inputarray.push(input);//配列に入れる
        view.innerHTML = inputarray.join("");
    }

});
});

$('#clr-btn').on('click', function() {
    inputclear();
});

function inputclear(){
    inputarray =[];//配列リセット
    view.innerHTML = inputarray.join("");
}

$('#bs-btn').on('click', function() {
    inputarray.pop();
    view.innerHTML = inputarray.join("");
});

$('#ok-btn').on('click', function() {

    if(inputarray.length == 3 ){//3桁だったら
        hitblow();
        inputclear();   
    }else{//無効
      msg.innerHTML = "3桁入力してください";
    }
});