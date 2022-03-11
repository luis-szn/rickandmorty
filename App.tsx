import React from 'react';
import { GlobalProvider } from './src/hook/globalContext';

import AppRoutes from './src/routes/app.routes';

export default function App (){
  return (
    <GlobalProvider>
      <AppRoutes />
    </GlobalProvider>
  
  )
}

