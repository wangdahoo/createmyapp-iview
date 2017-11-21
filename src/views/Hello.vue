<template>
  <div class="layout layout-hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <Button type="primary" shape="circle" icon="chatbubble-working" @click="onClick" class="btn">greetings</Button>&nbsp;
    <Button type="ghost" shape="circle" icon="person" @click="toLogin" class="btn">login</Button>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'iView Project Starter'
    }
  },

  methods: {
    onClick () {
      this.$Message.info('Hi, there~')
    },

    toLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .layout.layout-hello {
    padding-top: 60px;
    text-align: center;

    h1 {
      font-weight: normal;
      text-align: center;
      margin-bottom: 20px;
    }

    .btn {
      width: 120px;
    }
  }
</style>
