<template>
  <div id="app">
    <transition name="fade-slide-up" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fade-slide-up-enter-active {
  transition: all 0.5s ease;
}
.fade-slide-up-leave-active {
  transition: all 0.5s ease;
}
.fade-slide-up-enter,
.fade-slide-up-leave-to {
  transform: translateY(60px);
  opacity: 0;
}
</style>
