<template>
  <div class="ivu-back-button" @click="back">
    <Icon type="ios-arrow-back" />
    {{btnText}}
  </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    btnText: {
      type: String,
      default: 'Back'
    },
    onClick: Function
  },
  methods: {
    back () {
      if (this.onClick) this.onClick()
    }
  }
}
</script>

<style lang="scss" scoped>
  .ivu-back-button {
    width: 80px;
    height: 60px;
    float: left;
    position: relative;
    top: 0;
    left: 0;
    color: #FFF;
    cursor: pointer;
    background-color: darken(#495060, 5%);
    text-align: center;

    .ivu-icon {
      transform: scale(1.5, 1.5);
      margin-right: 2px;
    }
  }
</style>
