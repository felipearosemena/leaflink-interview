<template>
  <button class="icon" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
  .icon {
    position: relative;
    width: 20px;
    height: 20px;
    margin: 4px;
    padding: 0;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all .1s ease-in-out;
    fill: var(--c-blue-dream);

    &:hover,
    &:focus {
      fill: var(--c-grandaddy-purp);
      background: var(--c-grandaddy-purp-light);
      border-radius: 50%;
      box-shadow: 0 0 0 10px var(--c-grandaddy-purp-light);
    }
  }

  .icon svg {
    width: 100%;
    height: 100%;
    display: block;
  }
</style>
