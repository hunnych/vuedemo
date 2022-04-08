<template>
  <div class="home">
    <Header />
    <div>
      <Slider height="100px" width="2000px" />
      <!-- <h2>Content Section</h2> -->
      <div class="md-layout md-gutter">
        <div class="md-layout-item"></div>
        <div class="md-layout-item">
          <div class="list-item">
            <div class="list-thumb">
              <div class="title">
                <h4>Italy</h4>
              </div>
              <img src="destination_1.jpg" alt="destination 1" />
            </div>
            <!-- /.list-thumb -->
            <div class="list-content">
              <h5>Rome, Milan, Naples</h5>
              <span>SILVER HOTEL, 4 NIGHTS, 5 STARS</span>
              <a href="#" class="price-btn">$1,700 Book Now</a>
            </div>
          </div>
        </div>
        <div class="md-layout-item">
          <div class="list-item">
            <div class="list-thumb">
              <div class="title">
                <h4>France</h4>
              </div>
              <img src="destination_2.jpg" alt="destination 2" />
            </div>
            <!-- /.list-thumb -->
            <div class="list-content">
              <h5>Paris, Marseille, Lyon</h5>
              <span>NEW PALACE, 5 NIGHTS, 5 STARS</span>
              <a href="#" class="price-btn">$2,200 Book Now</a>
            </div>
            <!-- /.list-content -->
          </div>
        </div>
        <div class="md-layout-item">
          <div class="list-item">
            <div class="list-thumb">
              <div class="title">
                <h4>Germany</h4>
              </div>
              <img src="destination_3.jpg" alt="destination 3" />
            </div>
            <!-- /.list-thumb -->
            <div class="list-content">
              <h5>Berlin, Hamburg, Munich</h5>
              <span>LUXE HOTEL, 5 NIGHTS, 6 STARS</span>
              <a href="#" class="price-btn">$3,300 Book Now</a>
            </div>
            <!-- /.list-content -->
          </div>
        </div>
        <div class="md-layout-item"></div>
      </div>
      <div class="md-layout md-gutter">
        <div class="md-layout-item"></div>
        <div class="md-layout-item">
          <div class="list-item">
            <div class="list-thumb">
              <div class="title">
                <h4>Spain</h4>
              </div>
              <img src="destination_4.jpg" alt="destination 4" />
            </div>
            <!-- /.list-thumb -->
            <div class="list-content">
              <h5>Madrid, Bercelona, Valencia</h5>
              <span>GOOD HOTEL, 4 NIGHTS, 6 STARS</span>
              <a href="#" class="price-btn">$4,400 Book Now</a>
            </div>
            <!-- /.list-content -->
          </div>
        </div>
        <div class="md-layout-item">
          <div class="list-item">
            <div class="list-thumb">
              <div class="title">
                <h4>Netherlands</h4>
              </div>
              <img src="destination_5.jpg" alt="destination 5" />
            </div>
            <!-- /.list-thumb -->
            <div class="list-content">
              <h5>Amsterdam, Delft, The Hague</h5>
              <span>BEST HOTEL, 6 NIGHTS, 7 STARS</span>
              <a href="#" class="price-btn">$5,500 Book Now</a>
            </div>
            <!-- /.list-content -->
          </div>
        </div>
        <div class="md-layout-item">
          <div class="list-item">
            <div class="list-thumb">
              <div class="title">
                <h4>Switzerland</h4>
              </div>
              <img src="destination_6.jpg" alt="destination 6" />
            </div>
            <!-- /.list-thumb -->
            <div class="list-content">
              <h5>Zürich, Geneva, Basel</h5>
              <span>NEW HOTEL, 7 NIGHTS, 7 STARS</span>
              <a href="#" class="price-btn">$6,600 Book Now</a>
            </div>
          </div>
        </div>
        <div class="md-layout-item"></div>
      </div>
    </div>
    <div class="empty-div"></div>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Slider from "@/components/Slider.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Slider,
  },
};
</script>

<style scoped>
.list-item {
  overflow: hidden;
  margin: 0 15px;
}

.list-item .list-thumb {
  overflow: hidden;
}

.list-item .list-thumb .title {
  background-color: #9ed034;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  height: 50px;
  text-align: center;
}

.list-item .list-thumb .title h4 {
  color: #fff;
  line-height: 50px;
}

.list-item .list-thumb img {
  width: 100%;
}

.list-item .list-content h5 {
  color: #9ed034;
  font-weight: 600;
  font-size: 14px;
  margin: 15px 0 5px 0;
}

.list-item .list-content span {
  color: #e54747;
  font-weight: 300;
  text-transform: uppercase;
  margin: 0 0 15px 0;
}

.list-item .list-content a.price-btn {
  display: block;
  background-color: #9ed034;
  color: #fff;
  padding: 12px;
  text-align: center;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
}

.list-item .list-content a.price-btn:hover {
  background-color: #90be2c;
}
.empty-div {
  height: 100px;
}
</style>
