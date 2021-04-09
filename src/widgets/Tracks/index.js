import React from 'react'
import { Table} from 'antd'
import data from './data.json'
import './TracksPage.scss'




const columns = [

  {
    title:'Image',
    dataIndex:'image',
    key:'image'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (text) => (
      <a className="btn btn-sm btn-light" href="#" onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
    sorter: (a, b) => a.id - b.id,
  },
  
  {
    
    title:'Stats',
    dataIndex:'stats',
    key:'stats',
    
    
  },
  {
    title:'Duration',
    dataIndex:'duration',
    key:'duration'
  },
  {
    title:'Genre',
    dataIndex:'genre',
    key:'genre'
  },
  {
    title:'Category',
    dataIndex:'category',
    key:'category',
  },
  {
    title:'Listed',
    dataIndex:'listed',
    key:'listed',
    filters: [
      { text: 'yes', value: 'yes' },
      { text: 'no', value: 'no' },
    ],
   // filteredValue: filteredInfo.listed || null,
   // onFilter: (value, record) => record.listed.includes(value),
   // sorter: (a, b) => a.address.length - b.listed.length,
    //sortOrder: sortedInfo.columnKey === 'listed' && sortedInfo.order,
    
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


const TracksTable = () => {
  return (
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} />
      </div>
  )
}

export default TracksTable

