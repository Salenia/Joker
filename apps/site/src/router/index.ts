import { RouteDefinition, useRoutes } from "@solidjs/router";
import Home from "./pages/Home";


const appRoutes: RouteDefinition[] = [
    {
        path: '/',
        component: Home
    }
];


export const useAppRoutes = () => useRoutes(appRoutes);