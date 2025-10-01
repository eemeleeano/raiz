import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';

import App from './App.jsx';
import Grower from './Grower.js';
import Harvest from './Harvest.js';

import './style.css';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='growers/:id' element={<Grower />} />
            <Route path='harvests/:id' element={<Harvest />} />
        </Routes>
    </BrowserRouter>
)
