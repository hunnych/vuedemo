<template>
  <div class="notification">
    <!-- <div class="success" v-if="$store.state.NotificationMessageSuccess">
      {{ $store.state.NotificationMessageSuccess }}
    </div> -->
    <md-snackbar
      md-position="center"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>{{ $store.state.NotificationMessageSuccess }}</span>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: ["showSnackbar"],
  data: () => ({
    duration: 5000,
  }),
};
</script>

<style>
.success {
  color: green;
}
</style>
