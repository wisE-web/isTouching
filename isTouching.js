function isTouching(obj, obj1) {
    if (obj.x - obj1.x < obj.width/2 + obj1.width/2 && 
      obj1.x - obj.x < obj.width/2 + obj1.width/2 &&
      obj.y - obj1.y  < obj.height/2 + obj1.height/2 &&
        obj1.y - obj.y < obj.height/2 + obj1.height/2) {
          return true
        }
        else {return false }
  }