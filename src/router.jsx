import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import CharacterCard from "./components/CharacterCard.jsx";
import Filters from "./components/Filters.jsx";
import {CharactersDetail} from "./components/CharactersDetail.jsx";
import {NotFound} from "./components/NotFound.jsx";
import {CharactersPage} from "./components/CharactersPage.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <CharactersPage /> },
            { path: 'character/:id', element: <CharactersDetail />},
            { path: 'filter', element: <Filters />},
            { path: '*', element: <NotFound/>}

        ]
    }
])

export default router;