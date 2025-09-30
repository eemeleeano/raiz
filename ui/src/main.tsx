import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App.jsx'
import Grower from './Grower.js'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />

            <Route path='grower/:id' element={<Grower />} />
        </Routes>
    </BrowserRouter>
)
