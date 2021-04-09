import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import TracksTable from '../../widgets/Tracks'
import NavBar from '../../widgets/Tracks/nav'

const Tracks = () => {
  return (
    <div>
      <Helmet title="Tracks" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Tracks' }} />
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
              <TracksTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tracks
