import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import {
  faBars,
  faSearch,
  faBell,
  faChartLine,
  faUser,
  faMoneyBill,
  faCog
} from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-regular-svg-icons'

export function faInit() {
  library.add({
    // Solid icons
    faBars,
    faSearch,
    faBell,
    faChartLine,
    faUser,
    faMoneyBill,
    faCog
  })

  Vue.component('fa-icon', FontAwesomeIcon)
}
