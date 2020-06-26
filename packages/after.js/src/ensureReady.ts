import { matchRoutes, MatchedRoute } from 'react-router-config';
import { AsyncRouteProps } from './types';
import { isLoadableComponent } from './utils';

/**
 * This helps us to make sure all the async code is loaded before rendering.
 */
export async function ensureReady(
  routes: AsyncRouteProps[],
  pathname?: string
) {
  const matchedRoutes = matchRoutes(
    routes,
    pathname || window.location.pathname
  );
  await Promise.all(
    matchedRoutes.map(({ route }: MatchedRoute<{}>) => {
      if (
        route.component &&
        isLoadableComponent(route.component) &&
        route.component.load
      ) {
        return route.component.load();
      }
      return undefined;
    })
  );

  return Promise.resolve(
    (window as any).__SERVER_APP_STATE__ as Promise<any>[]
  );
}
