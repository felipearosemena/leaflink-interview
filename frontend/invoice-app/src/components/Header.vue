<template>
  <header>
    <div class="container">
      <a class="logo" :class="{ 'logo--sm': $mq === 'sm' }" href="https://leaflink.com" target="_blank">
        <ll-logo v-if="$mq === 'sm'"/>
        <leaflink-logo v-else />
      </a>
    </div>
  </header>
</template>

<style scoped lang="scss">
  header {
    max-width: 1280px;
    position: relative;
    margin: auto;
    z-index: 100;
    height: 0;
  }

  .logo {
    width: 200px;
    height: 60px;
    display: block;
    background: var(--c-grandaddy-purp);
    padding: 1rem 2rem;
  }

  .logo--sm {
    width: 60px;
    padding: .75rem;
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
