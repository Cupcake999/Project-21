function isTouching(object2,object3,object4,object4,bal)
{
  if (bal.x - object2.x < object2.width/2 + bal.width/2
    && object2.x - bal.x < object2.width/2 + bal.width/2
    && bal.y - object2.y < object2.height/2 + bal.height/2
    && object2.y - bal.y < object2.height/2 + bal.height/2 ){
    return true;
    }
    else {
        return false;
    }
  }

  function bounceOff(obj1,obj2){
    if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
      && obj2.x - obj1.x <obj2.width/2 + obj1.width/2) {
       
        obj2.velocityX = obj2.velocityX * (-1);
  }
  if ( obj1.y - obj2.y < obj2.height/2 +  obj1.height/2
    && obj2.y -  obj1.y < obj2.height/2 +  obj1.height/2){
    
      obj2.velocityY = obj2.velocityY * (-1);
  }

        else {
            return false;
        }
  }
