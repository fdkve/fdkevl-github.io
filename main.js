
//board表示12个黑块:值为0的话表示不是黑块,值为1的话表示是黑块
var board = new Array();
var timerun = 0;
var score = 0;
var t;
$(function(){
    //完成游戏的初始化工作
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
            //完成16个黑块的布局工作
            $("#box_container").append($("<div class='block' id='block-"+i+"-"+j+"'></div>"));
            var block = $("#block-"+i+"-"+j);
            block.css("top",getPosTop(i,j));
            block.css("left",getPosLeft(i,j));
            //将16个黑块的值默认为0
            board[i][j] = 0;
        }
    }
    //每一行随机生成一个黑块
    for(var i=0;i<4;i++){
        //生成随机的列
        var randy = parseInt(Math.floor(Math.random() * 4));
        //当前黑块同一列的上一行黑块值为1的话,也是黑块
        if(i>0&&board[i-1][randy] == 1){
            randy = parseInt(Math.floor(Math.random() * 4));
        }
        //获取到随机生成的黑块的位置
        var block = $("#block-"+i+"-"+randy);
        block.css("background","url(photo/img1.jpg)");
        board[i][randy] = 1;
    }
    //初始化游戏开始的提示内容
    
    if(board[3][0]==1){
        $("#remind p").text("按A开始");
    }
    if(board[3][1]==1){
        $("#remind p").text("按S开始");
    }
    if(board[3][2]==1){
        $("#remind p").text("按D开始");
    }
    if(board[3][3]==1){
        $("#remind p").text("按F开始");
    }
    
   

} 
   

function getPosTop(i,j){
    return i*100;
}

function getPosLeft(i,j){
    return j*100;
}