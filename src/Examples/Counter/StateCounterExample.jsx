
import { useState } from "react"

function App(){
    
    const [counters,setCounters] = useState([{id:1,value:0}])

    const addCountter = () => {

        setCounters([...counters, {id:counters.length+1,value:0}])
    }

    const incrementCount = (id) => {
        setCounters(counters.map(counter =>
            counter.id === id ? {...counter, value:counter.value+1} : counter
        ));
    };

    return(
        <div>
            <button onClick={addCountter}>Add Counter</button>
            <ul>
                {counters.map(counter =>(
                    <li key={counter.id}>
                        Counter {counter.id}: {counter.value}
                        <button onClick={()=>incrementCount(counter.id)}>Increment</button>
                    </li>
                ))}     
            </ul>
        </div>
    )

}


export default App