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

// importing protecting routes components
import Protected from './ProtectedRoutes';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <Protected>
      <MainLayout />
    </Protected>
  ),
  children: [
    {
      path: '/',
      element: (
        <Protected>
          <DashboardDefault />
        </Protected>
      )
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: (
            <Protected>
              <DashboardDefault />
            </Protected>
          )
        }
      ]
    },
    // users routes
    {
      path: 'users',
      children: [
        {
          path: 'users',
          element: (
            <Protected>
              <UsersListing />
            </Protected>
          )
        }
      ]
    },
    // sounds routes
    {
      path: 'sounds',
      children: [
        {
          path: 'sounds',
          element: (
            <Protected>
              <SoundsListing />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'sounds',
      children: [
        {
          path: 'add-sound',
          element: (
            <Protected>
              <AddSound />
            </Protected>
          )
        }
      ]
    },
    // plans routes
    {
      path: 'plans',
      children: [
        {
          path: 'plans',
          element: (
            <Protected>
              <PlansListing />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'plans',
      children: [
        {
          path: 'add-plan',
          element: (
            <Protected>
              <AddPlan />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'plans',
      children: [
        {
          path: 'categories',
          element: (
            <Protected>
              <PlansCategoryListing />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'plans',
      children: [
        {
          path: 'add-category',
          element: (
            <Protected>
              <AddPlanCategory />
            </Protected>
          )
        }
      ]
    },
    // utils routes
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: (
            <Protected>
              <UtilsTypography />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: (
            <Protected>
              <UtilsColor />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: (
            <Protected>
              <UtilsShadow />
            </Protected>
          )
        }
      ]
    },
    // icons routes
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: (
            <Protected>
              <UtilsTablerIcons />
            </Protected>
          )
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: (
            <Protected>
              <UtilsMaterialIcons />
            </Protected>
          )
        }
      ]
    },
    // sample pages routes
    {
      path: 'sample-page',
      element: (
        <Protected>
          <SamplePage />
        </Protected>
      )
    }
  ]
};

export default MainRoutes;
