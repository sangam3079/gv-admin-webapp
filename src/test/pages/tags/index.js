import React from 'react'
import { Helmet } from 'react-helmet'
import TagsTable from '../../widgets/Tags'
import NavBar from '../../widgets/Tags/nav'

const Tags = () => {
  return (
    <div>
      <Helmet title="Tags" />
      <div />
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <TagsTable/>
            </div>
            <div className="card-body">
              <TagsTable />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12"></div>
      </div>
      

    </div>
      
  
  )
}

export default Tags
