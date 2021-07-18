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

    if(currentplayer==1){
      let j = floor(mouseX / w);
      let i = floor(mouseY / h);

      if(arr[i][j]==''){
        arr[i][j]=players[1];
        currentplayer=0;
      }
    }
}
