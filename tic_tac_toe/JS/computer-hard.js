function mousePressed() {
    let w=width/3;
    let h=height/3;
    if (currentplayer == 0) {
      let j= floor(mouseX / w);
      let i = floor(mouseY / h);
      if (arr[i][j] == '') {
        arr[i][j] = players[0];
        currentplayer = 1;
        bestmove();
      }
    }
  }

function bestmove(){
    let bestscore=-Infinity;
    let k;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if(arr[i][j]==''){
                arr[i][j]=players[1];
                let score=minimax(arr,0,false);
                arr[i][j]='';
                if(score>bestscore){
                    bestscore=score;
                    k={i,j};
                }
            }
        }
    }
    arr[k.i][k.j]=players[1];
    currentplayer=0;
}

let scores={
    X:-1,
    O:1,
    tie:0

}

function minimax(arr,tree,ismax){
    let result = checkwinner();
    if (result !== null) {
      return scores[result];
    }

    if(ismax){
        let bestscore=-Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(arr[i][j]==''){
                    arr[i][j]=players[1];
                    let score=minimax(arr,tree+1,false);
                    arr[i][j]='';
                    bestscore=max(score,bestscore);
                    
                }
            }
        }
        return bestscore;
    }

    else{
        let bestscore=Infinity;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(arr[i][j]==''){
                    arr[i][j]=players[0];
                    let score=minimax(arr,tree+1,true);
                    arr[i][j]='';
                    bestscore=min(score,bestscore);
                    
                }
            }
        }
        return bestscore;
    }
}