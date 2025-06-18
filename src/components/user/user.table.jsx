import { Space, Table, Tag } from 'antd';
import { useState } from 'react';
import { fetchUserApi } from '../../services/api.service';


const UserTable = () => {
    const [dataSource, setDataUser] = useState([
        { _id: 1, fullName: "TieuDing", email: "tieuding@gmail.com" },
        { _id: 2, fullName: "TieuDing1", email: "tieuding1@gmail.com" }
    ])

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        }
    ];

    const loadUser = async () => {
        const res = await fetchUserApi()
    }

    loadUser()
    console.log(">>> run render")

    return (
        <Table columns={columns} dataSource={dataSource} />
    )
}

export default UserTable