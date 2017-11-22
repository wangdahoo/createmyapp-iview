<template>
  <div class="layout laylout-dashboard">
    <Row type="flex" style="height: 100%;">
      <!-- menu -->
      <div class="layout-menu" :class="{'expanded': menuExpanded}">
        <Menu theme="dark" mode="vertical" width="auto" active-name="1" class="sidemenu">
          <div class="layout-logo"></div>
          <MenuItem name="1">
            <Icon type="android-apps" :size="iconSize"></Icon>
            <span class="option-text">Option 1</span>
          </MenuItem>
          <MenuItem name="2">
            <Icon type="document-text" :size="iconSize"></Icon>
            <span class="option-text">Option 2</span>
          </MenuItem>
          <MenuItem name="3">
            <Icon type="stats-bars" :size="iconSize"></Icon>
            <span class="option-text">Option 3</span>
          </MenuItem>
        </Menu>
      </div>

      <!-- main -->
      <div class="layout-main">
        <div class="layout-header">
          <Button type="text" @click="toggleClick" class="btn-toggle">
            <Icon type="navicon" size="32"></Icon>
          </Button>

          <!-- user dropdown -->
          <Dropdown ref="userDropdown" trigger="click" placement="bottom-end" class="user-dropdown">
            <a href="javascript:void(0)">
              <Avatar shape="square" :src="avatar" style="margin-right: 5px;"/>
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>菜单 - 1</DropdownItem>
              <DropdownItem>菜单 - 2</DropdownItem>
              <DropdownItem disabled>菜单 - 3</DropdownItem>
              <DropdownItem>菜单 - 4</DropdownItem>
              <DropdownItem divided name="logout">退出</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>

        <div class="layout-content">
          <div class="layout-content-main">
            <p>
              Hi, {{ username }}
              <Button type="text" @click="$router.push('/detail')">more</Button>
            </p>
          </div>
        </div>

        <div class="layout-copy">
          2011-2016 &copy; Your Awesome Inc.
        </div>
      </div>
    </Row>
  </div>
</template>
<script>
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Dashboard',

  fullscreen: true,

  data () {
    return {
      menuExpanded: true
    }
  },

  computed: {
    ...mapState('user', [
      'username',
      'avatar'
    ]),

    iconSize () {
      return this.menuExpanded ? 14 : 20
    }
  },

  mounted () {
    // handle userDropdown events
    this.$refs.userDropdown.$on('on-click', this._handleUserDropdownEvents)
    this.getDashboardData()
  },

  methods: {
    ...mapActions('user', [
      'getDashboardData'
    ]),

    toggleClick () {
      this.menuExpanded = !this.menuExpanded
    },

    _handleUserDropdownEvents (dropdownItemName) {
      // logout
      if (dropdownItemName === 'logout') this.$router.replace('/login')
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../scss/mixins";

  .layout.layout-dashboard {

  }

  .layout-menu {
    background: #363e4f;
    width: 80px;
    transition: width .2s ease-in-out;

    .ivu-menu-item {
      height: 49px;

      .ivu-icon {
        margin-left: 7px;
      }
    }

    &.expanded {
      width: 200px;

      .ivu-icon {
        margin-left: 0;
      }
    }
  }

  .layout-logo {
    width: 30px;
    height: 60px;
    padding: 15px;
    margin: 0 auto;

    @include background-image(url('../assets/logo.png'), 100%, left);
  }

  .option-text {
    position: absolute;
    left: 40px;
    opacity: 0;
  }

  .layout-menu.expanded .option-text {
    opacity: 1;
    transition: opacity .1s ease-in-out .1s;
  }

  .layout-main {
    flex: 1;
    background: #f5f7f9;
    padding-bottom: 80px;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);

    .btn-toggle {
      position: relative;
      top: 6px;
    }

    .user-dropdown {
      float: right;
      margin-top: 14px;
      margin-right: 15px;
    }
  }

  .layout-content {
    height: 100%;
    margin: 15px;
    overflow: auto;

    .layout-content-main {
      padding: 10px;
      min-height: 500px;
      background: #fff;
      border-radius: 4px;
    }
  }

  .layout-copy {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 10px;
    color: #9ea7b4;
    height: 50px;
    background: #f5f7f9;
    box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);
    font-size: 14px;
    line-height: 20px;
  }
</style>
