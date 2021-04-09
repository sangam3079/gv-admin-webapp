import React from 'react'
import { Helmet } from 'react-helmet'
import CustomerTable from 'widgets/Customers'
import NavBar from 'widgets/Customers/nav'

const Customers = () => {
  return (
    <div>
      <Helmet title="Customers" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <NavBar/>
          </div>
          <div className="card">
            <div className="card-body">
              <CustomerTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers
