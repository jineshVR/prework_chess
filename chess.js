let queen=
   [ {
      direction:'s',
      position:[0,4]
    },
    {
      direction:'a',
      position:[4,0]
},
  ];
      
function changeDirection(power,move){
  var direction= power.direction;
  console.log(direction)
  switch(direction)
  {
   case "s":
  case "S":
          moveForward(power.position,power.direction,move);
          break;
  case "a":
  case "A":
           moveBackward(power.position,direction,move);
           break;
  }
}
  function moveForward(position,direction,moves)
           {
                x=position[0];
                y=position[1] ;
       if(direction=='s'||direction=='S'){
         y+=moves;
       }
        var obj=[x,y];
        queen.position=obj;
        console.log(queen.position);
       updatePosition(obj);
           }
  function moveBackward(position,direction,moves)
                {
                  X=position[0];
                  Y=position[1];
                if(direction=='a'||direction=='A'){
                 Y=Y-moves;
                }
                  var obj=[X,Y];
                  queen.position=obj;
                  console.log(queen.position);
                  updatePosition(obj);
                }
    function updatePosition(onn){
      X= onn[0];
      Y= onn[1];
      if(X<0||Y<0||X>7||Y>7){
        console.log("Out of Chess Board");
      }else{
        var positionLog = 

		  [["a8","b8","c8","d8","e8","f8","g8","h8"],

 		   ["a7","b7","c7","d7","e7","f7","g7","h7"],

           ["a6","b6","c6","d6","e6","f6","g6","h6"],

           ["a5","b5","c5","d5","e5","f5","g5","h5"],

           ["a4","b4","c4","d4","e4","f4","g4","h4"],

           ["a3","b3","c3","d3","e3","f3","g3","h3"],

           ["a2","b2","c2","d2","e2","f2","g2","h2"],

           ["a1","b1","c1","d1","e1","f1","g1","h1"]];
        var X=positionLog[onn[1]][onn[0]];
        queen.whereabouts=X;
        console.log(x);
        console.log(queen);
      }
    }
moves=[2,2]
for(i=0;i<queen.length;i++){
  changeDirection(queen[i],moves[i]);
}