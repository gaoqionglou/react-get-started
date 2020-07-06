import React, { Component, createRef } from 'react'
import { Card, Row, Col } from 'antd'
import echarts from 'echarts'
import './dashboard.less'
import { getArticleAmout } from '../../request'
class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.articleAmount = createRef()
    }
    initArticleChart = () => {
        getArticleAmout().then(resp => {
            console.log(resp.amount)
            this.articleChart = echarts.init(this.articleAmount.current)
            // 指定图表的配置项和数据
            var option = {

                tooltip: {},
                legend: {
                    data: ['浏览量']
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: true,
                    data: resp.amount.map(item => item.month)
                },
                yAxis: {},
                series: [{
                    name: '浏览量',
                    type: 'bar',
                    data:resp.amount.map(item => item.value)
                }]
            };

            // 使用刚指定的配置项和数据显示图表。
            this.articleChart.setOption(option);
        })

    }
    componentDidMount() {
        this.initArticleChart()
    }
    render() {
        return (
            <div>
                <Card title="概览" bordered={false}>

                    <Row gutter={16}>
                        <Col className="gutter-row" span={6}>
                            <div className="v-gutter-box" style={{ backgroundColor: '#29B6F6' }}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="v-gutter-box" style={{ backgroundColor: '#AB47BC' }}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="v-gutter-box" style={{ backgroundColor: '#FF7043' }}>col-6</div>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <div className="v-gutter-box" style={{ backgroundColor: '#43A047' }}>col-6</div>
                        </Col>
                    </Row>
                </Card>
                <Card
                    title="最近浏览量"
                    bordered={false}
                >
                    <div ref={this.articleAmount} style={{ height: '500px' }} />
                </Card>
            </div>
        )
    }
}
export default Dashboard