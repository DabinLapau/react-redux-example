import React, {PropTypes} from 'react'

const Incrementer = ({increment, decrement, num}) => (
    <div>
        <h1>Incrementer</h1>
        <p>
            {num}
        </p>
        <button onClick={increment}>INC</button>
        <button onClick={decrement}>DEC</button>
    </div>
);

Incrementer.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    num: PropTypes.number.isRequired
};

export default Incrementer;
