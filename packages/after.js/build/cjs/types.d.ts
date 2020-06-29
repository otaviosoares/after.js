/// <reference types="react" />
import { match as Match } from 'react-router-dom';
import { RouteConfig, RouteConfigComponentProps } from 'react-router-config';
import { HelmetData } from 'react-helmet';
import { Request, Response } from 'express';
import { History, Location } from 'history';
export interface CtxBase {
    req?: Request;
    res?: Response;
    history?: History;
    location?: Location;
    scrollToTop?: ScrollToTop;
}
export interface Ctx<P> extends CtxBase {
    match: Match<P>;
}
export interface AsyncComponent {
    getInitialProps: (props: Ctx<any>) => any;
    load?: () => Promise<React.ReactNode>;
    getChunkName: () => string | undefined;
}
export declare type AsyncRouteComponentType<Props> = React.ComponentType<RouteConfigComponentProps<Props>> & AsyncComponent;
/**
 * this type handles the component type in the route config object
 * {
 *   path: "/",
 *   exact: true,
 *   component: ReactComponent <- AsyncRouteableComponent
 * }
 */
export declare type AsyncRouteableComponent<Props = any> = React.ComponentType<RouteConfigComponentProps<Props>> | React.ComponentType<RouteConfigComponentProps> | React.ComponentType | AsyncRouteComponentType<RouteConfigComponentProps<Props>> | AsyncRouteComponentType<RouteConfigComponentProps>;
export interface AsyncRouteComponentState {
    Component: AsyncRouteableComponent | null;
}
export interface AsyncRouteProps<Props = any> extends RouteConfig {
    path?: string;
    Placeholder?: React.ComponentType<any>;
    component: AsyncRouteableComponent<Props>;
    redirectTo?: string;
}
export declare type ScrollToTop = React.RefObject<boolean>;
export declare type InitialData = Promise<unknown>[];
export interface ServerAppState {
    afterData: AfterClientData;
    initialData: InitialData;
}
export interface InitialProps {
    route?: AsyncRouteProps;
    match?: Match<{}>;
    data: InitialData;
}
export interface AfterClientData {
    scrollToTop: ScrollToTop;
}
export interface ServerAppState {
    afterData: AfterClientData;
    initialData: InitialData;
}
export interface RenderPageResult {
    html: string;
    helmet: HelmetData;
}
export interface DocumentgetInitialProps<T = RenderPageResult> {
    req: Request;
    res: Response;
    helmet: HelmetData;
    assets: Assets;
    data: ServerAppState;
    renderPage: () => Promise<T>;
    match: Match | undefined;
    scripts: string[];
    styles: string[];
    scrollToTop: ScrollToTop;
}
export declare type DocumentProps<T = RenderPageResult> = Omit<DocumentgetInitialProps<T>, 'req' | 'res' | 'renderPage' | 'scrollToTop'> & T;
export declare type AfterContext = DocumentProps;
export interface GetAssetsParams {
    chunks: Chunks;
    route?: AsyncRouteProps<any>;
}
export declare type Module<P> = {
    default?: P;
    [x: string]: any;
} | {
    exports?: P;
    [x: string]: any;
};
export interface Assets {
    [name: string]: {
        [ext: string]: string;
    };
}
export interface Chunks {
    [key: string]: {
        css: string[];
        js: string[];
    };
}
