import * as React from 'react';
import {
  withRouter,
  match as Match,
  RouteComponentProps,
} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { loadInitialProps } from './loadInitialProps';
import { History, Location } from 'history';
import { AsyncRouteProps, ServerAppState, InitialData } from './types';
import { get404Component, getAllRoutes } from './utils';

export interface AfterpartyProps extends RouteComponentProps<any> {
  history: History;
  location: Location;
  data: ServerAppState;
  routes: AsyncRouteProps[];
  match: Match<any>;
}

export interface AfterpartyState {
  data?: InitialData;
  previousLocation: Location | null;
  currentLocation: Location | null;
}

class Afterparty extends React.Component<AfterpartyProps, AfterpartyState> {
  prefetcherCache: any;
  NotfoundComponent:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;

  constructor(props: AfterpartyProps) {
    super(props);

    this.state = {
      data: props.data.initialData,
      previousLocation: null,
      currentLocation: props.location,
    };

    this.prefetcherCache = {};
    this.NotfoundComponent = get404Component(props.routes);
  }

  static getDerivedStateFromProps(
    props: AfterpartyProps,
    state: AfterpartyState
  ) {
    const currentLocation = props.location;
    const previousLocation = state.currentLocation;

    const navigated = currentLocation !== previousLocation;
    if (navigated) {
      return {
        previousLocation: state.previousLocation || previousLocation,
        currentLocation,
      };
    }

    return null;
  }

  componentDidUpdate(_prevProps: AfterpartyProps, prevState: AfterpartyState) {
    const navigated = prevState.currentLocation !== this.state.currentLocation;
    if (navigated) {
      const {
        location,
        history,
        routes,
        data,
        // we don't want to pass these
        // to loadInitialProps()
        match,
        staticContext,
        children,
        ...rest
      } = this.props;

      const { scrollToTop } = data.afterData;

      loadInitialProps(routes, location.pathname, {
        location,
        history,
        scrollToTop,
        ...rest,
      })
        .then(({ data }) => {
          if (this.state.currentLocation !== location) return;

          // Only for page changes, prevent scroll up for anchor links
          if (
            (prevState.previousLocation &&
              prevState.previousLocation.pathname) !== location.pathname &&
            // Only Scroll if scrollToTop is not false
            this.props.data.afterData.scrollToTop.current
          ) {
            window.scrollTo(0, 0);
          }
          this.setState({ previousLocation: null, data });
        })
        .catch(e => {
          // @todo we should more cleverly handle errors???
          console.log(e);
        });
    }
  }

  prefetch = (pathname: string) => {
    loadInitialProps(this.props.routes, pathname, {
      history: this.props.history,
    })
      .then(({ data }) => {
        this.prefetcherCache = {
          ...this.prefetcherCache,
          [pathname]: data,
        };
      })
      .catch(e => console.log(e));
  };

  render() {
    const { previousLocation, data } = this.state;
    const { location: currentLocation } = this.props;
    const initialData = this.prefetcherCache[currentLocation.pathname] || data;

    const location = previousLocation || currentLocation;

    const routes = getAllRoutes(this.props.routes);

    initialData &&
      initialData.statusCode &&
      initialData.statusCode === 404 &&
      routes.unshift({
        component: this.NotfoundComponent,
        path: location.pathname,
      });

    return renderRoutes(
      getAllRoutes(this.props.routes),
      {
        ...initialData,
        prefetch: this.prefetch,
      },
      { location }
    );
  }
}
export const After = withRouter(Afterparty);
