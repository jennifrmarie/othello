export function checkMove(squares, tile, playersTurn, size) {
  let possMoves = [];
  if(squares[tile] === " "){
      if(checkUp(squares, tile, playersTurn, size)){
          possMoves.push("up");
      }
      if(checkUpLeft(squares, tile, playersTurn, size)){
          possMoves.push("upLeft");
      }
      if(checkUpRight(squares, tile, playersTurn, size)){
          possMoves.push("upRight");
      }
      if(checkLeft(squares, tile, playersTurn, size)){
          possMoves.push("left");
      }
      if(checkRight(squares, tile, playersTurn, size)){
          possMoves.push("right");
      }
      if(checkDown(squares, tile, playersTurn, size)){
          possMoves.push("down");
      }
      if(checkDownLeft(squares, tile, playersTurn, size)){
          possMoves.push("downLeft");
      }
      if(checkDownRight(squares, tile, playersTurn, size)){
          possMoves.push("downRight");
      }

  }
  

  return possMoves;

  
}
export function makeMove(squares, tile, playersTurn, moves, size) {
  try{
      if(moves.includes("up")){
          flipUp(squares, tile, playersTurn, size);
      }
      if(moves.includes("upLeft")){
          flipUpLeft(squares, tile, playersTurn, size);
      }
      if(moves.includes("upRight")){
          flipUpRight(squares, tile, playersTurn, size);
      }
      if(moves.includes("down")){
          flipDown(squares, tile, playersTurn, size);
      }
      if(moves.includes("left")){
          flipLeft(squares, tile, playersTurn, size);
      }
      if(moves.includes("right")){
          flipRight(squares, tile, playersTurn, size);
      }
      if(moves.includes("downRight")){
          flipDownRight(squares, tile, playersTurn, size);
      }
      if(moves.includes("downLeft")){
          flipDownLeft(squares, tile, playersTurn, size);
      }
      

  } catch(err){
      console.log("List of possible moves was empty. No more moves could be played");
  }
}
export function countTiles(squares, size){
  let white = 0;
  var black = 0;
  for(let i = 0; i < size; i++){
      if(squares[i] === "X"){
          black = black + 1
      }
      if(squares[i] === "O"){
          white =  white + 1
      }

  }
  return [black, white]
}
//Check all directions Up
function checkUp(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let tile_count = 0;
  for(let count = tile-rowSize; count > 0; count = count - rowSize){
      if(playersTurn){
          if(squares[count] === "O"){
              tile_count = tile_count +1;
          } else if(squares[count] === "X"){
              if(tile_count > 0){
                  return true;
              } else {
                  break;
              }
          } else{
              break;
          }
      } else {
          if(squares[count] === "X"){
              tile_count = tile_count +1;
          } else if(squares[count] === "O"){
              if(tile_count > 0){
                  return true;
              } else {
                  break;
              }
          } else{
              break;
          }
      }
  };
  return false;
}
function checkUpLeft(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tile_count = 0;
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
          row = row - 1
          let sqIndex = tilesLeft+(rowSize*row) - 1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "X"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          } else {
              if(squares[sqIndex] === "X"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "O"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          }
      }

  } catch(err){
      return false;
  }
  

  return false;
}
function checkUpRight(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tile_count = 0;
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
          row = row -1
          let sqIndex = tilesLeft + (rowSize*row) + 1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "X"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          } else {
              if(squares[sqIndex] === "X"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "O"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          }
      }
  
      return false;

  } catch(err){
      return false;
  }
}
function checkLeft(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tile_count = 0;
  let tilesLeft = tile - (row * rowSize);
  for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
      let sqIndex = tilesLeft+(rowSize*row)-1;
      if(playersTurn){
          if(squares[sqIndex] === "O"){
              tile_count = tile_count +1;
          } else if(squares[sqIndex] === "X"){
              if(tile_count > 0){
                  return true;
              } else {
                  break;
              }
          } else{
              break;
          }
      } else {
          if(squares[sqIndex] === "X"){
              tile_count = tile_count +1;
          } else if(squares[sqIndex] === "O"){
              if(tile_count > 0){
                  return true;
              } else {
                  break;
              }
          } else{
              break;
          }
      }
  }

  return false;
}
function checkRight(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tile_count = 0;
  let tilesLeft = tile - (row * rowSize);
  for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
      let sqIndex = tilesLeft + (rowSize*row) + 1;
      if(playersTurn){
          if(squares[sqIndex] === "O"){
              tile_count = tile_count +1;
          } else if(squares[sqIndex] === "X"){
              if(tile_count > 0){
                  return true;
              } else {
                  break;
              }
          } else{
              break;
          }
      } else {
          if(squares[sqIndex] === "X"){
              tile_count = tile_count +1;
          } else if(squares[sqIndex] === "O"){
              if(tile_count > 0){
                  return true;
              } else {
                  break;
              }
          } else{
              break;
          }
      }
  }

  return false;
}
function checkDown(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let tile_count = 0;
  for(let count = tile + rowSize; count < size; count = count + rowSize){
      if(playersTurn){
          if(squares[count] === "O"){
              tile_count = tile_count +1;
          } else if(squares[count] === "X"){
              if(tile_count > 0){
                  return true;
              } 
          } else{
              break;
          }
      } else {
          if(squares[count] === "X"){
              tile_count = tile_count +1;
          } else if(squares[count] === "O"){
              if(tile_count > 0){
                  return true;
              } 
          } else{
              break;
          }
      }
  };
  return false;
}
function checkDownLeft(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tile_count = 0;
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
          row = row + 1
          let sqIndex = tilesLeft+(rowSize*row)-1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "X"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          } else {
              if(squares[sqIndex] === "X"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "O"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          }
      }

  } catch(err){
      return false;
  }
  

  return false;
}
function checkDownRight(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tile_count = 0;
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
          row = row + 1;
          let sqIndex = tilesLeft + (rowSize*row) + 1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "X"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          } else {
              if(squares[sqIndex] === "X"){
                  tile_count = tile_count +1;
              } else if(squares[sqIndex] === "O"){
                  if(tile_count > 0){
                      return true;
                  } else {
                      break;
                  }
              } else{
                  break;
              }
          }
      }
  
      return false;

  } catch(err){
      return false;
  }
}

// Flip all directions
function flipUp(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  for(let count = tile - rowSize; count > 0; count = count - rowSize){
      if(playersTurn){
          if(squares[count] === "O"){
              squares[count] = "X";
          } else {
              break; 
          }
      } else {
          if(squares[count] === "X"){
              squares[count] = "O";
          } else {
              break; 
          }
      }
  };
}
function flipUpLeft(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
          row = row-1;
          let sqIndex = tilesLeft+(rowSize*row)-1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  squares[sqIndex] = "X";
              } else {
                      break;
                  }

          } else {
              if(squares[sqIndex] === "X"){
                  squares[sqIndex] = "O";
              } else{
                  break;
              }
          }
      }

  } catch(err){
  }
}
function flipUpRight(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
          row = row -1
          let sqIndex = tilesLeft + (rowSize*row) + 1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  squares[sqIndex] = "X";
              } else{
                  break;
              }
          } else {
              if(squares[sqIndex] === "X"){
                  squares[sqIndex] = "O";
              } else{
                  break;
              }
          }
      }
  } catch(err){

  }
}
function flipDown(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  for(let count = tile + rowSize; count < size; count = count + rowSize){
      if(playersTurn){
          if(squares[count] === "O"){
              squares[count] = "X";
          } else {
              break; 
          }
      } else {
          if(squares[count] === "X"){
              squares[count] = "O";
          } else {
              break; 
          }
      }
  };
}

function flipLeft(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tilesLeft = tile - (row * rowSize);
  for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
      let sqIndex = tilesLeft+(rowSize*row)-1;

      if(playersTurn){
          if(squares[sqIndex] === "O"){
              squares[sqIndex] = "X";
          } else{
              break;
          }
      } else {
          if(squares[sqIndex] === "X"){
              squares[sqIndex] = "O"
          } else{
              break;
          }
      }
  }
}

function flipRight(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tilesLeft = tile - (row * rowSize);
  for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
      let sqIndex = tilesLeft + (rowSize*row) + 1;
      if(playersTurn){
          if(squares[sqIndex] === "O"){
              squares[sqIndex] = "X"
          } else{
              break;
          }
      } else {
          if(squares[sqIndex] === "X"){
              squares[sqIndex] = "O"
          } else{
              break;
          }
      }
  }
  return false;
}

function flipDownRight(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft < rowSize-1; tilesLeft = tilesLeft + 1){
          row = row + 1
          let sqIndex = tilesLeft + (rowSize*row) + 1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  squares[sqIndex] = "X";
              } else{
                  break;
              }
          } else {
              if(squares[sqIndex] === "X"){
                  squares[sqIndex] = "O";
              } else{
                  break;
              }
          }
      }
  } catch(err){

  }
}
function flipDownLeft(squares, tile, playersTurn, size){
  let rowSize = Math.sqrt(size);
  let row = Math.floor(tile/rowSize);
  let tilesLeft = tile - (row * rowSize);
  try{
      for(tilesLeft; tilesLeft > 0; tilesLeft = tilesLeft -1){
          row = row + 1;
          let sqIndex = tilesLeft+(rowSize*row)-1;
          if(playersTurn){
              if(squares[sqIndex] === "O"){
                  squares[sqIndex] = "X";
              } else {
                      break;
                  }

          } else {
              if(squares[sqIndex] === "X"){
                  squares[sqIndex] = "O";
              } else{
                  break;
              }
          }
      }

  } catch(err){
  }
}

