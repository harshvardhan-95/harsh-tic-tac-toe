function mousePressed(){
    let w=width/3;
    let h=height/3;

    if(currentplayer==0){
      let j = floor(mouseX / w);
      let i = floor(mouseY / h);

      if(arr[i][j]==''){
        arr[i][j]=players[0];
        currentplayer=1;
      }
    }

    let result=checkwinner();
   
    if(currentplayer==1){
        if(result=='X'){
            noloop();
        }
        let openSpots=[];
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(arr[i][j]==''){
                    openSpots.push({i,j});
                }
            }
        }
        let k=random(openSpots);
        arr[k.i][k.j]=players[1];
        currentplayer=0;
    }

    
}