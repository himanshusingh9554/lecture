const http = require('express');
const app = express();

// Middleware 1: Logging requests
app.use((req, res, next) => {
    console.log(`${req.method} request to ${req.url}`);
    next();
});

// Middleware 2: Adding a custom header
app.use((req, res, next) => {
    res.setHeader('X-Custom-Header', 'ExpressJS Demo');
    next();
});

// Route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to Express.js</h1>');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});