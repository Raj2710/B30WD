import React,{useEffect, useState,useRef} from 'react';

function Hooks() {
  // let [name,setName]=useState("")
  // const renderCount=useRef(0)

  // useEffect(()=>{
  //     renderCount.current += 1
  // })

  let [a,setA] = useState("");
  let inputRef = useRef()


  useEffect(()=>{
    inputRef.current.focus()
  },)

  return <>
    {/* <input value={name} onChange={(e)=>setName(e.target.value)}/>
    <div>My Name is {name} </div>
    <div> I rendered {renderCount.current} times</div> */}

    <input value={a} ref={inputRef} onChange={(e)=>setA(e.target.value)}/>

    {/* <button onClick={focus}>Focus </button> */}



  </>
}

export default Hooks;
