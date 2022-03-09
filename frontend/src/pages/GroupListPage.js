import React, {useState, useEffect} from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const GroupListPage = () => {
    let [groupList, setGroupList] = useState([])

    useEffect(()=> {
        getGroupList()
    }, [])

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
            <Link to='/new-group'>Add Group</Link>
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
                groupList.map((group)=> (
                    <tr>
                <td>{group?.id}</td>
                    <td>{group?.group_name}</td>
                    <td>{group?.description}</td>
                    <td>
                        <Link to={`/groups/${group.id}`}>Edit</Link>
                        
                        |
                        <form action= {'http://127.0.0.1:8000/api/groups/' + group?.id + '/delete/'} method='POST'>
                            <input type='hidden' data-id={group?.id}></input>
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

export default GroupListPage;