import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from 'widgets/Headers/CardHeader'
import GenreTable from '../../widgets/Genre'
import NavBar from '../../widgets/Genre/nav'

const Genre = () => {
  return (
    <div>
      <Helmet title="Genre" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Genre' }} />
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
              <GenreTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Genre
