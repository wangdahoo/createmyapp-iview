<template>
  <div class="layout laylout-dashboard" :class="{'layout-hide-text': !menuExpanded}">
    <Row type="flex" style="height: 100%;">
      <!-- menu -->
      <div class="layout-menu" :class="{'expanded': menuExpanded}">
        <Menu theme="dark" mode="vertical" width="auto" active-name="1">
          <div class="layout-logo-left"></div>
          <MenuItem name="1">
            <Icon type="android-apps" :size="iconSize"></Icon>
            <span class="layout-text">Option 1</span>
          </MenuItem>
          <MenuItem name="2">
            <Icon type="document-text" :size="iconSize"></Icon>
            <span class="layout-text">Option 2</span>
          </MenuItem>
          <MenuItem name="3">
            <Icon type="stats-bars" :size="iconSize"></Icon>
            <span class="layout-text">Option 3</span>
          </MenuItem>
        </Menu>
      </div>

      <!-- main -->
      <div class="layout-main">
        <div class="layout-header">
          <Button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </Button>
        </div>

        <div class="layout-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="#">Index</BreadcrumbItem>
            <BreadcrumbItem href="#">Apps</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div class="layout-content">
          <div class="layout-content-main">Content</div>
        </div>

        <div class="layout-copy">
          2011-2016 &copy; Your Awesome Inc.
        </div>
      </div>
    </Row>
  </div>
</template>
<script>
export default {
  name: 'Dashboard',

  fullscreen: true,

  data () {
    return {
      menuExpanded: true
    }
  },

  computed: {
    iconSize () {
      return this.menuExpanded ? 14 : 24
    }
  },

  methods: {
    toggleClick () {
      this.menuExpanded = !this.menuExpanded
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

    .ivu-icon {
      margin-left: 7px;
    }

    &.expanded {
      width: 200px;

      .ivu-icon {
        margin-left: 0;
      }
    }
  }

  .layout-main {
    flex: 1;
  }

  .layout-logo-left {
    width: 30px;
    height: 45px;
    margin: 0 auto 15px auto;

    @include background-image(url('../assets/logo.png'), 100%, left)
  }

  .layout-text {
    position: absolute;
    left: 40px;
  }

  .layout-hide-text .layout-text {
    display: none;
  }

  .layout-breadcrumb {
    padding: 10px 15px 0;
  }

  .layout-content {
    min-height: 100px;
    margin: 15px;
    overflow: hidden;
    background: #fff;
    border-radius: 4px;
  }

  .layout-content-main {
    padding: 10px;
  }

  .layout-copy {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 15px 10px;
    color: #9ea7b4;
    background: #f5f7f9;
  }

  .layout-header {
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }

  .layout-ceiling-main a {
    color: #9ba7b5;
  }
</style>
