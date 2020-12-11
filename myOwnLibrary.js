function bounceOff(object1,object2){

    if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
      && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  }
  function isTouching(object1,object2) {

    if (object1.x - fixedRect.x < fixedRect.width/2 + object1.width/2
      && fixedRect.x - object1.x < fixedRect.width/2 + object1.width/2
      && object1.y - fixedRect.y < fixedRect.height/2 + object1.height/2
      && fixedRect.y - object1.y < fixedRect.height/2 + object1.height/2) {
      return true;
  
  }
  else {
    return false;
  
  }
  
  }