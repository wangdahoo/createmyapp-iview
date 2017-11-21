<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <Button type="primary" shape="circle" icon="paper-airplane" @click="onClick">into the sky</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'iView Project Starter'
    }
  },

  methods: {
    onClick () {
      this.$Message.info('This is a iView project starter.')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  margin-bottom: 20px;
}
</style>
