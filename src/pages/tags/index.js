import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeader from '@vb/widgets/Headers/CardHeader'
import HeadersHeading from '@vb/widgets/Headers/Heading'
import TablesAntd3 from '@vb/widgets/TablesAntd/3'
import WidgetsTables3 from '@vb/widgets/WidgetsTables/3'
import NavBar from '../../widgets/Tags/nav'
import TagsTable from '../../widgets/Tags'
import TagsGroupNavBar from '../../widgets/Tags Group/nav'
import TagsGroupTable from '../../widgets/Tags Group'

const Tags = () => {
  return (
    <div>
      <Helmet title="Tags" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Tags' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12"></div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <HeadersHeading data={{ title: 'TAGS ' }} />
            </div>
            <div className="card-placeholder"></div>
            <div className="card-placeholder"><NavBar/></div>
            <div className="card">
              <div className="card-body">
                <TagsTable />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="card">
            <div className="card-header">
              <HeadersHeading data={{ title: 'TAGS GROUP' }} />
            </div>
            <div className="card-placeholder"></div>
            <div className="card-placeholder"><TagsGroupNavBar/></div>
            <div className="card">
              <div className="card-body">
                <TagsGroupTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags
