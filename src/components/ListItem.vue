<template>
  <RouterLink
    :to="to"
    class="list-group-item list-group-item-action d-flex gap-3"
  >
    <div class="d-flex gap-2 w-100 justify-content-between">
      <div>
        <h6 class="mb-0">{{ title }}</h6>
        <p class="mb-0 opacity-75">{{ description }}</p>
      </div>
      <span class="badge bg-primary rounded-pill align-self-center">{{
        count
      }}</span>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
import type { RouteLocationRaw } from "vue-router";

export interface IListItemProps {
  to: RouteLocationRaw;
  title: string;
  description: string;
  count: number;
}

const props = defineProps<IListItemProps>();
</script>

<style scoped></style>
