<template>
  <header>
    <a class="logo" :class="{ 'logo--sm': $mq === 'sm' }" href="https://leaflink.com" target="_blank">
      <ll-logo v-if="$mq === 'sm'"/>
      <leaflink-logo v-else />
    </a>
  </header>
</template>

<style scoped lang="scss">
  :root {
    --breakpoint-sm: 768px;
  }

  header {
    max-width: 1280px;
    margin: auto;
    position: relative;
    z-index: 100;
    height: 0;
  }


  .logo {
    width: 240px;
    height: 70px;
    display: block;
    padding: 1rem;
    background: var(--c-grandaddy-purp);
  }

  .logo--sm {
    width: 70px;
    position: absolute;
  }

  svg {
    max-width: 100%;
  }
</style>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LeaflinkLogo from '@/components/LeaflinkLogo.vue';
import LlLogo from '@/components/LlLogo.vue';

@Component({
  components: {
    LeaflinkLogo,
    LlLogo,
  },
})
export default class Header extends Vue {}
</script>
