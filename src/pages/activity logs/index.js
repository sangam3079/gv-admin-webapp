import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import HeadersCardHeader3 from '@vb/widgets/Headers/CardHeader3'
import TablesAntd9 from '@vb/widgets/TablesAntd/9'

const ActivityLogs = () => {
  return (
    <div>
      <Helmet title="Activity Logs" />
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
        <div className="col-lg-6 col-md-12">
          <div className="card card-top">
            <div className="card-header py-0">
              <HeadersCardHeader3 data={{ title: 'Generic Logs' }} />
            </div>
            <div className="card-body">
              <TablesAntd9 />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="card card-top">
            <div className="card-header py-0">
              <HeadersCardHeader3 data={{ title: 'Subscription Logs' }} />
            </div>
            <div className="card-body">
              <TablesAntd9 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityLogs
