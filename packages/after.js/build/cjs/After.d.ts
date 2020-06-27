import * as React from 'react';
import { match as Match, RouteComponentProps } from 'react-router-dom';
import { History, Location } from 'history';
import { AsyncRouteProps, ServerAppState, InitialData } from './types';
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
declare class Afterparty extends React.Component<AfterpartyProps, AfterpartyState> {
    prefetcherCache: any;
    NotfoundComponent: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
    constructor(props: AfterpartyProps);
    static getDerivedStateFromProps(props: AfterpartyProps, state: AfterpartyState): {
        previousLocation: Location<History.PoorMansUnknown> | null;
        currentLocation: Location<History.PoorMansUnknown>;
    } | null;
    componentDidUpdate(_prevProps: AfterpartyProps, prevState: AfterpartyState): void;
    prefetch: (pathname: string) => void;
    render(): JSX.Element;
}
export declare const After: import("react").ComponentClass<Pick<AfterpartyProps, "data" | "routes">, any> & import("react-router").WithRouterStatics<typeof Afterparty>;
export {};
