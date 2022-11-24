import React, {useState} from 'react';

const Example = () => {
    const [state, setState] = useState('the old state');
    return (
        <div>
            <p>The current state is {state}</p>
            <button onClick={() => setState('a new state')}>Set new state</button>
        </div>
    );
}