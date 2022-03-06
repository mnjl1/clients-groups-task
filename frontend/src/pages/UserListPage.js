import React, {useState, useEffect} from "react";
import {Button, Table} from 'react-bootstrap'

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
            <Button>Add User</Button>
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
                    <td>Edit/Delete</td>
                </tr>

                ))
            }
                
            </tbody>
        </Table>
        </div>

    )
}

export default UserListPage;