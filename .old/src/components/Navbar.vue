<template>
  <div class="navbar">
    <router-link class="home-button" :to="{ name: home }">
      <img class="logo" alt="MogaWinch logo" src="@/assets/logo.png">
      <span class="home-text">MogaWinch</span>
    </router-link>
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
      home: NAMED_ROUTES.HOME,
      tabs: [
        { title:'Projects', routeName: NAMED_ROUTES.PROJECTS },
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
   box-shadow: 0 2px 4px 0 rgb(0 0 0 / 8%);
   grid-auto-columns: 0fr 0fr 1fr 1fr;

  .home-button {
    display: grid;
    grid-auto-flow: column;
    grid-area: 'home-button';
    grid-auto-columns: 0fr 1fr;
    width: 200px;
    font-style: normal;
    cursor: pointer;
    color: #000;
    text-decoration: none;

    .logo {
      width: 46px;
      height: 46px;
      margin: 10px;
    }

    .home-text {
      align-self: center;
      justify-self: center;
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

    .tab {
      font-style: normal;
      width: 100px;
      line-height: 67px;
      padding: 0px 24px;
      text-decoration: none;
      color: #000;
      font-size: 16px;
      cursor: pointer;

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