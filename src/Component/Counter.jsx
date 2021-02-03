import { React } from "react";
import { useDispatch } from "react-redux";
import {increment,decrement} from '../Redux/Duck/Counter'


function Counter(){
    const dispatch=useDispatch();
    
    function handleIncrement(){
        dispatch(increment());
    };
    function handleDecrement(){
        dispatch(decrement());
    };

    return(
        <div>
          <button onClick={handleIncrement}>INCREMENT</button> 
          <button onClick={handleDecrement}>DECREMENT</button>
        </div>
    )
};

export default Counter;