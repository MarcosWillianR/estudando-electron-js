const { app, BrowserWindow } = require('electron');
const path = require('path');

const htmlFileExample = path.resolve(__dirname,'app', 'index.html');

app.on('ready', () => {
  console.log('Aplicação iniciada');
  
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 400
  });

  mainWindow.loadFile(htmlFileExample);

});

app.on('window-all-closed', () => {
  app.quit(); // Fechar o app de forma "EDUCADA"
});