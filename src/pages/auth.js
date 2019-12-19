import LoginImage from "../resources/img/seo/login.png";

export default [
  {
    path: "/login",
    exact: true,
    component: () => import("../components/login"),
    seo: {
      title: "Auth | Mosquiteer",
      description:
        "Implementing Auth with ReactPWA is simple. Check out this fake auth example for more details",
      image: LoginImage
    }
  },
  {
    path: "/logout",
    exact: true,
    component: () => import("../components/logout"),
    seo: {
      title: "Logging out..."
    }
  },
  {
    path: "/visualization",
    exact: true,
    component: () => import("../components/visualization"),
    seo: {
      title: "Breeding| Mosquiteer"
    }
  },
  {
    path: "/diseaseBreakout",
    exact: true,
    component: () => import("../components/diseaseBreakout"),
    seo: {
      title: "Disease Breakout | Mosquiteer"
    }
  },
  {
    path: "/dashboard",
    exact: true,
    component: () => import("../components/dashboard"),
    seo: {
      title: "User dashboard | Mosquiteer"
    }
  },
  {
    path: '/getlocation',
    exact: true,
    component: () => import('../components/GetLocation'),
    seo: {
        title: 'Location | Mosquiteer',
    },
}, 
  {
    path: "/MosquitoBreeding",
    exact: true,
    component: () => import("../components/MosquitoBreeding"),
    seo: {
      title: "Report | Mosquiteer"
    }
  },
  {
    path: "/Pictures",
    exact: true,
    component: () => import("../components/MosquitoBreeding"),
    seo: {
      title: "Pictures | Mosquiteer"
    }
  },
  {
    path: "/Location",
    exact: true,
    component: () => import("../components/MosquitoBreeding"),
    seo: {
      title: "Location | Mosquiteer"
    }
  },{
    path: "/Details",
    exact: true,
    component: () => import("../components/MosquitoBreeding"),
    seo: {
      title: "Details | Mosquiteer"
    }
  },
  {
    path: "/submit",
    exact: true,
    component: () => import("../components/Details"),
    seo: {
      title: "User dashboard | Mosquiteer"
    }
  },
  {
    path: "/articledata",
    exact: true,
    component: () => import("../components/articledata"),
    seo: {
      title: "Articles | Mosquiteer"
    }
  }
];
