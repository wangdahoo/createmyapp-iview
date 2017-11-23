<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <BackButton btnText="返回" :onClick="back" />
    </Menu>

    <div class="layout-content">
      <div class="layout-content-main">
        <p>Content Goes Here.</p>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from '@/components/BackButton'

export default {
  name: 'Detail',

  components: {
    BackButton
  },

  data () {
    return {

    }
  },

  methods: {
    back () {
      this.$router.back()
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    .layout-content {
      min-height: 400px;
      margin: 15px;
    }
  }
</style>
