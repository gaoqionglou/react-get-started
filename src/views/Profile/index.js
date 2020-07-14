import React, { Component } from 'react'
import { Card, Upload, Spin } from 'antd'
import axios from 'axios'
import { changeAvatar } from '../../actions/user'
import { connect } from 'react-redux'
const mapState = state => ({
    avatarUrl: state.user.avatar
})
class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = { isUploading: false, avatarUrl: '' }
    }
    handleAvatarUpload = ({ file }) => {
        const data = new FormData()
        data.append('Token', 'f3e04ae2b3d6170f38b26bdb01aadb060dd703a5:KjnR4glpLWbREcxkdRaYc-8ZaqY=:eyJkZWFkbGluZSI6MTU1ODkzODY3NywiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNjgxOTQ2IiwiYWlkIjoiMTU3MDMzMCIsImZyb20iOiJmaWxlIn0=')
        data.append('file', file)
        this.setState({
            isUploading: true
        })
        axios.post('http://up.imgapi.com/', data)
            .then((resp) => {

                console.log(resp)
                if (resp.status === 200) {
                    this.setState({
                        avatarUrl: resp.data.linkurl
                    })
                    this.props.changeAvatar(resp.data.linkurl)
                }
            }).catch((err) => {
                console.log(err)
            }).finally(() => {
                this.setState({
                    isUploading: false
                })
            })
    }
    render() {
        console.log(this.props)
        return (
            <Card title='个人设置' bordered={false}>
                <Upload
                    customRequest={this.handleAvatarUpload}
                    showUploadList={false}

                >

                    <div style={{
                        border: '1px dashed #dedede',
                        width: 80,
                        height: 80,
                        display: 'block'
                    }}>
                        <Spin spinning={this.state.isUploading}>

                            {this.props.avatarUrl ? <img style={{

                                width: 78,
                                height: 78,

                            }} src={this.props.avatarUrl} alt='' /> : <span>点击上传</span>}
                        </Spin>
                    </div>
                </Upload>
            </Card>
        )
    }
}
export default connect(mapState, { changeAvatar })(Profile)