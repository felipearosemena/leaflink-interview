<template>
  <div>
    {{ message }}
  </div>
</template>

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
