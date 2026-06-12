<template>
  <header class="header">
    <h1>Task Manager</h1>

    <button @click="$emit('create-task')">
      + Создать задачу
    </button>
  </header>
</template>

<script setup lang="ts">
defineEmits(["create-task"]);
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  background: #04202c;
  color: rgb(255, 255, 255);
  border-radius: 10px;
}

button {
  background: #3b82f6;
  border: none;
  padding: 8px 12px;
  color: white;
  cursor: pointer;
  border-radius: 6px;
}

button:hover {
  background: #2563eb;
}
</style>
