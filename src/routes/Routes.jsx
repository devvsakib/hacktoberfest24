import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Quran from '../../pages/quran/page'
// import Test from '../../pages/Test'
// import SurahPage from '../../pages/SurahPage'
// import Hadith from '../../pages/Hadith'
// import Login from '../../components/Login'
import Home from '../Home'
// import SheikhBio from '../../pages/biography/view/page'
// import Biography from '../../pages/biography/page'
// import Fatwa from '../../pages/fatwa/page'
// import Surah from '../../pages/quran/view/page'

const routes = [
    {
        path: '/',
        element: <Home />
    },
    // {
    //     path: 'fatwa',
    //     element: <Fatwa />
    // },
    // {
    //     path: 'biography',
    //     element: <Biography />
    // },
    // {
    //     path: 'biography/:sheikhname',
    //     element: <SheikhBio />
    // },
    // {
    //     path: 'quran',
    //     element: <Quran />
    // },
    // {
    //     path: 'quran/:surahnumber',
    //     element: <Surah />
    // },
    // {
    //     path: 'test',
    //     element: <Test />
    // },
    // {
    //     path: 'hadith',
    //     element: <Hadith />
    // },
    // {
    //     path: 'login',
    //     element: <Login />
    // },
    // {
    //     path: 'quran/:surahNumber',
    //     element: <SurahPage />
    // },
    // {
    //     path: 'quran/:surahnumber',
    //     element: <Surah />
    // },
    // {
    //     path: 'surahpage/:surahNumber',
    //     element: <SurahPage />
    // }
]

const Router = () => (
    <Routes>
        {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
        ))}
    </Routes>
);

export default Router