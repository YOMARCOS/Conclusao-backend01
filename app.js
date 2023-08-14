// app.js

import cors from 'cors';
import express from 'express';
import usersRoutes from './src/routes/usersRoutes.js'; 
import recadosRoutes from './src/routes/recadosRoutes.js';



const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', usersRoutes);

app.use('/recados', recadosRoutes);

const PORT = process.env.PORT || 1300;
app.listen(PORT, (error) => {
  if (error) {
    console.error('Error starting the server:', error);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});

