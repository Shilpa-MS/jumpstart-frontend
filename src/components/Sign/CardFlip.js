import React,{useState} from 'react';
import ReactCardFlip from 'react-card-flip';

const CardFlip=()=>{
    const [isFlipped,setIsFlipped]=useState(false);

    const handleClick=(e)=>{
        setIsFlipped(!isFlipped);
    }

    return(<React.Fragment>
         <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div>
          This is the front of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>

        <div>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>

    </React.Fragment>)

}

export default CardFlip;
