function evaluatePath(numbers) {
    //The game intent is to check each number, move that amount of spaces left or right, and end the game when an obstacle is hit.
    //Return the final result as an array of the position, and number of moves.
    let result = [0,0]
    direction =1
    moves = 0
    position=0
    let gamePause=false
    let boundaryHit = 0
    while(gamePause==false) {
        if(numbers[position]==0) {
            gamePause=true
            break
        }
        let newPosition;
        if(direction==1) {
            //right
            newPosition = position +numbers[position]
            
        } else if(direction==-1) {
            //left
            newPosition = position + (direction * numbers[position])
        }

        if(newPosition <0 || newPosition >=numbers.length) {
            if(direction ==-1) {
                direction =1
                if(boundaryHit==1) {
                    gamePause=true
                }
                boundaryHit =1
            } else {
                direction =-1
                if(boundaryHit==1) {
                    gamePause=true
                }
                boundaryHit=1
            }
        } else {
            position=newPosition
            moves+=1
        }
                  
    }
    
    result=[position,moves]
    return result; 
}

module.exports = { evaluatePath };
