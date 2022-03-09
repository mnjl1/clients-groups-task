import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UpdateGroupPage = () =>{

    const {id} = useParams()

    const [group, setGroup] = useState(null)

    let navigate = useNavigate();

    useEffect(()=>{
        getGroupById()
    }, [id])

    let getGroupById = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/groups/${id}`)
        let data = await response.json()
        setGroup(data)
    }

    let updateGroup = async () => {
        fetch(`http://127.0.0.1:8000/api/groups/${id}/edit/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(group)
        })
    }

    const handleSubmit = () => {
        console.log(group)
        updateGroup()
        navigate('/groups')
    }

    return (
        <div>
            <h1>Update Group</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Group name</p>
                        <input onChange={(e)=>{setGroup({...group, 'group_name': e.target.value})}}
                            name='group_name' defaultValue={group?.group_name}/>
                    </label>
                    <label>
                        <p>Description</p>
                        <input onChange={(e)=>{setGroup({...group, 'description': e.target.value})}} 
                            name='description' defaultValue={group?.description}/>
                    </label>
                </fieldset>
            </form>
            <button onClick={handleSubmit}>Update</button>
            
        </div>
    )
    
}

export default UpdateGroupPage;