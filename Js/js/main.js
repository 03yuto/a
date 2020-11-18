'use strict';

{
    const scores=[80,90,40,70];
    scores.push(60,50);
    //先頭削除
    scores.shift();
    //変更位置　消す数　追加数
    scores.splice(1,1,40,50);
    for(let i=0;i<scores.length;i++){
        console.log(scores[i]);
    }
}