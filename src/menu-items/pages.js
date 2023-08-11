// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'pages',
  title: 'Pages',
  caption: 'Pages Caption',
  type: 'group',
  children: [
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    },

    {
      id: 'users',
      title: 'Users',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'users',
          title: 'Users',
          type: 'item',
          url: '/users/users',
          target: false
        }
      ]
    },

    {
      id: 'sounds',
      title: 'Sounds',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'allsounds',
          title: 'Sounds',
          type: 'item',
          url: '/sounds/sounds',
          target: false
        },
        {
          id: 'add-sound',
          title: 'Add Sound',
          type: 'item',
          url: '/sounds/add-sound',
          target: false
        }
      ]
    },
    {
      id: 'plans',
      title: 'Plans',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'all-plans',
          title: 'Plans',
          type: 'item',
          url: '/plans/plans',
          target: false
        },
        {
          id: 'add-plan',
          title: 'Add Plan',
          type: 'item',
          url: '/plans/add-plan',
          target: false
        },
        {
          id: 'all-categories',
          title: 'Categories',
          type: 'item',
          url: '/plans/categories',
          target: false
        },
        {
          id: 'add-category',
          title: 'Add Category',
          type: 'item',
          url: '/plans/add-category',
          target: false
        }
      ]
    }
  ]
};

export default pages;
