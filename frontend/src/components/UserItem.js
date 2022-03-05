import React from "react";
import {Container, Row, Col} from 'react-bootstrap';


const UserItem = (user) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h4>{user?.user.id}</h4>
                </Col>
                <Col>
                    <h4>{user?.user.username}</h4>
                </Col>
                <Col>
                    <h4>{user?.user.created}</h4>
                </Col>
                <Col>
                    <h4>{user?.user.group.group_name}</h4>
                </Col>
                <Col>
                    <h4>Edit/delete</h4>
                </Col>
            </Row>
        </Container>
    )
}

export default UserItem;