import React from 'react'
import { Helmet } from 'react-helmet'
import CategoryTable from '../../widgets/Category'
import NavBar from '../../widgets/Category/nav'

const Category = () => {
  return (
    <div>
      <Helmet title="Category" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <NavBar />
          </div>
          <div className="card">
            <div className="card-body">
              <CategoryTable />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  )
}

export default Category
