import React,{useContext,useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
import {useFormik} from 'formik';
import * as yup from'yup' 
// import {StudentContext} from '../App'

function AddStudents(props) {

    // let context = useContext(StudentContext)

    let navigate = useNavigate();
    // let [name,setName]=useState("");
    // let [email,setEmail]=useState("");
    // let [mobile,setMobile]=useState("");
    // let [cls,setCls]=useState("");
    const url = "https://61ee1f7ed593d20017dbac50.mockapi.io/students/"

    //Using fetch
    // let handleSubmit = async()=>{
    //     await fetch(url,{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({
    //             name,
    //             email,
    //             mobile,
    //             class:cls
    //         })
    //     })
    //     .then(response=>response.json())
    //     .then(res=>{
    //         navigate("/all-students")
    //     })
    //     .catch(err=>{
    //         console.log(err)
    //     })

    // }


    //using axios
    let handleSubmit = async(values)=>{
        try {
            let response = await axios.post(url,values)
            console.log(response)
            if(response.status==201)
                navigate('/all-students')
            else
                alert("Internal server error!")
            
        } catch (error) {
            console.log(error)
        }
    }

    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            password:'',
            mobile:'',
            class:''
        },
        validationSchema: yup.object({
            name:yup.string().required('Required'),
            email:yup.string().email('Invalid Email').required('Required'),
            password:yup.string().required('No Password Provided').min(8, 'Password is too short').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,"Must Contain One Uppercase, One Lowercase, One Number and one special case Character"),
            mobile:yup.string().matches(/^\d{10}$/,"Mobile number not valid").required('Required'),
            class:yup.string()
        }),
        onSubmit:values=>{
            console.log(values)
            handleSubmit(values)
        }
    
    })

    return <div>
        <h1>Add Student</h1>
        <form onSubmit ={formik.handleSubmit}>
        <div className='form-group'>
            <label for='name'>Name</label>
            <input
            id="name"
            name='name'
            type='text'
            className='form-control'
            placeholder='Enter Name'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name?<div style={{color:'red'}}>{formik.errors.name}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Email</label>
            <input
            id="email"
            name='email'
            type='email'
            className='form-control'
            placeholder='Enter email'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?<div style={{color:'red'}}>{formik.errors.email}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Password</label>
            <input
            id="password"
            name='password'
            type='text'
            className='form-control'
            placeholder='Enter Password'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password?<div style={{color:'red'}}>{formik.errors.password}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Mobile</label>
            <input
            id="mobile"
            name='mobile'
            type='text'
            className='form-control'
            placeholder='Enter Mobile'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mobile}
            />
            {formik.touched.mobile && formik.errors.mobile?<div style={{color:'red'}}>{formik.errors.mobile}</div>:null}
        </div>

        <div className='form-group'>
            <label for='name'>Class</label>
            <input
            id="class"
            name='class'
            type='text'
            className='form-control'
            placeholder='Enter class'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.class}
            />
            {formik.touched.class && formik.errors.class?<div style={{color:'red'}}>{formik.errors.class}</div>:null}
        </div>
        
        <div className='form-group'>
            <button type='submit' className='btn btn-primary'>Submit</button>
        </div>
        
        </form>
    </div>
}

export default AddStudents


{/* <Form>

<Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
    We'll never share your email with anyone else.
    </Form.Text>
</Form.Group>

<Form.Group className="mb-3" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="text" placeholder="Mobile" onChange={(e)=>setMobile(e.target.value)}/>
</Form.Group>

<Form.Group className="mb-3">
    <Form.Label>Class</Form.Label>
    <Form.Control type="text" placeholder="Class" onChange={(e)=>setCls(e.target.value)}/>
</Form.Group>

<Button variant="primary" onClick={handleSubmit}>
    Submit
</Button>
</Form> */}