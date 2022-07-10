<template>
  <div class="footer">
    <md-content class="fixed-footer"
      >Copyright &copy; 2016 Your Company</md-content
    >
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style>
.fixed-footer {
  width: 100%;
  position: fixed;
  background: #9c27b0 !important;
  padding: 10px 0;
  /* color: #448aff; */
  bottom: 0;
  margin-top: 100px;
}
</style>
