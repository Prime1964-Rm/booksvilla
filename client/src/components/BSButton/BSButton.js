import React, { Component, useState } from 'react';
import './bsbutton-style.css'


const BSButton = ({children,onClick,style,className,fontSize,backgroundColor='#272c34',color='#00e676',border="#00e676"})=>{ 
    

        let [styleSheet,setStyleSheet] = useState({
            fontSize:'2vh',
            backgroundColor:backgroundColor ,
            fontWeight:"500",
            color:color,
            border:`3px solid ${border}`,
            padding: '8px 15px 8px 15px',
            transition: 'background-color .4s' ,
            transitionTimingFunction: 'ease-in-out',
            ...style
        })
    
        return(
            <button className={className} 
            onClick={onClick} 
            style={styleSheet} 
                onMouseEnter={()=>{
                   setStyleSheet({
                       ...styleSheet,
                       backgroundColor:color,
                       color:backgroundColor
                   })
                }}
                onMouseLeave={
                    ()=>{
                        setStyleSheet({
                            ...styleSheet,
                            backgroundColor:backgroundColor,
                            color:color
                        })
                    }
                }
            >
                {children}
            </button>
        )
    }

    // .bsbutton{
    //     font-size: 2vh;
    //     background-color: white;
    //     color: #00e676;
    //     font-weight: 500;
    //     border: 3px solid #00e676;
    //     padding: 8px 15px 8px 15px;
    // }
    
    // .bsbutton:hover{
    //     background-color: #00e676;
    //     color: white;
    //     font-weight: 600;
    //     border: 3px solid #00e676;
    // }

export default BSButton