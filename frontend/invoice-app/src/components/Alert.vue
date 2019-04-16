<template>
  <div class="alert">
    {{ message }}
  </div>
</template>

<style lang="scss">
  @keyframes show {
    0% {
      transform: translate3d(0, 10%, 0);
      opacity: 0;
    }

    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  .alert {
    position: absolute;
    bottom: 1rem;
    left: 1rem;
    background-color: var(--c-nyc-diesel);
    color: white;
    display: inline-block;
    font-size: 12px;
    padding: 1rem;
    font-family: var(--heading-font);
    text-transform: uppercase;
    letter-spacing: .1em;
    animation: show .1s ease-in-out;
  }
</style>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

@Component({
  props: {
    message: String,
    timeout: {
      type: Number,
      default: 1000,
    },
    id: [String, Number],
  },
})
export default class Alert extends Vue {
  public id!: any;
  public message!: string;
  public timeout!: number;
  public mounted() {
    setTimeout(() => {
      this.$emit('done', this.id);
    }, this.timeout);
  }
}
</script>
