import React from 'react'
import { Table} from 'antd'
import data from './data.json'




const columns = [

  {
    title:'Tag',
    dataIndex:'tag',
    key:'tag'
  },
  {
    title:'Tag Group',
    dataIndex:'tag group',
    key:'tag group'
  },
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-light mr-2">
          <i className="fe fe-edit mr-2" />
          
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-light">
          <small>
            <i className="fe fe-trash mr-2" />
          </small>
          
        </a>
      </span>
    ),
  },
]


const TagsTable = () => {
  return (
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} />
      </div>
  )
}

export default TagsTable