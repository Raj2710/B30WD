import './App.css';
import {useState} from 'react';
function App() {
  let [task, setTask]= useState("")
  let [type, setType]=useState("all")
  let [todo, setToDo] = useState([
    {
      work:"Create Theme",
      status:false
    },
    {
      work:"Work on wordpress",
      status:false
    },
    {
      work:"Build the Site",
      status:false
    },
    {
      work:"Test the Application",
      status:false
    }
  ])

  let handleChange = (e)=>{
    let update = [...todo];//achieving the immutability

    console.log(update==todo)

    let item = e;
    item.status=!item.status
    update.splice(update.indexOf(e),1,item)
    console.log(update)
    setToDo(update)
  }

  let add = ()=>{
    if(task)
    {
        let newArr = [...todo];
        newArr.push({
            work:task,
            status:false
        })
        setToDo(newArr)
    }
  }

  return <>
        <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="card card-white">
                <div className="card-body">
                    <form>
                        {/* <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{
                            setTask(e.target.value)
                            console.log(e.target.value)
                        }
                          }/> */}
                         <input type="text" className="form-control add-task" placeholder="New Task..." onChange={(e)=>{setTask(e.target.value)}}
                         onKeyDown={(e)=>{
                           if(e.key==="Enter"){
                             add()
                           }
                         }}
                         />
                        {/* <button className='btn btn-success' onClick={()=>add()}>Create</button> */}
                    </form>
                    <ul className="nav nav-pills todo-nav">
                        <li role="presentation" className="nav-item all-task active"><a href="#" className="nav-link">All</a></li>
                        <li role="presentation" className="nav-item active-task"><a href="#" className="nav-link">Active</a></li>
                        <li role="presentation" className="nav-item completed-task"><a href="#" className="nav-link">Completed</a></li>
                    </ul>
                    <div className="todo-list">
                        {
                          todo.map((e,index)=>{
                            return <>
                                <div className="todo-item" key={index}>
                                    <div className="checker"><span className=""><input type="checkbox" defaultChecked={e.status} onChange={()=>handleChange(e)}/></span></div>
                                    {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                                  </div>
                              {/* {
                                  type=="all"?<div className="todo-item" key={index}>
                                                <div className="checker"><span className=""><input type="checkbox" defaultChecked={e.status} onChange={()=>handleChange(e)}/></span></div>
                                                {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                                              </div>:
                            type=="completed"?<div className="todo-item" key={index}>
                                                  <div className="checker"><span className=""><input type="checkbox" defaultChecked={e.status} onChange={()=>handleChange(e)}/></span></div>
                                                  {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                                              </div>:
                                              <div className="todo-item" key={index}>
                                                <div className="checker"><span className=""><input type="checkbox" defaultChecked={e.status} onChange={()=>handleChange(e)}/></span></div>
                                                {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                                              </div>
                              } */}
                            </>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
}

export default App;
