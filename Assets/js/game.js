var playersecret;
var comsecret;

var player_view = document.getElementById("player-num");
var com_view = document.getElementById("com-num");


var player_table = document.getElementById("player-table");


function start(){

    comsecret = random();
    console.log("COMが決めた数字"+comsecret);


    showmsg();


}

var count = 0;

function hitblow(){


    count++;//カウント

    //判定処理
    var hit = 0;
    var blow= 0;
  
    for (var i = 0; i < 3; i++){//3回ループ
      var c = comsecret[i];
      var p = inputarray[i];
    
      if(c===p){
        hit++;
      }else if(comsecret.includes(p)){
        blow++;
      }
    }
    
  
   //ここらへん関数でまとめとく。
  
  
  
    if(hit>=3){
      //エンド勝ち
      com_view.innerHTML=comsecret.join("");

      $('#win').fadeToggle();
      $('.keypad').css('pointer-events', 'none');//keypad無効

    }else if (count>=10){
      //エンド負け
      com_view.innerHTML=comsecret.join("");

      $('#lose').fadeToggle();
      $('.keypad').css('pointer-events', 'none');//keypad無効

    }
  
    //table表示
    player_table.rows[count].cells[0].innerHTML = inputarray.join("");
    player_table.rows[count].cells[1].innerHTML = hit+" "+blow;
    




}


//comの数字を生成

function random() {
    var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var result = [];
  
      for (var i = 0; i < 3; i++){//3回ループ
        var length = array.length;//array配列の長さ
        var rand = Math.floor(Math.random()*length);//小数点以下切り捨てarray配列の長さ分の乱数
        result.push(array[rand]);//result配列に入れる
        array.splice(rand,1);//array配列から取り出されたのは削除
      }
  
      return result;
  
}


function showmsg(){
    $('#att').fadeToggle();
    // setTimeout(function(){$('#att').fadeToggle();},3000);//これは3秒経ったら消す処理

}