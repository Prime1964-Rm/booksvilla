import React, { Component } from 'react';
import './bsbutton-style.css'


class BSButton extends Component{

    render(){
        const {children,clickEventHandler} = this.props
        console.log(this.props)
        return(
            <button onClick={clickEventHandler} className='bsbutton'>
                {children}
            </button>
        )
    }
}


export default BSButton