<template>
  <div>
    <md-tabs class="md-primary" md-alignment="centered" md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-pages" md-label="Contact Us" to="/contactus">
        <router-view></router-view>
      </md-tab>
      <md-tab id="tab-posts" md-label="View Contact Us" to="/contactusdata">
        <router-view></router-view>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
