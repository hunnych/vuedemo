<template>
  <div class="notification">
      <div class="success" v-if="$store.state.NotificationMessageSuccess">
        {{ $store.state.NotificationMessageSuccess }}
      </div>
  </div>
</template>

<script>
export default {
    name: "Notification"
}
</script>

<style>
.success{
    color:green;
}
</style>