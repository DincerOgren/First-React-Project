import { useEffect } from "react";
import { useForm } from "react-hook-form"




function App(){

    const {register, handleSubmit, reset, watch, formState:{errors}} = useForm()

    const onSubmit=(data)=> {
        console.log(data);
        reset(); // resets the form built in function
    }
    const watchedName = watch('name');
    const watchedEmail = watch('email');

    useEffect(()=>{
        console.log('Name: ',watchedName);
    },[watchedName])

    useEffect(()=>{
        console.log('Email: ',watchedEmail);
    },[watchedEmail])



    // Custom validation

    const validateName=(value)=>{
        if(value!=='admin'){
            return true
        }
        return 'admins are not allowed.'
        
    }

    //Custom async validation

    const existingUsernames = ['john','alice']
    const checkIfUsernameExist= async (username)=>{
        await new Promise(resolve => setTimeout(resolve,1000));
        return existingUsernames.includes(username);
    }

    return(

        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name: 
                <input {...register('name',{required:'Name is required',
                                            minLength:{value:2,message:'Name should be at least 2 character.'},
                                            validate:{
                                                isAdmin: (value)=> validateName(value),
                                                isNumber: (value) => isNaN(value) || "Name cannot be a number.",
                                                checkUsername: async (value) => {
                                                    const exist = await checkIfUsernameExist(value);
                                                    return !exist || "Username already taken."
                                                }
                                                
                                            }
                                                
                                            })}/> 
            </label>
            {errors.name && <span>{errors.name.message} </span>}


            <label>Email: 
                <input {...register('email',{required: 'Email is required!',minLength:2})}/>
            </label>
            {errors.email && <span>{errors.email.message} </span>}
            <br/>
            <label>
                Password:
                <input type='password' {...register('password',{

                    required:true,
                    minLength:3
                })}/>
            </label>
            <br/>
            <label>
                Confirm Password:
                <input type='password' {...register('confirmPassword',{
                    required:true,
                    minLength:3,
                    validate:(value)=> value ===watch('password') || 'Passwords do not match.'
                })}/>
            </label>
            
            {errors.confirmPassword && <span>{errors.confirmPassword.message} </span>}
            <br/>
            <button tpye='submit'>Submit</button>

        </form>




    </div>
    )

}


export default App