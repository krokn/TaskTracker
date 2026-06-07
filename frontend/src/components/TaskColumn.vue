<template>
  <section class="column">
    <h2>{{ title }}</h2>

    <div class="tasks">
      <TaskCard
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import TaskCard from "@/components/TaskCard.vue";
import { useTasksStore } from "@/stores/tasks";

const props = defineProps<{
  title: string;
  status: string;
}>();

const tasksStore = useTasksStore();

const filteredTasks = computed(() =>
  tasksStore.tasks.filter(t => t.status === props.status)
);
</script>

<style scoped>
.column {
  flex: 1;
  background: rgba(201, 209, 200, 0.24);
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
