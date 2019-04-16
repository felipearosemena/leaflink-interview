<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./assets/main.scss";
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AppHeader from '@/components/Header.vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    sm: 768,
    md: 1280,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm',
});

@Component({
  components: {
    AppHeader,
  },
})
export default class Alert extends Vue {}
</script>
