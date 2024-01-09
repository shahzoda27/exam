import React, { useState } from 'react'
import ModalApp from './ModalApp'
const Users = () => {
    const [users,setUsers] = useState([])
    const [modalVisible,setVisible] = useState(false)
    const editTask1 = (index)=>{
        setVisible(true)
        users.splice(index,1)
        setUsers([...users])
    }
    const deletTask1 = (index) =>{
        users.splice(index,1)
        setUsers([...users])
      }
  return (
    <>
        <ModalApp modalVisible={modalVisible} toggle={()=>setVisible(false)} users={users} setUsers={setUsers}></ModalApp>
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 offset-1 my-4">
                <button className='btn btn-info' onClick={()=>setVisible(true)}>Add</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-10 offset-1">
                    <table className='table '>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>status</th>
                                <th>delete/edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((item,index)=>{
                                    return <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.lang}</td>
                                    <td><button onClick={()=>deletTask1(index)} className='btn btn-success'>delete</button>
                                    <button  onClick={()=>editTask1(index)} className='btn btn-danger'>edit</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Users