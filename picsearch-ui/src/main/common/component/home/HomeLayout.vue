<template>
    <application-header></application-header>
    <v-main>
        <router-view></router-view>
    </v-main>
    <application-footer></application-footer>
</template>

<script setup lang="ts">
import ApplicationHeader from './ApplicationHeader.vue'
import ApplicationFooter from './ApplicationFooter.vue'
</script>