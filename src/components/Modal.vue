<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="$emit('close')">
      <div class="modal-content" @click.stop>
        <!-- header -->
        <div class="modal-header">
          <span class="modal-title">{{ item.name }}</span>
          <span class="button-close" @click="$emit('close')">×</span>
        </div>
        <small>{{ item.email }}</small>
        <!-- body -->
        <div class="modal-body">
          <slot name="body">{{ item.message }}</slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  props: ["item"],
};
</script>

<style>
.modal-enter,
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-content,
.modal-leave-active .modal-content {
  transform: scale(1.2);
}
/* .modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, 0.48);
} */
.modal-content {
  position: relative;
  max-width: 600px;
  padding: 20px 18px;
  background-color: #fff;
  border: 1px solid #dcdfe6;
  border-bottom: 0px;
  transition: all 0.2s ease;
  box-shadow: none;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (min-width: 900px) {
    min-width: 500px;
  }
}
.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 10px !important;
}
span {
  font-size: 24px;
}
.button-close {
  cursor: pointer;
}
.modal-body {
  padding-top: 20px;
  text-align: center;
}
.modal-bottom {
  padding-top: 40px;
}
a.another-modal {
  color: #000;
  border-bottom: 1px solid #000;
}
.modal-content .modal-header {
  padding: 0px;
  border-bottom: none;
}
</style>
