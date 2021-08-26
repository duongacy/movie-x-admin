import React, { useState, useContext } from 'react';
import { Table, Popconfirm, Form, Typography } from 'antd';
import { AdminContext } from '../../contexts/AdminContext';
import { EditableCell } from '../../components/EditTableCell';

interface Item {
    key: string;
    name: string;
    age: number;
    address: string;
}

const originData: Item[] = [];
for (let i = 0; i < 100; i++) {
    originData.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`,
    });
}

const ShowtimeManagement = () => {
    const { getColumnSearchProps, editFeature } = useContext(AdminContext);
    const { editingKey, isEditing, cancel, save, form, edit } = editFeature;

    const [data, setData] = useState(originData);

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            width: '25%',
            editable: true,
            ...getColumnSearchProps('name'),
        },
        {
            title: 'age',
            dataIndex: 'age',
            width: '15%',
            editable: true,
        },
        {
            title: 'address',
            dataIndex: 'address',
            width: '40%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return (
                    <>
                        {editable ? (
                            <span>
                                <a
                                    href="javascript:;"
                                    onClick={() => save(record.key, data, setData)}
                                    style={{ marginRight: 8 }}
                                >
                                    Save
                                </a>
                                <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                                    <a>Cancel</a>
                                </Popconfirm>
                            </span>
                        ) : (
                            <>
                                <Typography.Link
                                    disabled={editingKey !== ''}
                                    onClick={() => edit(record)}
                                >
                                    Edit
                                </Typography.Link>
                                <Popconfirm
                                    title="Sure to Delete?"
                                    onConfirm={() => {
                                        console.log('Ban da delete');
                                    }}
                                    className="ml-1"
                                >
                                    <a style={{ color: 'red' }}>Delete</a>
                                </Popconfirm>
                            </>
                        )}
                    </>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <Form form={form} component={false}>
            <Table
                components={{
                    body: {
                        cell: EditableCell,
                    },
                }}
                bordered
                dataSource={data}
                columns={mergedColumns}
                rowClassName="editable-row"
                pagination={{
                    onChange: cancel,
                }}
            />
        </Form>
    );
};

export default ShowtimeManagement;
