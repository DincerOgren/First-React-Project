const customApi = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{
        'Authorization': 'Bearer <TOKEN>'
    }
})

customApi.interceptors.request.use((request)=>{
    console.log('Starting request ',request)
    return request;
},
(config) => {
    const token= localStorage.getItem('token');
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
},
(error) =>{
    console.error("Request error ",error)
    return Promise.reject(error);
}
)

customApi.interceptors.response.use((response)=>{
// success check return data
return response;
},
(error) => {
    if(error.response && error.response.status === 401){
        console.error("Unauthorized");

    }
    if(error.response && error.response.status === 500){
        console.error("server error");
        
    }

    return Promise.reject(error);
}

)

export default customApi