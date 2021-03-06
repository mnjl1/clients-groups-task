import React, {useState, useEffect} from "react";
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserListPage = () => {
    let [userList, setUserList] = useState([])

    useEffect(()=>{
        getUserList()
    }, [])

    let getUserList = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let data = await response.json()

        if (response.status === 200) {
            setUserList(data[0][0])
        }
    }

    return (
        <div>
            <Link to='/new-user'>Add User</Link>
        <Table>
            <thead>
                <tr>
                <th>id</th>
                <th>Username</th>
                <th>Created</th>
                <th>Group</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                userList.map((user, index)=> (
                    <tr>
                <td>{user?.id}</td>
                    <td>{user?.username}</td>
                    <td>{user?.created}</td>
                    <td>{user?.group.group_name}</td>
                    <td>
                    
                    <Link key={index} to={`/users/${user.id}`}>Edit</Link>
                    /
                    <form action= {'http://127.0.0.1:8000/api/users/' + user?.id + '/delete/'} method='POST'>
                            <input type='hidden' data-id={user?.id}></input>
                            <button type="submit">Delete</button>
                        </form>
                    </td>
                </tr>

                ))
            }
                
            </tbody>
        </Table>
        </div>

    )
}

export default UserListPage;