import React from 'react'
import { Card, Typography, Row, Button, Divider } from 'antd'
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

const messages = [
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
    return (
        <MessagesCardWrapper hoverable>
            <Row justify="space-between">
                <Typography.Title level={3}>
                    Messages
                </Typography.Title>
                <Button shape="round" size="large">
                    +
                </Button>
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
