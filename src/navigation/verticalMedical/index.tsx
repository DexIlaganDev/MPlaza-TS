// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'Main'
    },
    {
      title: 'Overview',
      icon: 'mdi:home-variant',
      path: '/dashboards/overview'
    },
    {
        sectionTitle: 'Reports'
    },
    {
        path: '/acl',
        action: 'read',
        subject: 'acl-page',
        icon: 'mdi:shield-outline',
        title: 'Generate Report'
    },
    {
      sectionTitle: 'Rooms/Tenant Management'
    },
    {
      title: 'Rooms Summary',
      icon: 'mdi:account-outline',
      path: '/apps/user/list'
    },
    {
        sectionTitle: 'Doctors and Specialties'
    },
    {
        title: 'View Doctors',
        icon: 'mdi:plus-box',
        path: '/apps/doctors/list'
    },
  ]
}

export default navigation
