/**
 * Created by sunguangdong on 2016/4/10.
 */

var chess = document.getElementById('chess');
var content = chess.getContext('2d');

content.strokeStyle = "BFBFBF";

// 绘制水印
var logo = new Image();
logo.src = "images/image.png"
logo.onload = function(){    // 图片是有加载时间的，要在回调中处理
    content.drawImage(logo, 0,0, 450,450);
    drawChessBoard();
}

var drawChessBoard = function(){
    // 画棋盘
    for(var i = 0; i<15; i++)
    {
        content.moveTo(15 + i*30, 15);
        content.lineTo(15 + i*30, 435);
        content.stroke();

        content.moveTo(15, 15 + i*30);
        content.lineTo(435, 15 + i*30);
        content.stroke();
    }
}



