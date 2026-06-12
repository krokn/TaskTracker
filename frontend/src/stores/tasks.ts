import { defineStore } from "pinia";

export const useTasksStore = defineStore("tasks", {
  state: () => ({
    tasks: [
      {
        id: 1,
        title: "Сделать UI",
        description: "Разметка доски",
        status: "todo"
      },
      {
        id: 2,
        title: "Подключить API",
        description: "Django backend",
        status: "in_progress"
      },
      {
        id: 3,
        title: "Тестирование",
        description: "Проверка логики",
        status: "done"
      }
    ]
  }),

  actions: {
    moveTask(taskId: number, status: string) {
      const task = this.tasks.find(
        t => t.id === taskId
      );

      if (task) {
        task.status = status;
      }
    }
  }
});
