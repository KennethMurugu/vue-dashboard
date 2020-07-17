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
  faCog,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export function faInit() {
  library.add({
    // Solid icons
    faBars,
    faSearch,
    faBell,
    faChartLine,
    faUser,
    faMoneyBill,
    faCog,
    faShoppingCart,
    // Brands
    faGithub,
    faTwitter
  })

  Vue.component('fa-icon', FontAwesomeIcon)
}
