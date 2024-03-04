// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge,ipcMain, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(npm : Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

let saveData = (data:any) => {
  console.log(data);
  ipcRenderer.send("saveData", data);
};

let bridge = {
  saveData,
};


contextBridge.exposeInMainWorld('electron', electronHandler);
contextBridge.exposeInMainWorld("Bridge", bridge);

export type ElectronHandler = typeof electronHandler;



