import React from 'react';


const NewUserPage = () => {
    let createUser = async (event) => {
        console.log(event.target.username.value, event.target.group.value)
        let form_inputs = {
            'username': event.target.group_name.value,
            'group': event.target.description.value
        }

        fetch('http://127.0.0.1:8000/api/users/create/', {
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
        createUser(event)
    }


    return (
        <div>
            <h1>New User</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Username</p>
                        <input name='username'/>
                    </label>
                    <label>
                        <p>Group</p>
                        <input name='group'/>
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}