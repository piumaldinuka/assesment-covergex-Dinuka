const db = require('../config/db');

const getRecentTasks = async () => {
  const [rows] = await db.execute(
    'SELECT * FROM task WHERE status = "pending" ORDER BY created_at DESC LIMIT 5'
  );
  return rows;
};

const createTask = async ({ title, description }) => {
  const [result] = await db.execute(
    'INSERT INTO task (title, description) VALUES (?, ?)',
    [title, description]
  );
  return result.insertId;
};

const markTaskDone = async (id) => {
  await db.execute('UPDATE task SET status = "completed" WHERE id = ?', [id]);
};

module.exports = { getRecentTasks, createTask, markTaskDone };
