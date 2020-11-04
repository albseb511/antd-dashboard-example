import React from 'react'
import { Card, Typography, Row, Button, Divider, Modal } from 'antd'
import styled from 'styled-components'
import image from "./img.png"
import { MessagesCardItem } from './MessagesCardItem'

const MessagesCardWrapper = styled(Card)`
    height: 100%;
    padding: 0px;
    overflow: auto;

    & .ant-row {
        margin-bottom: 5px;
    }
`

const data = [
    {
        id: 1,
        avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        name: "Nrupul Dev",
        body: "I will be running late",
        count: 3,
    },
    {
        id: 2,
        avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        name: "Albet Sebastian",
        body: "Stepping out!",
        count: 1,
    },
    {
        id: 3,
        avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        name: "Aman Vats",
        body: "Done!",
        count: 0,
    },
]

const Messages = () => {
    const [showDrawer, setShowDrawer] = React.useState(false)
    const [messages, setMessages] = React.useState(data)

    const handleAddMessage = () => {
        let payload = {
            id: messages[messages.length-1].id +1,
            avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            name: "new name",
            body: "message",
            count: 5
        }
        setMessages( [...messages, payload] )
        setShowDrawer(false)
    }
    return (
        <MessagesCardWrapper hoverable>
            <Row justify="space-between">
                <Typography.Title level={3}>
                    Messages
                </Typography.Title>
                <Button onClick={()=>setShowDrawer(true)} shape="round" size="large">
                    +
                </Button>
            <Modal visible={showDrawer} onOk={()=>handleAddMessage()} onCancel={()=>{setShowDrawer(false)}} >
                    <p>Click ok to add a new message</p>
            </Modal>
            </Row>
            {
                messages.map( ({id,avatar,name,body,count}) => (

                    <MessagesCardItem 
                        key={id}
                        avatar={avatar}
                        name={name}
                        body={body}
                        count={count} />
                ) )
            }
        </MessagesCardWrapper>
    )
}

export {Messages}
