const path = require("path");
const { app, BrowserWindow } = require("electron");

let mainWindow;

/**
 * Handler when app is closed
 */
function appClosedHandler() {
  if (process.platform !== "darwin") {
    app.quit();
  }
}
app.on("window-all-closed", appClosedHandler);

/**
 * Handler when app is ready
 */
function appReadyHandler() {
  let htmlFilePath;
  if (process.env.NODE_ENV === "production") {
    htmlFilePath = path.resolve(__dirname, "./index.html");
  } else {
    htmlFilePath = path.resolve(__dirname, "../renderer/index.html");
  }

  // Initialize browser window
  mainWindow = new BrowserWindow({
    show: false,
    frame: false,
    toolbar: false,
    transparent: true,
    minWidth: 400,
    minHeight: 300,
    width: 800,
    height: 600,
    alwaysOnTop: true,
    webPreferences: {
      devTools: process.env.NODE_ENV !== "production",
    },
  });
  if (process.env.NODE_ENV === "production") {
    mainWindow.setMenu(null);
  }

  // Load URL
  mainWindow.loadURL(`file://${htmlFilePath}`);

  mainWindow.once("ready-to-show", mainWindowReadyHandler);
  mainWindow.on("closed", mainWindowClosedHandler);
}

/**
 * Handler when main window is ready
 */
function mainWindowReadyHandler() {
  if (mainWindow == null) {
    throw new Error("Main Window is not defined");
  }
  mainWindow.show();
  mainWindow.focus();
}

/**
 * Handler when main window is closed
 */
function mainWindowClosedHandler() {
  mainWindow = null;
}

app.on("ready", appReadyHandler);
