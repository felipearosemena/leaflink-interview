<template>
  <div
    class="wrapper"
    tabindex="0"
    @focus="focus"
    @blur="blur"
    @keydown="keydown"
    style="padding: 5px; border: 1px solid"
  >
    <input
      :type="type"
      :value="value"
      @focus="focus"
      @blur="inputBlur"
      @keydown="keydown"
      @input="change($event.target.value)"
    >
    <div class="options" v-if="focused" ref="options">
      <div class="option" v-for="(option, index) in options" :key="index" @click="change(option)" :style="highlightedIndex === index ? 'background: #f0f0f0;' : ''">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';

type Target = HTMLInputElement | HTMLSelectElement;

@Component({
  props: {
    value: [String, Number],
    type: String,
    options: Array,
  },
})
export default class Autocomplete extends Vue {
  public focused: boolean = false;
  public highlightedIndex: any = 0;
  public type!: '';
  public value!: '';
  public options!: [];
  public $refs!: {
    options: HTMLElement,
  };
  @Emit()
  public change(value: string) {
    return value;
  }

  public keydown(e: KeyboardEvent) {
    if (e.target !== e.currentTarget) {
      return;
    }

    const down = e.keyCode === 40;
    const up = e.keyCode === 38;
    const enter = e.keyCode === 13;
    const len = this.options.length;
    const type  = this.type;
    const index = this.highlightedIndex;

    if (up || down) {
      e.preventDefault();
    }

    if (down) {
      this.highlightedIndex = len - 1 === index ? 0 : index + 1;
    }

    if (up) {
      this.highlightedIndex = index === 0 ? len - 1 : index - 1;
    }

    if (enter) {
      const { children } = this.$refs.options;
      const option = children[this.highlightedIndex] as HTMLElement;

      if (option) {
        option.click();
      }
    }
  }

  public focus() {
    this.focused = true;
  }

  public blur() {
    this.focused = false;
  }

  public inputBlur() {
    setTimeout(() => {
      if (document.activeElement !== this.$el) {
        this.blur();
      }
    }, 100);
  }
}
</script>
