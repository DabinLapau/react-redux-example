import {connect} from 'react-redux';
import {increment, decrement} from '../actions/index.js';
import Incrementer from '../components/Incrementer.jsx';

const mapStateToProps = (state) => {
    return {
        num: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        }
    };
};

const VisibleIncrementer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Incrementer);

export default VisibleIncrementer;
