import React  from 'react'
import { Table} from 'antd'
import data from './data.json'



const columns = [

  
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => (
      <a className="btn btn-sm btn-light" href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.id - b.id,
  },
  
  {
    title:'Genre',
    dataIndex:'genre',
    key:'genre'
  },
  {
    title:'Track Count',
    dataIndex:'track count',
    key:'track count'
  },
  
  {
    title: 'Created Date',
    dataIndex: 'date',
    key: 'date',
    render: (text) => (
      <a className="btn btn-sm btn-light" href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.date.key - b.date.key,
  },
  
  {
    title: 'Action',
    key: 'action',
    render: () => (
      <span>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-light mr-2">
          <i className="fe fe-edit mr-2" />
          view
        </a>
        <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-sm btn-light">
          <small>
            <i className="fe fe-trash mr-2" />
          </small>
          delete
        </a>
      </span>
    ),
  },
]


const CategoryTable = () => {
  return (
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} />
      </div>
  )
}

export default CategoryTable

