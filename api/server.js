import express from 'express';
import cors from 'cors';

const app = express();

const allowedOrigins = ['http://localhost:3000']; // Ajoutez davantage d'origines au besoin

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.listen(4000, () => {
  console.log('server is running port 4000');
});
