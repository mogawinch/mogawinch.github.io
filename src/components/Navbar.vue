<template>
  <div class="navbar">
    <div class="home-button">
      <img class="logo" alt="MogaWinch logo" src="@/assets/logo.png">
      <span class="home-text">MogaWinch</span>
    </div>
    <div class="menu">
      <router-link
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab', { active: isLinkActive(tab) }]"
        :to="{ name: tab.routeName }">
        {{ tab.title }}
        </router-link>
    </div>
  </div>
</template>

<script>
import { NAMED_ROUTES } from '@/router';

export default {
  name: 'Navbar',
  data: () => {
    return {
      tabs: [
        { title:'Home', routeName: NAMED_ROUTES.HOME, url: '/' },
      ],
    };
  },
  methods: {
    isLinkActive(tab) {
      if (tab.activeRoutes) {
        return tab.activeRoutes.includes(this.$route.name);
      }
      return this.$route.name === tab.routeName;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
   display: grid;
   grid-template-areas: 'home-button menu . .';
   box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.16);
   grid-auto-columns: 0fr 0fr 1fr 1fr;

  .home-button {
    display: grid;
    grid-auto-flow: column;
    grid-area: 'home-button';
    grid-auto-columns: 0fr 1fr;
    width: 200px;
    cursor: pointer;

    .logo {
      width: 46px;
      height: 46px;
      margin: 10px;
    }

    .home-text {
      align-self: center;
      margin: 10px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.08);
    }
  }
  
  .menu {
    display: grid;
    grid-area: 'menu';
    grid-auto-flow: column;
    text-align: center;
    align-items: center;
    justify-content: center;

    .tab {
      font-style: normal;
      width: 100px;
      line-height: 56px;
      padding: 0px 24px;
      text-decoration: none;
      color: #000;
      font-size: 16px;
      cursor: pointer;
      box-sizing: content-box;

      &.active {
        font-weight: bold;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.08);
      }
    }
  }
}
</style>