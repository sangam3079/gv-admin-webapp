import React from 'react'
import { Table} from 'antd'
import data from './data.json'




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
    title:'Description',
    dataIndex:'description',
    key:'description'
  },
  {
    title:'Playable count',
    dataIndex:'playable count',
    key:'playable count'
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


const GenreTable = () => {
  return (
      <div className="table-responsive text-nowrap">
        <Table columns={columns} dataSource={data} />
      </div>
  )
}

export default GenreTable