import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";

const API_URL = "http://localhost:3000/api/tasks";

export const useTasks = () => {
  const fetchTasks = async () => {
    const res = await axios.get(API_URL);
    return res.data;
  };

  const addTask = async (task) => {
    await axios.post(API_URL, task)
    .then(async() => {
      message.success("Task added successfully!");
      await fetchTasks();
    })
    .catch((error) => {
      message.error("Error adding task!");
      console.error(error);
    });
  };

  const markTaskAsDone = async (taskId: string) => {
    await axios
      .put(`${API_URL}/${taskId}/done`)
      .then(async() => {
        message.success("Task marked as done!");
        await  fetchTasks();
      })
      .catch((error) => {
        message.error("Error marking task as done!");
        console.error(error);
      });
  };
  return {
    addTask,
    markTaskAsDone,
    fetchTasks,
  };
};
