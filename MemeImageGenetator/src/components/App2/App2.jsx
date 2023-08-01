import './App2.css'
import React from 'react'
import {useState} from 'react';
import {boxes} from './boxes'

const App2 = () => {

    function toggle(id) {
        console.log(id)
    }

    const [squares, setSquares] = React.useState(boxes);

    let boxesElems = squares.map(box => <Box 
        toggle={toggle} 
        on={box.on} 
        key={box.id} 
        className='box'/>)
    

    return (
        <div className='App2'>
            <div className='boxes'>
                {boxesElems}
            </div>
        </div>
    )
}

const Box = ({id, on, toggle}) => {
    const [onState, setOnState] = React.useState(on);

    const styles = {
        backgroundColor: onState? '#222' : 'transparent'
    }

    // const handleClick = () => {
    //     setOnState(prevOnState => !prevOnState)
    // }

    return (
        
        <div onClick={() => toggle(id)} style={styles} key={id} className='box'></div>
    )
}

export default App2;