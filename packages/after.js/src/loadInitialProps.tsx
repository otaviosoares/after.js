import { matchRoutes } from 'react-router-config';
import { AsyncRouteProps, InitialProps, CtxBase } from './types';
import { isAsyncComponent } from './utils';

export async function loadInitialProps(
  routes: AsyncRouteProps[],
  pathname: string,
  ctx: CtxBase
): Promise<InitialProps> {
  const promises: Promise<any>[] = [];

  const matchedRoutes = matchRoutes(routes, pathname);
  if (!matchedRoutes.length) return { data: [] };
  for (const matchedRoute of matchedRoutes) {
    const { match, route } = matchedRoute;
    if (route.component && isAsyncComponent(route.component)) {
      const component = route.component;

      promises.push(
        component.load
          ? component
              .load()
              .then(() => component.getInitialProps({ match, ...ctx }))
          : component.getInitialProps({ match, ...ctx })
      );
    }
  }

  const { match, route } = matchedRoutes[matchedRoutes.length - 1];

  return {
    match,
    route: route as AsyncRouteProps,
    data: (await Promise.all(promises))[matchedRoutes.length - 1],
  };
}
