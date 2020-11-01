import React from 'react'
import { Row, Col, Badge, Avatar, Typography, Divider } from 'antd'


const MessagesCardItem = ({avatar , name="Name", count=0, body}) => {
    return (
        <Row style={{marginTop: 10}} justify="center" align="middle">
            <Col xs={4}>
                <Avatar  src={avatar}/>
            </Col>
            <Col xs={16}>
                <Typography.Text strong>{name}</Typography.Text>
                <br/>
                <Typography.Text>{body}</Typography.Text>
            </Col>
            <Col xs={4}>
                <Badge count={count}/>
            </Col>
            <Divider />
        </Row>
    )
}

export { MessagesCardItem }
