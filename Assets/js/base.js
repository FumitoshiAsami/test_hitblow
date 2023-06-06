// ロード・リサイズ時に画面最適化
$(window).bind("load resize", function(){
    var height = $(window).height();
    var fix_height =  height / 800;
    $(".base").css("transform" ,"scale("+fix_height+") translateX(-50%)");
});

//右クリック禁止
document.oncontextmenu = function(){return false;}
//選択禁止
document.onselectstart = function(){return false;}
//iphoneダブルタップ拡大禁止　ここは確認してみる
document.addEventListener("dblclick", function(e){ e.preventDefault();}, { passive: false });




