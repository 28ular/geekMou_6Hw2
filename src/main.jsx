import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './store/store.js'
import router from './router.jsx'

createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
)