const path = require('path');
const express = require('express');
const app = express();
// const publicPath = path.join(__dirname, '..', 'new-react-aframe-app/build');
const publicPath = path.join(__dirname, '..', 'app/build');
const port = process.env.PORT || 5000;
app.use(express.static(publicPath));
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log('Server is up!');
});