import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchUserApi } from '../../services/api.service';


const UserTable = () => {
    const [dataUsers, setDataUsers] = useState([
        { _id: 1, fullName: "TieuDing", email: "tieuding@gmail.com" },
        { _id: 2, fullName: "TieuDing1", email: "tieuding1@gmail.com" }
    ])

    useEffect(() => {
        console.log(">>> run effect 111")
        loadUser()
    }, [])

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
        setDataUsers(res.data)
    }


    console.log(">>> run render 000")

    return (
        <Table
            columns={columns}
            dataSource={dataUsers}
            rowKey={"_id"}
        />
    )
}

export default UserTable