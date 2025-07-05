const request = require('supertest');
const express = require('express');
const tasksRouter = require('../routes/route');
const db = require('../config/db');

const app = express();
app.use(express.json());
app.use('/api/tasks', tasksRouter);

beforeAll(async () => {
  await db.execute('DELETE FROM task');
});

let taskId;

test('POST /api/tasks - create task', async () => {
  const res = await request(app).post('/api/tasks').send({
    title: 'Integration Task',
    description: 'Testing route'
  });
  expect(res.statusCode).toBe(201);
  expect(res.body.id).toBeDefined();
  taskId = res.body.id;
});

test('GET /api/tasks - get tasks', async () => {
  const res = await request(app).get('/api/tasks');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});

test('PUT /api/tasks/:id/done - mark as done', async () => {
  const res = await request(app).put(`/api/tasks/${taskId}/done`);
  expect(res.statusCode).toBe(200);
});
