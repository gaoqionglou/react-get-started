import React, { Component } from 'react'
import { Card, Button, Avatar, List, Badge } from 'antd'
import { connect } from 'react-redux'
import { markNotificationAsReadById, markAllNotificationsAsRead, getTheNotifications } from '../../actions/notifications'
const mapState = state => {
    const { list = [], isLoading } = state.notifications
    return {
        list, isLoading
    }
}

class Notifications extends Component {
    componentDidMount() {
        this.props.getTheNotifications()
    }

    render() {
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
        ];
        return (
            <Card
                title="通知中心"
                bordered={false}
                extra={<Button onClick={this.props.markAllNotificationsAsRead} disabled={this.props.list.every(item => item.hasRead === true)}>全部标记已读</Button>}
            >
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.list}
                    loading={this.props.isLoading}
                    renderItem={item => (
                        <List.Item extra={item.hasRead ? '' : <Button onClick={this.props.markNotificationAsReadById.bind(this, item.id)}>标记已读</Button>}>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<Badge dot={!item.hasRead}>{item.title}</Badge>}
                                description={item.desc}
                            />
                        </List.Item>
                    )}
                />
            </Card>
        )
    }
}
export default connect(mapState, { markNotificationAsReadById, markAllNotificationsAsRead,getTheNotifications })(Notifications)
