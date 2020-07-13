import React, { Component } from 'react'
import { Card, Button, Table, Tag, Modal, Typography, notification, Tooltip } from 'antd'
import { getArticles, delArticle } from '../../request'
import XLSX from 'xlsx'
import moment from 'moment'


const ButtonGroup = Button.Group

const openNotificationWithIcon = (type, title, msg) => {
    notification[type]({
        message: title,
        description: msg,
    });
};

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
            total: 0,
            isLoading: false,
            offset: 0,
            limited: 10,
            delArticleModalTitle: '',
            delArticleModalVisible: false,
            delConfirmLoadingVisible: false,
            delArticleId: -1
        }
    }

    createColumns = (columnKeys) => {
        const cols = columnKeys.map(columnKey => {
            if (columnKey === 'amount') {
                return {
                    title: columnTitle[columnKey],
                    key: columnKey,
                    render: (text, record, index) => {

                        return <Tooltip title={record.amount > 250 ? "超过250" : "不足250"} ><Tag color={record.amount > 250 ? "red" : "green"}>{record.amount}</Tag></Tooltip>
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
        cols.push({
            title: '操作',
            key: 'action',
            render: (record) => {

                return (
                    <ButtonGroup>
                        <Button size='small' onClick={this.toEdit.bind(this, record.id, record.title)}>编辑</Button>
                        <Button size='small' onClick={this.showDelArticleModal.bind(this, record)}>删除</Button>
                    </ButtonGroup>
                )
            }
        })
        return cols;
    }
    getData = () => {
        this.setState({
            isLoading: true
        })
        getArticles(this.state.offset, this.state.limited).then(resp => {
            const columnKeys = Object.keys(resp.list[0])
            const columns = this.createColumns(columnKeys)
            console.log(this.updater.isMouted(this))
            //如果请求完成组件已经被销毁，就不需要再设置state。否则会报错
            if(!this.updater.isMouted(this)) return
            this.setState({
                total: resp.total,
                dataSource: resp.list,
                columns: columns,


            })
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            this.setState({
                isLoading: false
            })
        })
    }
    componentDidMount() {

        this.getData()
    }
    onPageChange = (page, pageSize) => {
        console.log({ page, pageSize })
        this.setState({
            offset: (page - 1) * pageSize,
            limited: pageSize
        }, () => {
            this.getData()
        })
    }
    onShowSizeChange = (current, size) => {
        console.log({ current, size })
        this.setState({
            offset: 0,
            limited: size
        }, () => {
            this.getData()
        })
    }
    toExcel = () => {

        const data = [Object.keys(this.state.dataSource[0])]
        for (let i = 0; i < this.state.dataSource.length; i++) {
            data.push(Object.values(this.state.dataSource[i]))
        }

        /* convert state to workbook */
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        /* generate XLSX file and send to client */
        XLSX.writeFile(wb, `articles-${moment().format('YYYY年MM月DD日-hh:mm:ss')}.xlsx`)
        console.log(data, `articles-${moment().format('YYYY年MM月DD日-hh:mm:ss')}.xlsx`)
    }
    showDelArticleModal = (record) => {
        // Modal.confirm({
        //     title: <Typography>你确定要删除标题为：【 <span style={{ color: '#F00' }}>{record.title}</span>】的文章吗?</Typography>,
        //     content: `此操作需要谨慎，不可撤回`,
        //     okText: '决定要删',
        //     cancelText: '残忍拒绝',
        //     onOk: () => {
        //         delArticle(record.id)
        //             .then(resp => {
        //                 openNotificationWithIcon('success', "恭喜", resp.msg)
        //             }).catch(err => {
        //                 openNotificationWithIcon('error', "糟糕", '删除失败，稍后再试')
        //             })
        //     }
        // })
        this.setState({
            delArticleModalVisible: true,
            delArticleModalTitle: record.title,
            delArticleId: record.id
        })
    }
    hideDelModel = () => {
        this.setState({
            delArticleModalVisible: false,
            delArticleModalTitle: '',
            delConfirmLoadingVisible: false,
            delArticleId: -1
        })
    }
    deleteArticle = () => {
        this.setState({
            delConfirmLoadingVisible: true
        })
        delArticle(this.state.id).then(resp => {
            //删除完再次回到第一页
            this.setState({
                offset: 0
            }, () => {
                this.getData()
            })
            openNotificationWithIcon('success', "恭喜", resp.msg)
        }).catch(err => {
            openNotificationWithIcon('error', "糟糕", '删除失败，稍后再试')
        }).finally(() => {
            this.setState({
                delConfirmLoadingVisible: false,
                delArticleModalVisible: false
            })
        })
    }
    toEdit = (id, title) => {

        this.props.history.push({
            pathname: `/admin/article/edit/${id}`,
            state: {
                title: title
            }
        }
        )
    }
    render() {
        return (
            <div>

                <Card title="文章列表" bordered={false} extra={

                    <ButtonGroup>
                        <Button type='ghost' onClick={this.toExcel}>导出excel</Button>
                        <Button size='ghost' onClick={this.getData}>刷新</Button>
                    </ButtonGroup>
                }>
                    <Table
                        dataSource={this.state.dataSource}
                        columns={this.state.columns}
                        pagination={{
                            current: this.state.offset / this.state.limited + 1,
                            total: this.state.total,
                            hideOnSinglePage: true,
                            showQuickJumper: true,
                            onShowSizeChange: this.onShowSizeChange,
                            onChange: this.onPageChange
                        }}
                        loading={this.state.isLoading}
                    />;
                </Card>
                <Modal
                    title="此操作需要谨慎，不可撤回"
                    visible={this.state.delArticleModalVisible}
                    closable={false}
                    onCancel={this.hideDelModel}
                    maskClosable={true}
                    confirmLoading={this.state.delConfirmLoadingVisible}
                    onOk={this.deleteArticle}
                ><Typography>你确定要删除标题为：【 <span style={{ color: '#F00' }}>{this.state.delArticleModalTitle}</span>】的文章吗?</Typography></Modal>
            </div >
        )
    }
}
export default (ArticleList)
