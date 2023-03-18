<script setup lang="ts">
import ApplicationHeader from "./common/component/ApplicationHeader.vue";
import ApplicationFooter from "./common/component/ApplicationFooter.vue";
</script>

<template>
  <v-app>
    <application-header></application-header>

    <v-main>
      <router-view></router-view>
    </v-main>
    
    <application-footer></application-footer>
  </v-app>
</template>

