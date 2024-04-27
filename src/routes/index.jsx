//layouts
import { HeaderOnly } from '@layouts'
import config from '@configs';
import { Home, Following, Profile, Search, Upload, Live } from '@pages'

//Public routes
export const publicRoutes = [
    { path: config.routes.home, component: Home, },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    {path: config.routes.live, component: Live},
    { path: config.routes.upload, component: Search, layout: null },
    { path: config.routes.search, component: Upload, layout: HeaderOnly },
];

//Private routes
export const privateRoutes = [

];