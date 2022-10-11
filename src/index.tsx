import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/App';

const $root = document.getElementById('root') as Element
const root = createRoot($root);

root.render(<App/>)
