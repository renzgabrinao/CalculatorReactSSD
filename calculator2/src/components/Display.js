import React from 'react';

const Display = ({ input, prevInput }) => {

    return (<div className="display">
                <span>{prevInput}</span>
                <span>{input}</span>
            </div>)
}

export default Display