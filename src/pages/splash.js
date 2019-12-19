import SplashImage from '../resources/img/seo/home-splash-screen.png';

export default [
  {
    path: '/',
    exact: true,
    component: () => import('../components/splash'),
    seo: {
      title: 'Mosquiteer',
      description: 'Report and check mosquito breeding grounds near you.',
      image: SplashImage,
    },
  },
];
