import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import TablesAntd2 from '@vb/widgets/TablesAntd/2'
import ControlsButton from '@vb/widgets/Controls/Button'

const Subscription = () => {
  return (
    <div>
      <Helmet title="Subscription" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Subscriptions' }} />
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
            <div className="card-body">
              <ControlsButton data={{ title: 'Export', type: 'primary' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
