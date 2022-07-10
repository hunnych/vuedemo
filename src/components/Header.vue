<template>
  <div>
    <!-- <div>
      <img src="EasyTrip.png" alt="easy-trip-logo" height="100" width="100">
    </div> -->
    <md-tabs class="md-primary tabStyle" md-alignment="centered" md-sync-route>
      <!-- <img src="EasyTrip.png" alt="easy-trip-logo" height="100" width="100"> -->
      <!-- <md-tab id="tab-home" md-label="Home" md-icon="/assets/EasyTrip.png">
        <router-view></router-view>
      </md-tab> -->
      <md-tab id="tab-home" md-label="Home" to="/home">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-pages" md-label="Contact Us" to="/contactus">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-posts" md-label="View Contact Us" to="/contactusdata">
        <router-view></router-view>
      </md-tab>
      <!-- <md-tab id="tab-login" md-label="Login" to="/login">
        <router-view></router-view>
      </md-tab> -->
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.md-tabs-navigation {
  box-shadow: 0 10px 30px -12px rgb(0 0 0 / 42%),
    0 4px 25px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%);
  margin: 0 !important;
  border-radius: 3px;
  padding: 15px 15px 15px 75px;
  background-color: #999999;
}
</style>
