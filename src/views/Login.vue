<template>
  <div class="layout">
    <Menu mode="horizontal" theme="dark" active-name="1">
      <BackButton btnText="返回" :onClick="back" />
    </Menu>

    <div class="layout-content">
      <div class="layout-content-main">
        <!-- Login Form -->
        <div class="login-form">
          <Row>
            <Col span="8" offset="8">
              <div class="form-field">
                <div class="label">账 号</div>
                <Input v-model="form.username" placeholder="账号/手机/邮箱"></Input>
              </div>
            </Col>
          </Row>

          <div class="divider"></div>

          <Row>
            <Col span="8" offset="8">
              <div class="form-field">
                <div class="label">密 码</div>
                <Input v-model="form.password" placeholder="密码" type="password"></Input>
              </div>
            </Col>
          </Row>

          <div class="divider lined"></div>

          <Row>
            <Col span="8" offset="8">
              <div class="form-buttons">
                <Button type="primary" @click="submit(form)">登 录</Button>
                <Button type="default" @click="reset">重 置</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>

    <div class="layout-copy">
      2015-2017 &copy; Your Awesome Inc.
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import BackButton from '@/components/BackButton'

export default {
  name: 'Login',

  components: {
    BackButton
  },

  data () {
    return {
      form: {
        username: 'admin',
        password: '1234'
      }
    }
  },

  methods: {
    ...mapActions('user', [
      'login'
    ]),

    back () {
      this.$router.back()
    },

    reset () {
      this.form.username = ''
      this.form.password = ''
    },

    submit ({username, password}) {
      this.login({
        username,
        password
      }).then(() => this.$router.push('/dashboard'))
    }
  }
}
</script>

<style lang="scss" scoped>
  .layout {
    .layout-content {
      min-height: 400px;
      margin: 15px;

      .layout-content-main {
        .login-form {
          padding-top: 50px;

          .form-field, .form-buttons {
            margin: 0 auto;
            width: 300px;
          }

          .form-field {
            .ivu-input-wrapper {
              width: 250px
            }

            .label {
              display: inline-block;
              font-size: 14px;
              line-height: 32px;
              width: 50px;
              float: left;
            }
          }

          .form-buttons {
            text-align: left;
            padding-left: 50px;

            .ivu-btn {
              margin-right: 5px;
            }
          }

          .divider {
            height: 15px;

            &.lined {
              border-bottom: 1px solid #eee;
              margin-bottom: 15px;
            }
          }
        }
      }
    }

    .layout-copy {
      text-align: center;
    }
  }
</style>
