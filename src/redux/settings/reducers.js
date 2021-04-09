import store from 'store'
import actions from './actions'


const STORED_SETTINGS = (storedSettings) => {
  const settings = {}
  Object.keys(storedSettings).forEach((key) => {
    const item = store.get(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

const initialState = {
  ...STORED_SETTINGS({
    // Read docs for available values: https://docs.visualbuilder.cloud
    // VB:REPLACE-START:SETTINGS
    authProvider: 'jwt',
    logo: 'Good Vibes',
    version: 'fluent',
    theme: 'default',
    locale: 'en-US',
    isSidebarOpen: false,
    isSupportChatOpen: false,
    isMobileView: false,
    isMobileMenuOpen: false,
    isMenuCollapsed: false,
    isPreselectedOpen: false,
    preselectedVariant: 'waves',
    menuLayoutType: 'left',
    routerAnimation: 'slide-fadein-up',
    menuColor: 'white',
    authPagesColor: 'gray',
    isAuthTopbar: false,
    primaryColor: '#4b7cf3',
    leftMenuWidth: 256,
    isMenuUnfixed: false,
    isMenuShadow: true,
    isTopbarFixed: false,
    isTopbarSeparated: false,
    isGrayTopbar: false,
    isContentMaxWidth: false,
    isAppMaxWidth: false,
    isGrayBackground: true,
    isCardShadow: true,
    isSquaredBorders: false,
    isBorderless: true,
    layoutMenu: 'flyout',
    layoutTopbar: 'v1',
    layoutBreadcrumbs: 'v1',
    layoutFooter: 'noFooter',
    flyoutMenuType: 'flyout',
    flyoutMenuColor: 'gray',

    // VB:REPLACE-END:SETTINGS
  }),
}

export default function settingsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
