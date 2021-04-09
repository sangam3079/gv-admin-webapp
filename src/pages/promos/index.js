import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import HeadersCardHeaderTabbed from '@vb/widgets/Headers/CardHeaderTabbed'
import TablesAntd2 from '@vb/widgets/TablesAntd/2'

const Promos = () => {
  return (
    <div>
      <Helmet title="Promos" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Promos' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card-placeholder">
            <div className="card-header py-0">
              <HeadersCardHeaderTabbed data={{ title: '' }} />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12"></div>
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

export default Promos
