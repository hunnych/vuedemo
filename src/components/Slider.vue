<template>
  <div>
    <!-- <transition-group name="fade" tag="div"> -->
    <div v-for="i in [currentIndex]" :key="i">
      <img class="img" :height="height" :width="width" :src="currentImg" />
    </div>
    <!-- </transition-group> -->
    <a class="prev" @click="prev" href="#">&#10094; Previous</a>
    <a class="next" @click="next" href="#">&#10095; Next</a>
  </div>
</template>

<script>
export default {
  $inheritAttrs: false,
  name: "Slider",
  props: ["height", "width"],
  data() {
    return {
      images: ["pic03.jpg", "pic04.jpg", "pic05.jpg", "pic06.jpg"],
      timer: null,
      currentIndex: 0,
    };
  },

  mounted: function () {
    this.startSlide();
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 20000);
    },

    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
} */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 15%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}
audio:not(.md-image),
canvas:not(.md-image),
embed:not(.md-image),
iframe:not(.md-image),
img:not(.md-image),
object:not(.md-image),
video:not(.md-image) {
  height: 700px;
}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
/* .slider-div{
    height:300px; 
} */
</style>
