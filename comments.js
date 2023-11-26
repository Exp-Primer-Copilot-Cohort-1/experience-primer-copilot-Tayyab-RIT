// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from /home/node/app/public
app.use(express.static('/home/node/app/public'));

// Listen on port 3000
app.listen(port, () => console.log(`Listening on port ${port}`));
