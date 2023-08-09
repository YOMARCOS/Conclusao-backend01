// app.js

import cors from 'cors';
import express from 'express';
import usersRoutes from './routes/usersRoutes';
import recadosRoutes from './routes/recadosRoutes';

const app = express();
app.use(express.json());
app.use(cors());

// Rotas
app.use('/users', usersRoutes);
app.use('/recados', recadosRoutes);

const PORT = process.env.PORT || 13;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
