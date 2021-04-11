import React, { lazy, Suspense } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import Layout from 'layouts'


const routes = [
  // VB:REPLACE-START:ROUTER-CONFIG
  {
    path: '/admin dashboard',
    Component: lazy(() => import('pages/admin dashboard')),
    exact: true,
  },
  {
    path: '/customers',
    Component: lazy(() => import('pages/customers')),
    exact: true,
  },
  {
    path: '/tracks',
    Component: lazy(() => import('pages/tracks')),
    exact: true,
  },
  {
    path: '/category',
    Component: lazy(() => import('pages/category')),
    exact: true,
  },
  {
    path: '/genre',
    Component: lazy(() => import('pages/genre')),
    exact: true,
  },
  {
    path: '/tags',
    Component: lazy(() => import('pages/tags')),
    exact: true,
  },
  {
    path: '/playlist',
    Component: lazy(() => import('pages/playlist')),
    exact: true,
  },
  {
    path: '/subscription',
    Component: lazy(() => import('pages/subscription')),
    exact: true,
  },
  {
    path: '/promos',
    Component: lazy(() => import('pages/promos')),
    exact: true,
  },
  {
    path: '/campaign',
    Component: lazy(() => import('pages/campaign')),
    exact: true,
  },
  {
    path: '/download',
    Component: lazy(() => import('pages/download')),
    exact: true,
  },
  {
    path: '/activity logs',
    Component: lazy(() => import('pages/activity logs')),
    exact: true,
  },
  {
    path: '/customers/addNewCustomer',
    Component: lazy(() => import('pages/AddNewCustomer')),
    exact: true,
  },
  
  // VB:REPLACE-END:ROUTER-CONFIG
  {
    path: '/auth/login',
    Component: lazy(() => import('pages/auth/login')),
    exact: true,
  },
  {
    path: '/auth/forgot-password',
    Component: lazy(() => import('pages/auth/forgot-password')),
    exact: true,
  },
  {
    path: '/auth/register',
    Component: lazy(() => import('pages/auth/register')),
    exact: true,
  },
  {
    path: '/auth/lockscreen',
    Component: lazy(() => import('pages/auth/lockscreen')),
    exact: true,
  },
  {
    path: '/auth/404',
    Component: lazy(() => import('pages/auth/404')),
    exact: true,
  },
  {
    path: '/auth/500',
    Component: lazy(() => import('pages/auth/500')),
    exact: true,
  },
]

const mapStateToProps = ({ settings }) => ({
  routerAnimation: settings.routerAnimation,
})

const Router = ({ history, routerAnimation }) => {
  return (
    <ConnectedRouter history={history}>
      <Layout>
        <Route
          render={(state) => {
            const { location } = state
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.pathname}
                  appear
                  classNames={routerAnimation}
                  timeout={routerAnimation === 'none' ? 0 : 300}
                >
                  <Switch location={location}>
                    {/* VB:REPLACE-NEXT-LINE:ROUTER-REDIRECT */}
                    <Route exact path="/" render={() => <Redirect to="/admin dashboard" />} />
                    {routes.map(({ path, Component, exact }) => (
                      <Route
                        path={path}
                        key={path}
                        exact={exact}
                        render={() => {
                          return (
                            <div className={routerAnimation}>
                              <Suspense fallback={null}>
                                <Component />
                              </Suspense>
                            </div>
                          )
                        }}
                      />
                    ))}
                    <Redirect to="/auth/404" />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            )
          }}
        />
      </Layout>
    </ConnectedRouter>
  )
}

export default connect(mapStateToProps)(Router)
