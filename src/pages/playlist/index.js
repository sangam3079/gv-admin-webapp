import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import TablesAntd9 from '@vb/widgets/TablesAntd/9'
import PlaylistsTable from '../../widgets/Playlists'
import NavBar from '../../widgets/Playlists/nav'

const Playlists = () => {
  return (
    <div>
      <Helmet title="Playlists" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Playlists' }} />
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
              <PlaylistsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Playlists
