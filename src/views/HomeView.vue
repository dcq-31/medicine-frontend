<template>
  <main class="home">
    <div class="container">
      <div class="px-4 text-center">
        <img
          class="logo d-block mx-auto img-fluid"
          src="src/assets/medical-logo.png"
          alt=""
          style="width: 100%"
        />
        <h1 class="display-5 fw-bold mb-3">Medicine Website</h1>
        <div class="col-md-10 col-lg-8 mx-auto">
          <p class="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi error
            rem repellendus dolorem iusto unde minus quos hic cumque facilis
            nesciunt vitae possimus, iste veritatis officia, molestiae amet
            commodi earum.
          </p>
          <RouterLink
            :to="{ name: ROUTES.LIST }"
            type="button"
            class="btn btn-primary btn-lg px-4 gap-3"
          >
            Medical Registry</RouterLink
          >
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ROUTES } from "@/router/names";
import { RouterLink } from "vue-router";
</script>
