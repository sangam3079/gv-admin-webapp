import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import TablesAntd5 from '@vb/widgets/TablesAntd/5'

const Download = () => {
  return (
    <div>
      <Helmet title="Download" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Basic Header' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder"></div>
          <div className="card">
            <div className="card-body">
              <TablesAntd5 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download
