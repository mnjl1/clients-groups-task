import React from 'react';
import { useNavigate } from "react-router-dom";

const NewGroupPage = () => {

    let navigate = useNavigate();

    let createGroup = async (event) => {
        console.log(event.target.group_name.value, event.target.description.value)
        let form_inputs = {
            'group_name': event.target.group_name.value,
            'description': event.target.description.value
        }

        fetch('http://127.0.0.1:8000/api/create/group/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(form_inputs)
        })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        createGroup(event)
        navigate('/groups')
    }


    return (
        <div>
            <h1>New Group</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Group name</p>
                        <input name='group_name'/>
                    </label>
                    <label>
                        <p>Description</p>
                        <input name='description'/>
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewGroupPage;