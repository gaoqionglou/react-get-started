import React, { Component, createRef } from 'react'
import { Card, Button, Form, Input, InputNumber, DatePicker, notification, Spin } from 'antd'
import E from 'wangeditor'
import './edit.less'
import moment from 'moment'
import { getArticleById, saveArticle } from '../../request'


const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        message: title,
        description: msg,
    });
};
const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} 必填',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

class ArticleEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            saveArticleLoading: false
        }
        this.editorRef = createRef()
        this.formRef = createRef()
    }
    initEditor = () => {
        // this.editor = new E(this.editorRef.current)
        // this.editor.customConfig.onchange = (html) => {

        //     this.setState({
        //         content: html
        //     })
        // }
        // this.editor.create()
        this.editor = new E(this.editorRef.current)
        this.editor.customConfig.onchange = (html) => {
            this.formRef.current.setFieldsValue({
                article: {
                    content: html
                }
            })
        }
        this.editor.create()

    }
    componentDidMount() {
        this.initEditor()
        this.setState({
            saveArticleLoading: true
        })
        getArticleById(this.props.match.params.id)
            .then(resp => {
                console.log(resp)
                this.formRef.current.setFieldsValue({
                    article: {
                        title: resp.title,
                        author: resp.author,
                        amount: resp.amount,
                        content: resp.content,
                        createAt: moment(resp.createAt)
                    }
                })
                this.editor.txt.html(resp.content)
            }).catch(err => {

            }).finally(() => {
                this.setState({
                    saveArticleLoading: false
                })
            }
            )
    }
    onFinish = (values) => {
        console.log(values);
        const data = { ...values.article, createAt: values.article.createAt.valueOf() }
        console.log(data);
        this.setState({
            saveArticleLoading: true
        })
        saveArticle(this.props.match.params.id, data).then(resp => {
            openNotificationWithIcon('success', "保存文章", resp.msg)
            this.props.history.push('/admin/article')

        }).catch(err => {
            openNotificationWithIcon('success', "保存文章", "失败")
        }).finally(() => {
            this.setState({
                saveArticleLoading: false
            })
        })
    }
    render() {

        return (
            <Card
                title={`[编辑文章]-${this.props.location.state.title}`}
                bordered={false}
                extra={<Button type='ghost' onClick={this.props.history.goBack}>取消</Button>}>
                <Spin spinning={this.state.saveArticleLoading}>
                    <Form ref={this.formRef}
                        {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                        <Form.Item
                            name={['article', 'title']}
                            label="文章标题"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input placeholder="标题" />
                        </Form.Item>
                        <Form.Item
                            name={['article', 'author']}
                            label="作者"
                            rules={[
                                {
                                    required: true
                                },
                            ]}
                        >
                            <Input placeholder="作者" />
                        </Form.Item>
                        <Form.Item
                            name={['article', 'amount']}
                            label="阅读量"
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    required: true
                                },
                            ]}
                        >
                            <InputNumber placeholder={20} />
                        </Form.Item>
                        <Form.Item
                            name={['article', 'createAt']}
                            label="创建时间"
                            rules={[
                                {

                                    required: true
                                },
                            ]}
                        >
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" >YYYY-MM-DD HH:mm:ss</DatePicker>
                        </Form.Item>
                        <Form.Item
                            label="内容"
                            name={['article', 'content']}


                        >
                            <div className="v-editor" ref={this.editorRef} >这里是内容</div>

                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                            <Button style={{ width: '80%' }} type="primary" htmlType="submit">
                                保存
                            </Button>
                        </Form.Item>
                    </Form>
                </Spin>
            </Card>
        )
    }
}
export default ArticleEdit
