<template>
  <div class="maintenance">
    <div class="winch">
      <img class="top" alt="MogaWinch logo top" src="@/assets/logo_top.png">
      <img class="bottom" alt="MogaWinch logo bottom" src="@/assets/logo_bottom.png">
    </div>
    <div>
      <span class="message">{{ msg }}</span>
      <p class="description">
        This website is under construction. Please returned later.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Maintenance',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.maintenance {
  display: grid;
  grid-auto-flow: row;
  grid-gap: 20px;
}
.message {
  font-size: 50px;
  font-weight: bold;
  padding: 20px 10px;
}
.description {
  font-size: 18px;
}
.winch {
  display: grid;
  grid-auto-flow: row;
  align-content: center;
  justify-content: center;
}
.top {
  width: 300px;
  padding-left:120px;
  animation-name: winch-move;
  animation-duration: 10s;
  animation-iteration-count: infinite;
}
.bottom {
  width: 130px;
  padding-left: 142px;
}
/* On screens that are 600px or less, set the background color to blue */
@media screen and (max-width: 600px) {
  .top {
    width: 231px;
    padding-left:92px;
  }
  .bottom {
    width: 100px;
    padding-left: 108px;
  }
}

@keyframes winch-move {
  50% {transform: scaleX(-1);}
  100% {transform: scaleX(1);}
}
</style>
