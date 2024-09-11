import {useState} from "react";

const Counter =()=> {
    const [counter,setCounter] = useState(0);
    const plusHandler=()=> setCounter(counter+ 1);
    const minusHandler=()=> setCounter(counter -1)

    

    return(

        <div className="counterContainer flex flex-row">
            <button className="rounded-xl bg-green-400 m-4 p-4 text-3xl" onClick={plusHandler} >+</button>
            <div className="m-4 p-4 text-3xl w-20 text-center" >{counter}</div>
        <button className="rounded-xl bg-red-300 m-4 p-4 text-3xl" onClick={minusHandler} >-</button>

        </div>

    );
};

export default Counter;