import React from 'react'
import { Helmet } from 'react-helmet'
import HeadersCardHeaderTabbed3 from 'widgets/AdminDashboard/Headers/CardHeaderTabbed3'
import WidgetsGeneral2v1 from 'widgets/AdminDashboard/WidgetsGeneral/2v1'
import WidgetsCharts11 from 'widgets/AdminDashboard/WidgetsCharts/11'
import WidgetsGeneral12 from 'widgets/AdminDashboard/WidgetsGeneral/12'
import HeadersHeading from 'widgets/AdminDashboard/Headers/Heading'
import WidgetsCharts4v1 from 'widgets/AdminDashboard/WidgetsCharts/4v1'
import WidgetsCharts4v3 from 'widgets/AdminDashboard/WidgetsCharts/4v3'
import WidgetsCharts4 from 'widgets/AdminDashboard/WidgetsCharts/4'
import HeadersCardHeader3 from 'widgets/AdminDashboard/Headers/CardHeader3'
import TablesAntd3 from 'widgets/AdminDashboard/TablesAntd/3'
import HeadersCardHeader from 'widgets/AdminDashboard/Headers/CardHeader'
import TablesAntd7 from 'widgets/AdminDashboard/TablesAntd/7'
import WidgetsTables2 from 'widgets/AdminDashboard/WidgetsTables/2'

const Dashboard = () => {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header py-0">
              <HeadersCardHeaderTabbed3 data={{ title: 'Good Vibes-Admin Dashboard' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <WidgetsGeneral2v1 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <WidgetsCharts11 />
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <WidgetsGeneral12 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card-placeholder">
            <div className="card-header">
              <HeadersHeading data={{ title: 'Growth Chart' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <WidgetsCharts4v1 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <WidgetsCharts4v3 />
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <div className="card">
            <div className="card-body">
              <WidgetsCharts4 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header py-0">
              <HeadersCardHeader3 data={{ title: 'ACTIVE CUSTOMERS' }} />
            </div>
            <div className="card-body">
              <TablesAntd3 />
            </div>
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'POPULAR TRACKS' }} />
            </div>
            <div className="card-body">
              <TablesAntd7 />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12">
          <div className="card">
            <div className="card-header">
              <HeadersCardHeader data={{ title: 'Activity Logs' }} />
            </div>
            <div className="card-body">
              <WidgetsTables2 />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12"></div>
      </div>
    </div>
  )
}

export default Dashboard
