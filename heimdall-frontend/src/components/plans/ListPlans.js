import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { Modal, Row, Table, Divider, Tag, Tooltip, Button, Pagination } from 'antd';

const confirm = Modal.confirm;
const { Column } = Table;

class ListPlans extends Component {

    showDeleteConfirm = (planId) => (e) => {
        confirm({
            title: 'Are you sure?',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk: () => {
                this.props.handleDelete(planId)
            }
        });
    }

    render() {
        const { dataSource } = this.props
        const { loading } = this.props
        return (
            <div>
                <Table dataSource={dataSource.content} rowKey={record => record.id} loading={loading} pagination={false}>
                    <Column title="ID" dataIndex="id" id="id" />
                    <Column title="Name" dataIndex="name" id="name" />
                    <Column title="Description" dataIndex="description" id="description" />
                    <Column title="API" dataIndex="api.name" id="apiName" />
                    <Column title="Status" id="status" key="status" render={(record) => (
                        <span>
                            {record.status === 'ACTIVE' && <Tag color="green">{record.status}</Tag>}
                            {record.status === 'INACTIVE' && <Tag color="red">{record.status}</Tag>}
                        </span>
                    )} />
                    <Column
                        id="action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <Tooltip title="Edit">
                                    <Link to={"/plans/" + record.id}><Button type="primary" icon="edit" /></Link>
                                </Tooltip>
                                <Divider type="vertical" />
                                <Tooltip title="Delete">
                                    <Button type="danger" icon="delete" onClick={this.showDeleteConfirm(record.id)} />
                                </Tooltip>
                            </span>
                        )}
                    />
                </Table>
                <Row type="flex" justify="center" className="h-row">
                    <Pagination total={dataSource.totalElements} onChange={this.props.handlePagination} />
                </Row>
            </div>
        )
    }
}

ListPlans.propTypes = {
    dataSource: PropTypes.object.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handlePagination: PropTypes.func.isRequired
}

//used to prototype the table component
ListPlans.defaultProps = {
    dataSource:
    [
        {
          "api": {
            "basePath": "/base/path",
            "description": "description",
            "id": 1,
            "name": "default name",
            "status": "ACTIVE"
          },
          "creationDate": "2018-03-27T17:55:45.329Z",
          "description": "Some description",
          "id": 1,
          "name": "Some plan",
          "status": "ACTIVE"
        }
      ]
}

export default ListPlans