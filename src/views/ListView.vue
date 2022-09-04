<template>
  <main class="medical-list">
    <div class="container">
      <div class="px-3 mx-auto col-lg-8">
        <div class="list-group w-auto">
          <ListItem
            v-for="(item, index) in list"
            :key="`list-view-item-${index}`"
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ListItem from "@/components/ListItem.vue";
import { ROUTES } from "@/router/names";
import type { IListItemProps } from "@/types";

const list = ref<IListItemProps[]>([
  {
    title: "First Medicine",
    description: "Some small medicine description content",
    to: { name: ROUTES.HOME },
    count: 1,
  },
  {
    title: "Second Medicine",
    description: "Some small medicine description content",
    to: { name: ROUTES.HOME },
    count: 2,
  },
  {
    title: "Another Medicine",
    description: "Some small medicine description content",
    to: { name: ROUTES.HOME },
    count: 3,
  },
  {
    title: "One mre Medicine",
    description: "Some small medicine description content",
    to: { name: ROUTES.HOME },
    count: 4,
  },
]);
</script>
