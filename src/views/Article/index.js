import React, { Component } from 'react'
import { Card, Button, Table, Tag } from 'antd'
import { getArticles } from '../../request'
import moment from 'moment'


const columnTitle = {
    id: 'id',
    title: '标题',
    author: '作者',
    createAt: '创建时间',
    amount: '阅读量',
}

class ArticleList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: [],
            columns: [],
            total: 0
        }
    }
    createColumns = (columnKeys) => {
        return columnKeys.map(columnKey => {
            if (columnKey === 'amount') {
                return {
                    title: columnTitle[columnKey],
                    key: columnKey,
                    render: (text, record, index) => {

                        return <Tag color={record.amount > 250 ? "red" : "green"}>{record.amount}</Tag>
                    }

                }
            }

            if (columnKey === 'createAt') {
                return {
                    title: columnTitle[columnKey],
                    key: columnKey,
                    render: (text, record, index) => {
                        const { createAt } = record
                        return moment(createAt).format('YYYY年MM月DD日 hh:mm:ss')
                    }
                }
            }


            return {
                title: columnTitle[columnKey],
                dataIndex: columnKey,
                key: columnKey,
            }
        })
    }
    getData = () => {
        getArticles().then(resp => {
            const columnKeys = Object.keys(resp.list[0])
            const columns = this.createColumns(columnKeys)
            this.setState({
                total: resp.total,
                dataSource: resp.list,
                columns: columns

            })
        }).catch(err => {
            console.log(err)
        })
    }
    componentDidMount() {

        this.getData()
    }
    render() {
        console.log(this.state.dataSource, this.state.columns)
        return (
            <div>

                <Card title="文章列表" bordered={false} extra={<Button>导出excel</Button>}>
                    <Table dataSource={this.state.dataSource} columns={this.state.columns} pagination={{ total: this.state.total, hideOnSinglePage: true }} />;
                </Card>
            </div>
        )
    }
}
export default ArticleList
