<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'toggleInput',
  props: {
    value: Boolean,
  },
  emits: ['update:value'],
  methods: {
    onChange(event) {
      if (!(event.target instanceof HTMLInputElement)) return;
      this.$emit('update:value', event.target.checked);
    },
  },
});
</script>

<template>
  <div class="container1">
    <label class="switch">
      <input type="checkbox" v-model="checked" @change="onChange" />
      <span class="slider round"></span>
    </label>
    <div class="wrap_toggle">
      <span class="title_toggle" :class="{ active: checked }">
        male
      </span>
      <p class="text" :class="{ active: !checked }">
        female
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrap_toggle {
  margin-left: 6px;
  .title_toggle {
    color: #000;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
  }
  .text {
    color: #696977;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: -0.021px;
  }
}

.container1 {
  display: flex;
}

.switch {
  position: relative;
  display: inline-block;
  width: 39px;
  height: 19px;
  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;

    &:before {
      position: absolute;
      content: '';
      height: 17px;
      width: 17px;
      left: -5px;
      bottom: 1px;
      background-color: white;
      transition: 0.4s;
      margin-right: 5px;
    }
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
</style>