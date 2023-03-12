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
      title: 'Rooms',
      icon: 'mdi:door',
      children: [
        {
          title: 'View rooms',
          path: '/rooms'
        },
        {
          title: 'Add room',
          path: '/rooms/add'
        },
      ]
    },
    {
      title: 'Offices/Clinics',
      icon: 'mdi:chair-rolling',
    },
    {
        title: 'View Tenants',
        icon: 'mdi:plus-box',
        path: '/tenants'
    },
    {
      title: 'View Contracts',
      icon: 'mdi:file-document-edit',
      path: '/contracts'
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      icon: 'mdi:shield-outline',
      title: 'Generate Report'
    }
  ]
}

export default navigation
