import GuestRoutes from './pages/guest';
import AuthRoutes from './pages/auth';
import SplashScreen from './pages/splash';

import MosquiteerIcon from "./resources/img/mosquiteer.png";
import MosquiteerIcon512 from "./resources/img/mosquiteer-512x512.png";

export default class Routes {
  // eslint-disable-next-line
  apply(routeHandler) {
    const routes = [
      ...GuestRoutes,
      ...AuthRoutes,
      ...SplashScreen,
    ];

    routeHandler.setPwaSchema({
      "name": "Mosquiteer",
      "short_name": "MQ",

      // Possible values ltr(left to right)/rtl(right to left) #optional
      "dir": "ltr",

      // language: Default en-US #optional
      "lang": "en-US",
      "background_color":'green',
      "icons": [
            {
              "src": MosquiteerIcon,
              "sizes": "192x192"
            },
            {
              "src":MosquiteerIcon512,
              "sizes":"512x512"
            }
            // You may add more size if you want to, but it is optional
          ]
    });

    routeHandler.hooks.initRoutes.tapPromise('AppRoutes', async () => {
      routeHandler.addRoutes(routes);
    });
  }
}
