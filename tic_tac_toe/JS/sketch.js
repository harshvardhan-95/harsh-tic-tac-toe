let arr=[
  ['','',''],
  ['','',''],
  ['','',''] 
];

let players=['X','O'];
let currentplayer=0;

function setup() {
  let ww=windowWidth;
  let wh=windowHeight;
  const canvas=createCanvas(300, 300);
  
  canvas.position(ww/2-150,wh/2-150);
  
}


function checkwinner(){
  let winner = null;
  for(let i=0;i<3;i++){
    if (arr[i][0]==arr[i][1] && arr[i][1]==arr[i][2] && arr[i][0]!=''){
      winner=arr[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if(arr[0][i]==arr[1][i] && arr[1][i]==arr[2][i] && arr[0][i]!=''){
      winner=arr[0][i];
    }
  }

  if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2] && arr[0][0]!=''){
    winner=arr[0][0];
  }

  if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0] && arr[0][2]!=''){
    winner=arr[0][2];
  }

  let freespaces = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (arr[j][i] == '') {
        freespaces++;
      }
    }
  }
  if(winner==null && freespaces==0){
    return 'tie';
  }

  else{
   return winner;
  }


}



function draw() {
  background(255);

  fill(255);
  stroke(0);

  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      let w=width/3;
      let h=height/3;
      let x=w*j+w/2;
      let y=w*i+h/2;

      if(arr[i][j]==players[1]){
        ellipse(x,y,w/2,h/2);
      }
      else if(arr[i][j]==players[0]){
        line(x-w/4,y-h/4,x+w/4,y+h/4);
        line(x-w/4,y+h/4,x+w/4,y-h/4);
      }
    }
  }
  
  stroke(0);
  strokeWeight(12);
  line(width/3,0,width/3,height);
  line(2*width/3,0,2*width/3,height);
  line(0,height/3,width,height/3);
  line(0,2*height/3,width,2*height/3);

  let result = checkwinner();
  if (result != null) {
    noLoop();
    let printresult = createP('');
    printresult.position(80,550);
    printresult.style('font-size', '50pt');
    printresult.style("color", "#fff");
    if (result == 'tie') {
      printresult.html('Tie!');
    } else {
      printresult.html(`${result} wins!`);
    }
  }
}
  

