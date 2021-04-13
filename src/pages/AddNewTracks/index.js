import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from 'widgets/Headers/CardHeader'
import AddNewForm from './AddNewForm'

const AddNewTrack = () => {
  return (
    <div>
      <Helmet title="AddNewCustomer" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Add New Customers' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <AddNewForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewTrack