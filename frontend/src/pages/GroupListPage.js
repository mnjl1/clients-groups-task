import React, {useState, useEffect} from 'react';
import UserListPage from './UserListPage';
import { Button, Table } from 'react-bootstrap';


const GroupListPage = () => {
    let [groupList, setGroupList] = useState([])

    useEffect(()=> {
        getGroupList()
    })

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

    return (
        <div>
            <Button>Add Group</Button>
        <Table>
            <thead>
                <tr>
                <th>id</th>
                <th>Group Name</th>
                <th>Description</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                groupList.map((group, index)=> (
                    <tr>
                <td>{group?.id}</td>
                    <td>{group?.group_name}</td>
                    <td>{group?.description}</td>
                    <td>Edit/Delete</td>
                </tr>

                ))
            }
                
            </tbody>
        </Table>
        </div>
    )
}

export default GroupListPage;