import express from 'express';
import path from 'path';

const server = express();
const PORT = process.env.PORT || 3001;

server.use(express.static(
  (path.resolve(__dirname, '..', 'build')),
  { maxAge: '30d'}
));

server.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
});

server.listen(PORT, () => { console.log(`Listening on port ${PORT}`)});
