//board表示16个校徽——0表示不是校徽,1表示是校徽
var board = new Array();
var time = 0;
var score = 0;
var tmp;
var cnt=0;
  //完成游戏的初始化工作
$(function(){
    init();
});

function init(){
    for(var i=0;i<4;i++){
        board[i] = new Array();
        for(var j=0;j<4;j++){
            //完成16个白块的布局工作
            var grid = $("#grid-"+i+"-"+j);
            //改变css样式中的top与left达到位置的移动
            grid.css("top",getPosTop(i,j));
            grid.css("left",getPosLeft(i,j));
            //完成16个校徽的布局工作
            $("#box_container").append($("<div class='block' id='block-"+i+"-"+j+"'></div>"));
            var block = $("#block-"+i+"-"+j);
            block.css("top",getPosTop(i,j));
            block.css("left",getPosLeft(i,j));
            //将16个校徽的值默认为0
            board[i][j] = 0;
        }
    }
    //每一行随机生成一个校徽
    for(var i=0;i<4;i++){
        //生成随机的列
        var randy = parseInt(Math.floor(Math.random() * 4));
        if(i>0&&board[i-1][randy] == 1){
            randy = parseInt(Math.floor(Math.random() * 4));
        }
        //获取到随机生成的校徽的位置
        var block = $("#block-"+i+"-"+randy);
        block.css("background","url(photo/img1.jpg)");
        board[i][randy] = 1;
    }
    //初始化游戏开始的提示内容
    
    if(board[3][0]==1){
        $("#remind p").text("按A或者鼠标点击开始");
    }
    if(board[3][1]==1){
        $("#remind p").text("按S或者鼠标点击开始");
    }
    if(board[3][2]==1){
        $("#remind p").text("按D或者鼠标点击开始");
    }
    if(board[3][3]==1){
        $("#remind p").text("按F或者鼠标点击开始");
    }
} 
   

function getPosTop(i,j){
    return i*100;
}

function getPosLeft(i,j){
    return j*100;
}