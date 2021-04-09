import React from 'react'
import { Helmet } from 'react-helmet'
import GenreTable from '../../widgets/Genre'
import NavBar from '../../widgets/Genre/nav'

const Genre = () => {
  return (
    <div>
      <Helmet title="Genre" />
      <div />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <NavBar/>
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
