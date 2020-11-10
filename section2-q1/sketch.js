// 小手調べ
function setup(){
  for(let i = 0; i < 10; i++){
   let x=100-10*i
   ellipse(50,50,x);
   if (60<x){//ここの範囲の設定が難しくて一番外側の円が黒のままになってしまいます。
     stroke(255,0,0);
   }
   else {
     stroke(0,0,255);
   }// BLANK[1]
  }
}
