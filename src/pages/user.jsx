import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchUserApi } from '../services/api.service';

const UserPage = () => {
    const [dataUsers, setDataUsers] = useState([])

    useEffect(() => {
        console.log(">>> run effect 111")
        loadUser()
    }, [])

    const loadUser = async () => {
        const res = await fetchUserApi()
        setDataUsers(res.data)
    }

    return (
        <div style={{ padding: "20px" }}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers} />
        </div>
    )
}

export default UserPage