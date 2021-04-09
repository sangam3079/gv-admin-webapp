import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from 'widgets/Headers/CardHeader'
import CustomerTable from 'widgets/Customers'
import NavBar from 'widgets/Customers/nav'

const Customers = () => {
  return (
    <div>
      <Helmet title="Customers" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Customers' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 ">
          <div className="card-placeholder">
            <div className="card-body">
              <NavBar />
            </div>
          </div>
        </div>
        
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <CustomerTable/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Customers
