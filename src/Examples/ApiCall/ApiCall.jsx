import { useEffect, useState } from "react"
import axios from "axios"







axios.interceptors.request.use((request)=>{
    console.log('Starting request ',request)
    return request;
})


axios.interceptors.response.use((response)=>{

    console.log('Response: ',response)
    return response
})


function App(){

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    const [sentData,setSentData]=useState([])


    // useEffect(()=>{
    //     setLoading(true)
    // //     fetch('https://jsonplaceholder.typicode.com/posts')
    // //   .then(response => response.json())
    //     // Single axios api call    
    // // axios.get('https://jsonplaceholder.typicode.com/posts')
    //     // .then((response) =>{
    //     //     setData(response.data)
    //     //     setLoading(false)
    //     //     //throw new Error('Error try')
    //     // })
    
    //     axios.all([
    //         axios.get('https://jsonplaceholder.typicode.com/posts'),
    //         axios.get('https://jsonplaceholder.typicode.com/users')
    //     ])
       
    //     .then(axios.spread((posts,users ) =>{
    //         console.log(users)
    //         setData(posts.data)
    //         setLoading(false)
    //         //throw new Error('Error try')
    //     }))
    //     .catch((error)=>{
    //         console.error('Error fetching data: ',error)
    //         setError('Failed to fetch data.')
    //         setLoading(false)
    //     })
    // },[])

    //POST EXAMPLE

    const handleSubmit= (event) => {
        event.preventDefault();
        const newObject = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
    
        axios.post('https://jsonplaceholder.typicode.com/posts',newObject)
        .then((response)=>{
            console.log('Data sent successfully',response.data)
            setSentData(response.data)

        })


    }

    if (loading) {
        return <p>Loading...</p>
    }
    
    if (error) {
        return <p>{error}</p>
    }


    return(
        <div>
            <div>
                <p>Post Method</p>
                <form onSubmit={handleSubmit}>
                    <button type='submit'>Send Data</button>
                </form>
            </div>
            {/* <ul>
                {data.map((post)=>(
                   <li key={post.id}>
                        <p>Title:<strong>{post.title}</strong></p>
                        <p>{post.body}</p>
                   </li>

                ))}
            </ul> */}
        </div>
    )
}


export default App