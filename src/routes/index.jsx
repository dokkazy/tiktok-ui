//layouts
import { HeaderOnly } from '@Layout'

import { Home, Following, Profile, Search, Upload } from '@pages'
//Public routes
export const publicRoutes = [
    { path: '/', component: Home, },
    { path: '/following', component: Following },
    { path: '/:nickname', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly }
];

//Private routes
export const privateRoutes = [

];