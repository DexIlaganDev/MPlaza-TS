// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Overview',
      icon: 'mdi:home-variant',
      path: '/dashboards/overview'
    },

    {
        path: '/acl',
        action: 'read',
        subject: 'acl-page',
        icon: 'mdi:shield-outline',
        title: 'Generate Report'
    },
    {
      title: 'Rooms Summary',
      icon: 'mdi:account-outline',
      path: '/apps/user/list'
    },

    {
        title: 'View Doctors',
        icon: 'mdi:plus-box',
        path: '/apps/doctors/list'
    },
  ]
}

export default navigation
