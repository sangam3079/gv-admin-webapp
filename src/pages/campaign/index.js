import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import TablesAntd2 from '@vb/widgets/TablesAntd/2'

const Campaign = () => {
  return (
    <div>
      <Helmet title="Campaign" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Campaign' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder"></div>
          <div className="card">
            <div className="card-body">
              <TablesAntd2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Campaign
