import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilHome,
  cilList,
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'
import {cilUser} from "@coreui/icons/js/free";

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Data User',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Detail User',
    to: '/user',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
]

export default _nav
