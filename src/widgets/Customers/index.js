import React  from 'react'
import { Table} from 'antd'
import data from './data.json'



const columns = [

  
  {
    title: 'Full Name',
    dataIndex: 'fullname',
    key: 'fullname',
    render: (text) => (
      <a className="btn btn-sm btn-light" href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.id - b.id,
  },
  
  {
    title:'Email',
    dataIndex:'email',
    key:'email'
  },
  {
    title:'Plan',
    dataIndex:'plan',
    key:'plan'
  },
  {
    title:'Country',
    dataIndex:'country',
    key:'country'
  },
  {
    title:'Last Active',
    dataIndex:'last active',
    key:'last active'
  },
  {
    title:'Device',
    dataIndex:'device',
    key:'device',
    filters: [
      { text: 'android', value:'android'},
      { text: 'iphone', value:'iphone'},
    ],
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
    title:'Activated',
    dataIndex:'activated',
    key:'activated'
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


const CustomerTable = () => {
  return (
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} />
      </div>
  )
}

export default CustomerTable
