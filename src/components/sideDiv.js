import React from 'react';

let sideDiv = () => {
    return (
        <>
            <div style={{
            position: 'fixed',
            width: '3%',
            height: '100%',
            top: 0,
            left: 0,
            background: '#254ACE',
            border: 'solid',
            borderColor: 'transparent',
            filter: 'blur(9px)'
            }}></div> 
            <div style={{
            position: 'fixed',
            width: '3%',
            height: '100%',
            top: 0,
            right: 0,
            background: '#CF20A5',
            border: 'solid',
            borderColor: 'transparent',
            filter: 'blur(9px)'
            }}></div> 
        </>
    );
}

export default sideDiv;