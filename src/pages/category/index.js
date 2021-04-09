import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import CategoryTable from '../../widgets/Category'
import NavBar from '../../widgets/Category/nav'

const Category = () => {
  return (
    <div>
      <Helmet title="Category" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Categories' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <NavBar />
          </div>
          <div className="card">
            <div className="card-body">
              <CategoryTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category
