import React,{useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
const url = "https://61ee1f7ed593d20017dbac50.mockapi.io/students/"
function AllStudents() {
    let [students,setStudents]=useState([]);

    useEffect(()=>{
        getData();
      },[])
    
      let getData = async()=>{
        await fetch(url)
        .then(response => response.json())
        .then(res=>{
          setStudents(res)
        })
        .catch(err=>{
          console.log(err)
        })
      }


    let handleDelete = async(i)=>{
        await fetch(url+i,{
            method:'DELETE'
        })
        .then(response=>response.json())
        .then(data=>{
            getData()
        })
    }

    return <>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                {
                    students.map((e)=>{
                        return <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.name}</td>
                                    <td>{e.email}</td>
                                    <td>{e.mobile}</td>
                                    <td>{e.class}</td>
                                    <td><Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                                    <span>&nbsp; &nbsp;</span>
                                        <Link to={`/edit-student/${e.id}`}>
                                        <Button variant='primary'>Edit</Button>
                                        </Link>
                                        {/* <Button variant='primary' onClick={()=>{
                                            navigate('/edit-student/'+i)
                                        }}>Edit</Button> */}
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default AllStudents
