import express from 'express';
import cors from 'cors';
import todoRoutes from './routers/todo.route.js';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

export default app;