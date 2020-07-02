import React, { Component, useState } from 'react'
import { DatePicker, message, Button, Table } from 'antd';

const App = () => {
    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`您选择的日期是: ${value ? value.format('YYYY年MM月DD日') : '未选择'}`);
        setDate(value);
    };
    return (

        <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker onChange={handleChange} />
            <div style={{ marginTop: 16 }}>
                当前日期：{date ? date.format('YYYY年MM月DD日') : '未选择'}
            </div>
        </div>

    );
};

const dataSource = [{
    id: 1,
    name: 'Apple1',
    price: '$5',
    amount: 11
}, {
    id: 2,
    name: 'Apple2',
    price: '$6',
    amount: 12
}, {
    id: 3,
    name: 'Apple3',
    price: '$7',
    amount: 13
}, {
    id: 4,
    name: 'Apple4',
    price: '$8',
    amount: 14
}, {
    id: 5,
    name: 'Apple5',
    price: '$10',
    amount: 15
}]

const columns = [
    {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: '总数',
        dataIndex: 'amount',
        key: 'amount',
    },
];

class Home extends Component {

    render() {

        return (
            <div>
                <Button loading type='primary'>Sith Lord</Button>
                <Table dataSource={dataSource} columns={columns} />;
                <App></App>
            </div>
        )
    }
}
export default Home
