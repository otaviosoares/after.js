import * as React from 'react';
import { RouteConfigComponentProps } from 'react-router-config';
import { Module, AsyncRouteComponentState, Ctx } from './types';
/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
export declare function asyncComponent<Props>({ loader, Placeholder, chunkName, }: {
    loader: () => Promise<Module<React.ComponentType<Props>>>;
    Placeholder?: React.ComponentType<RouteConfigComponentProps<Props>>;
    chunkName?: string;
}): {
    new (props: Readonly<RouteConfigComponentProps<Props>>): {
        state: {
            Component: (React.ComponentClass<RouteConfigComponentProps<Props>, any> & import("./types").AsyncComponent) | (React.FunctionComponent<RouteConfigComponentProps<Props>> & import("./types").AsyncComponent) | null;
        };
        componentDidMount(): void;
        updateState: () => void;
        render(): JSX.Element | null;
        context: any;
        setState<K extends "Component">(state: AsyncRouteComponentState | ((prevState: Readonly<AsyncRouteComponentState>, props: Readonly<RouteConfigComponentProps<Props>>) => AsyncRouteComponentState | Pick<AsyncRouteComponentState, K> | null) | Pick<AsyncRouteComponentState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<RouteConfigComponentProps<Props>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<RouteConfigComponentProps<Props>>, prevState: Readonly<AsyncRouteComponentState>): any;
        componentDidUpdate?(prevProps: Readonly<RouteConfigComponentProps<Props>>, prevState: Readonly<AsyncRouteComponentState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
    };
    new (props: RouteConfigComponentProps<Props>, context?: any): {
        state: {
            Component: (React.ComponentClass<RouteConfigComponentProps<Props>, any> & import("./types").AsyncComponent) | (React.FunctionComponent<RouteConfigComponentProps<Props>> & import("./types").AsyncComponent) | null;
        };
        componentDidMount(): void;
        updateState: () => void;
        render(): JSX.Element | null;
        context: any;
        setState<K extends "Component">(state: AsyncRouteComponentState | ((prevState: Readonly<AsyncRouteComponentState>, props: Readonly<RouteConfigComponentProps<Props>>) => AsyncRouteComponentState | Pick<AsyncRouteComponentState, K> | null) | Pick<AsyncRouteComponentState, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callback?: (() => void) | undefined): void;
        readonly props: Readonly<RouteConfigComponentProps<Props>> & Readonly<{
            children?: React.ReactNode;
        }>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        shouldComponentUpdate?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<RouteConfigComponentProps<Props>>, prevState: Readonly<AsyncRouteComponentState>): any;
        componentDidUpdate?(prevProps: Readonly<RouteConfigComponentProps<Props>>, prevState: Readonly<AsyncRouteComponentState>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<RouteConfigComponentProps<Props>>, nextState: Readonly<AsyncRouteComponentState>, nextContext: any): void;
    };
    /**
     * Static so that you can call load against an uninstantiated version of
     * this component. This should only be called one time outside of the
     * normal render path.
     */
    load(): Promise<void>;
    getChunkName(): string | undefined;
    getInitialProps(ctx: Ctx<any>): any;
    contextType?: React.Context<any> | undefined;
};
