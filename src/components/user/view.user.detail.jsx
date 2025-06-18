import { Drawer } from 'antd';

const ViewUserDetail = (props) => {
    const { dataDetail, setDataDetail, isDataOpen, setIsDataOpen } = props

    return (
        <Drawer
            title="Chi tiết User"
            onClose={() => {
                setDataDetail(null)
                setIsDataOpen(false)
            }}
            open={isDataOpen}
        >
            {dataDetail ? <>
                <p>Id: {dataDetail._id}</p>
                <br />
                <p>Full name: {dataDetail.fullName}</p>
                <br />
                <p>Email : {dataDetail.email}</p>
                <br />
                <p>Phone number: {dataDetail.phone}</p>
                <br />
            </> :
                <>
                    <p>Không có dữ liệu</p>
                </>}
        </Drawer>
    )
}

export default ViewUserDetail