<template>
  <div class="card">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  task: {
    id: number;
    title: string;
    description: string;
    status: string;
  };
}>();
</script>

<style scoped>
.card {
  padding: 10px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  background: #fafafa;
}
</style>
