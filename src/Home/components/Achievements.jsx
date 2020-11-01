import React from 'react'
import { Card, Typography, Row, Button, Image } from 'antd'
import styled from 'styled-components'
import image from "./img.png"

const AchievementCard = styled(Card)`
    height: 100%;
    padding: 10px;

    & .ant-row {
        margin-bottom: 5px;
    }
`

const Achievements = () => {
    return (
        <AchievementCard hoverable>
            <Row>
                <Image src={image} />
            </Row>
            <Row>
                <Typography.Title level={3}>
                    Achievements
                </Typography.Title>
            </Row>
            <Row>
                <Typography.Text>
                    We have been four times the best school in the region so far
                </Typography.Text>
            </Row>
            <Row>
                <Button type="primary" size="large" style={{borderRadius: 10}}>
                    More >
                </Button>
            </Row>
        </AchievementCard>
    )
}

export {Achievements}
