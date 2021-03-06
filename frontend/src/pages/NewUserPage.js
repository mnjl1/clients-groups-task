import React,{useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const NewUserPage = () =>{

    const {id} = useParams()

    const [user, setUser] = useState(null)
    const [groupList, setGroupList] = useState([])

    let navigate = useNavigate();

    useEffect(()=>{
        getGroupList()
    }, [id])

    let getGroupList = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/groups/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json()

        if (response.status === 200){
            setGroupList(data[0][0])
        }
    }


    let createUser = async () => {
        console.log('sending...', JSON.stringify(user))
        fetch(`http://127.0.0.1:8000/api/create/user/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                },
            body: JSON.stringify(user)
        })
    }

    const handleSubmit = () => {
        let key = user.group
        let index
        console.log('before ', user)

        for (index = 0; index < groupList.length; index++) {
            if (key === groupList[index].group_name) {
                
                setUser(user.group = groupList[index])
                console.log('after', user)
            }
        }
        
        createUser()
        navigate('/users')
    }

    return (
        <div>
            <h1>New User</h1>
            <form>
                <fieldset>
                    <label>
                        <p>Username</p>
                        <input onChange={(e)=>{setUser({...user, 'username': e.target.value})}}
                            name='username'/>
                    </label>
                    <label>
                        <select onChange={(e)=>{setUser({...user, 'group': e.target.value})}}
                                >
                                {
                                    groupList.map((group, index) => (
                                    <option >{group?.group_name}</option>
                                    ))
                                }
                        </select>
                    </label>
                </fieldset>
            </form>
            <button onClick={handleSubmit}>Create</button>
        </div>
    )
}

export default NewUserPage;