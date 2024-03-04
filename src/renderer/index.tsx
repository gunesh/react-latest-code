import React, { Suspense} from "react";
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './Apps/index.css';
import store from './store';
import { AppProvider } from './utility/context/AppContext';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<Provider store={store}>
  <React.StrictMode>
  <Suspense fallback='Loading...'>
    <AppProvider>
      <App />
    </AppProvider>
    </Suspense>
  </React.StrictMode>
</Provider>);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
