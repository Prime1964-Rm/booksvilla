import React from 'react'
import './round-nav-btn-style.css'

const RoundNavButton = ({symbol,setStartingPoint,setEndingPoint,endingPoint,startingPoint,totalLength})=>{
    console.log("bro",startingPoint)
    console.log("bro",endingPoint)
   
    return(
        <React.Fragment>
            <button onClick={()=>{
                switch(symbol){
                    // case '<':{
                        
                    //         if(startingPoint>0){
                    //             setStartingPoint(--startingPoint)
                    //         }
                    //         if(endingPoint>startingPoint+3){
                    //             setEndingPoint(--endingPoint)
                    //         }

                    // }
                    case '>':{
                        if(endingPoint<totalLength){
                            setEndingPoint(++endingPoint)
                        }
                        if(startingPoint<=endingPoint-4){
                            setStartingPoint(++startingPoint)
                        }
                    }
                }
            }} className='round-nav-btn'>
                {symbol}
            </button>
        </React.Fragment>
    )
}

export default RoundNavButton