//获取事件
$(document).bind("click keydown",function(event){
    //点击操作
    if(event.type=='click'){
        var btnId = $(event.target).attr('id');
        if(btnId!="block-3-0"&&btnId!="block-3-1"&&btnId!="block-3-2"&&btnId!="block-3-3"){
            isgameover();
        }
        for(var i=0;i<4;i++){
            if(btnId == "block-3-"+i){
                if(board[3][i] == 1 && score==0){
                    timeRun();
                    clearText();
                //校徽整体向下移动
                    moveDown();
                }
                else if(board[3][i] == 1 && score>0 && score<50){
                    moveDown();
                }
                else{
                    isgameover();
                }
            }
            
        } 
    }//键盘操作
    else{
        switch (event.keyCode){
            case 65://a
                if(board[3][0] == 1 && score==0){
                    //第一次敲击键盘正确的话
                    //初始化计时器
                    timeRun();
                    //将游戏开始的提示内容去掉
                    clearText();
                     //校徽整体向下移动
                    moveDown();
                }else if(board[3][0] == 1 && score>0 && score<50){//如何判断敲击是正确的
                    //说明敲击是正确的
                    //校徽整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;
            case 83://s
                if(board[3][1] == 1 && score==0){
                    //第一次敲击键盘正确的话
                    //初始化计时器
                    timeRun();
                    //将游戏开始的提示内容去掉
                    clearText();
                    //校徽整体向下移动
                    moveDown();
                }else if(board[3][1] == 1 && score>0 && score<50){//如何判断敲击是正确的
                    //说明敲击是正确的
                    //校徽整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;
            case 68://d
                if(board[3][2] == 1 && score==0){
                    //第一次敲击键盘正确的话
                    //初始化计时器
                    timeRun();
                    //将游戏开始的提示内容去掉
                    clearText();
                     //校徽整体向下移动
                    moveDown();
                }else if(board[3][2] == 1 && score>0 && score<50){//如何判断敲击是正确的
                    //说明敲击是正确的
                     //校徽整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;
            case 70://f
                if(board[3][3] == 1 && score==0){
                    //第一次敲击键盘正确的话
                    //初始化计时器
                    timeRun();
                    //将游戏开始的提示内容去掉
                    clearText();
                     //校徽整体向下移动
                    moveDown();
                }else if(board[3][3] == 1 && score>0 && score<50){//如何判断敲击是正确的
                    //说明敲击是正确的
                     //校徽整体向下移动
                    moveDown();
                }else{
                    //说明敲击是错误的
                    isgameover();
                }
                break;  
        }
    }
})


function timeRun(){
    time += 0.001;
    $("#time_box span").text((time*5).toFixed(3).toString());
    //setTimeout是定时器
    tmp = setTimeout("timeRun()",1);
}

function clearText(){
    $("#remind p").text("");
}

function moveDown(){
    //遍历16个格子,倒序遍历
    for(var i=3;i>=0;i--){
        for(var j=3;j>=0;j--){
            if(board[i][j] == 1){
                if(i==3){
                    //将当前的校徽改变成白色
                    $("#block-"+i+"-"+j).css("background","url(photo/img2.jpg)");
                    board[i][j] = 0;
                }else{
                    //将当前的校徽改变成白色
                    $("#block-"+i+"-"+j).css("background","url(photo/img2.jpg)");
                    board[i][j] = 0;
                    //将当前的校徽下一行同一列的改为变成校徽
                    $("#block-"+(i+1)+"-"+j).css("background","url(photo/img1.jpg)");
                    board[i+1][j] = 1;
                }
            }
        }
    }
    //第一行重新随机一个校徽的位置
    var randy = parseInt(Math.floor(Math.random() * 4));
    var block = $("#block-0-"+randy);
    block.css("background","url(photo/img1.jpg)");
    board[0][randy] = 1;

    score += 1;
}

//用于游戏结束部分
function isgameover(){
    //停止游戏的计时器
    clearTimeout(tmp);
    //游戏结束的提示
    $("#box_container").append("<div id='gameover'><p class='over'>游戏结束</p><p class='data'>所用时间</p><p class='data'>" + (time*5).toFixed(3).toString() + "秒</p><p class='data'>本次得分</p><p class='data'>" + score + "分</p><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>");
    cnt+=1;
}

//重新开始新的游戏
function restartgame(){
    //去掉游戏结束提示的内容
    for(var i=0;i<cnt;i++){
        $("#gameover").remove();
    }
    cnt=0;
    //将游戏的计时器重新归0
    $("#time_box").html("<span>0.000</span>"+"秒");
    //将上一次游戏的校徽部分清除
    $(".block").remove();
    //将玩家得分归0
    score = 0;
    //时间归0
    time=0;
    //重新初始化游戏
    init();
}