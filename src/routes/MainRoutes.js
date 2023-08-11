import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// users routing
const UsersListing = Loadable(lazy(() => import('views/pages/users/Users')));

// sound routing
const SoundsListing = Loadable(lazy(() => import('views/pages/sounds/Sounds')));
const AddSound = Loadable(lazy(() => import('views/pages/sounds/AddSound')));

// plan routing
const PlansListing = Loadable(lazy(() => import('views/pages/plans/Plans')));
const AddPlan = Loadable(lazy(() => import('views/pages/plans/AddPlans')));
const PlansCategoryListing = Loadable(lazy(() => import('views/pages/plans/Category')));
const AddPlanCategory = Loadable(lazy(() => import('views/pages/plans/AddCategory')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    // users routes
    {
      path: 'users',
      children: [
        {
          path: 'users',
          element: <UsersListing />
        }
      ]
    },
    // sounds routes
    {
      path: 'sounds',
      children: [
        {
          path: 'sounds',
          element: <SoundsListing />
        }
      ]
    },
    {
      path: 'sounds',
      children: [
        {
          path: 'add-sound',
          element: <AddSound />
        }
      ]
    },
    // plans routes
    {
      path: 'plans',
      children: [
        {
          path: 'plans',
          element: <PlansListing />
        }
      ]
    },
    {
      path: 'plans',
      children: [
        {
          path: 'add-plan',
          element: <AddPlan />
        }
      ]
    },
    {
      path: 'plans',
      children: [
        {
          path: 'categories',
          element: <PlansCategoryListing />
        }
      ]
    },
    {
      path: 'plans',
      children: [
        {
          path: 'add-category',
          element: <AddPlanCategory />
        }
      ]
    },
    // utils routes
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    // icons routes
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    // sample pages routes
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
