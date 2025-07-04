import { DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Button, notification, Popconfirm, Table } from "antd"
import { useCallback, useEffect, useState } from "react"
import { deleteBookApi, fetchBookApi } from "../../services/api.service"
import BookDetail from "./book.detail"
import CreateBookControl from "./create.book.control"
import CreateBookUncontrol from "./create.book.uncontrol"
import UpdateBookControl from "./update.book.control"
import UpdateBookUncontrol from "./update.book.uncontrol"

const BookTable = () => {
    const [dataBooks, setDataBooks] = useState([])
    const [current, setCurrent] = useState([1])
    const [pageSize, setPageSize] = useState([5])
    const [total, setTotal] = useState([0])

    const [isDataOpen, setIsDataOpen] = useState(false)
    const [dataDetail, setDataDetail] = useState(null)

    const [isCreateOpen, setIsCreateOpen] = useState(false);

    const [dataUpdate, setDataUpdate] = useState(null);
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);

    const [loadingTable, setLoadingTable] = useState(false);

    const loadBook = useCallback(async () => {
        setLoadingTable(true)
        const res = await fetchBookApi(current, pageSize)
        if (res.data) {
            setDataBooks(res.data.result)
            setCurrent(res.data.meta.current)
            setPageSize(res.data.meta.pageSize)
            setTotal(res.data.meta.total)
        }
        setLoadingTable(false)
    }, [current, pageSize])

    useEffect(() => {
        loadBook()
    }, [loadBook])


    const handleDeleteBook = async (id) => {
        const res = await deleteBookApi(id)

        if (res.data) {
            notification.success({
                message: "Delete book",
                description: "Xóa book thành công"
            })
            await loadBook()
        } else {
            notification.error({
                message: "Error delete book",
                description: JSON.stringify(res.message)
            })
        }
    }

    const columns = [
        {
            title: 'STT',
            render: (_, record, index) => {
                return (
                    <>{(index + 1) + (current - 1) * pageSize}</>
                )
            }
        },
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <a
                    href="#"
                    onClick={() => {
                        setIsDataOpen(true)
                        setDataDetail(record)
                    }}
                >{record._id}</a>
            ),
        },
        {
            title: 'Tiêu đề',
            dataIndex: 'mainText',
        },
        {
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (text, record, index, action) => {
                if (text)
                    return new Intl.NumberFormat('vi-VN',
                        { style: 'currency', currency: 'VND' }).format(text)

            },
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
        },

        {
            title: 'Tác giả',
            dataIndex: 'author',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: '20px' }}>
                    <EditOutlined
                        onClick={() => {
                            setDataUpdate(record)
                            setIsModalUpdateOpen(true)
                        }}
                        style={{ cursor: 'pointer', color: 'orange' }}
                    />
                    <Popconfirm
                        title="Xóa người dùng"
                        description="Bạn chắc chắn xóa user này ?"
                        onConfirm={() => handleDeleteBook(record._id)}
                        okText="Yes"
                        cancelText="No"
                        placement="left"

                    >
                        <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
                    </Popconfirm>
                </div>
            ),
        },
    ]

    const onChange = (pagination) => {
        if (pagination && pagination.current) {
            if (+pagination.current !== +current) {
                setCurrent(+pagination.current)
            }
        }

        if (pagination && pagination.pageSize) {
            if (+pagination.pageSize !== +pageSize) {
                setPageSize(+pagination.pageSize)
            }
        }
    }

    return (
        <>
            <div style={{
                margin: '20px 0',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <h3>Table Books</h3>
                <Button
                    onClick={() => setIsCreateOpen(true)}
                    type="primary"
                > Create Book </Button>
            </div>

            <Table
                columns={columns}
                dataSource={dataBooks}
                rowKey={"_id"}
                pagination={
                    {
                        current: current,
                        pageSize: pageSize,
                        showSizeChanger: true,
                        total: total,
                        showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
                    }
                }
                onChange={onChange}
                loading={loadingTable}
            />

            <BookDetail
                isDataOpen={isDataOpen}
                setIsDataOpen={setIsDataOpen}
                dataDetail={dataDetail}
                setDataDetail={setDataDetail}
            />

            {/* <CreateBookControl
                isCreateOpen={isCreateOpen}
                setIsCreateOpen={setIsCreateOpen}
                loadBook={loadBook}
            /> */}

            <CreateBookUncontrol
                isCreateOpen={isCreateOpen}
                setIsCreateOpen={setIsCreateOpen}
                loadBook={loadBook}
            />

            {/* <UpdateBookControl
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                loadBook={loadBook}
            /> */}

            <UpdateBookUncontrol
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                loadBook={loadBook}
            />
        </>
    )
}

export default BookTable