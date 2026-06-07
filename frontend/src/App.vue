<template>
  <div class="app">
    <AppHeader @create-task="openCreateTask" />

    <main class="board">
      <TaskColumn title="Нужно сделать" status="todo" />
      <TaskColumn title="В процессе" status="in_progress" />
      <TaskColumn title="Готово" status="done" />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import TaskColumn from "@/components/TaskColumn.vue";

function openCreateTask() {
  alert("Открыть форму создания задачи");
}
</script>

<style>
.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: Arial, sans-serif;
  padding: 30px 50px;
}

.board {
  flex: 1;
  display: flex;
  gap: 32px;
  padding: 30px 0;
}
</style>
