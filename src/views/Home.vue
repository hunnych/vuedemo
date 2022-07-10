<template>
  <div class="home">
    <Header />
    <div>
      <Slider height="100px" width="2000px" />
      <!-- <h2>Content Section</h2> -->
      <Transition name="fade">
        <div class="gridMargin">
          <div class="md-layout md-gutter md-alignment-center item">
            <div class="md-layout-item md-layout md-gutter">
              <div
                class="md-layout-item md-size-33"
                v-for="item in items"
                :key="item.id"
              >
                <div class="list-item">
                  <div class="list-thumb">
                    <div class="title">
                      <h4>{{ item.name }}</h4>
                    </div>
                    <img
                      :src="item.image_path"
                      class="image"
                      alt="destination 1"
                    />
                  </div>
                  <!-- /.list-thumb -->
                  <div class="list-content">
                    <h5>{{ item.destinations }}</h5>
                    <span>{{ item.package_details }}</span>
                    <a href="#" class="price-btn">{{ item.price }} Book Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <div class="empty-div"></div>
    <div class="md-layout md-gutter md-alignment-center textMargin">
      <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item md-size-33">
          <span itemprop="name" class="md-headline"> Why EasyTrip? </span>
          <md-divider></md-divider>
          <div style="margin-top: 20px">
            <div itemprop="text">
              <span class="md-body-1"
                >Established in 2000, EasyTrip has since positioned itself as
                one of the leading companies, providing great offers,
                competitive airfares, exclusive discounts, and a seamless online
                booking experience to many of its customers. The experience of
                booking your flight tickets, hotel stay, and holiday package
                through our desktop site or mobile app can be done with complete
                ease and no hassles at all. We also deliver amazing offers, such
                as Instant Discounts, Fare Calendar, MyRewardsProgram, MyWallet,
                and many more while updating them from time to time to better
                suit our customers’ evolving needs and demands.</span
              >
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-33">
          <span itemprop="name" class="md-headline">
            Booking Flights with EasyTrip
          </span>
          <md-divider></md-divider>
          <div style="margin-top: 20px">
            <div itemprop="text">
              <span class="md-body-1"
                >At EasyTrip, you can find the best of deals and cheap air
                tickets to any place you want by booking your tickets on our
                website or app. Being India’s leading website for hotel, flight,
                and holiday bookings, EasyTrip helps you book flight tickets
                that are affordable and customized to your convenience. With
                customer satisfaction being our ultimate goal, we also have a
                24/7 dedicated helpline to cater to our customer’s queries and
                concerns. Serving over 5 million happy customers, we at EasyTrip
                are glad to fulfill the dreams of folks who need a quick and
                easy means to find air tickets. You can get a hold of the
                cheapest flight of your choice today while also enjoying the
                other available options for your travel needs with us.</span
              >
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-33">
          <span itemprop="name" class="md-headline">
            Domestic Flights with EasyTrip
          </span>
          <md-divider></md-divider>
          <div style="margin-top: 20px">
            <div itemprop="text">
              <span class="md-body-1"
                >EasyTrip is India's leading player for flight bookings. With
                the cheapest fare guarantee, experience great value at the
                lowest price. Instant notifications ensure current flight
                status, instant fare drops, amazing discounts, instant refunds
                and rebook options, price comparisons and many more interesting
                features.</span
              >
            </div>
          </div>
        </div>
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
  data() {
    return {
      items: null,
    };
  },
  methods: {
    async getTravelPlacesData() {
      await this.$store.dispatch("GetTravelPlacesData");
      this.items = await this.$store.state.TravelData;
      console.log("items", this.items);
    },
  },
  mounted() {
    this.getTravelPlacesData();
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
  font-size: 14px !important;
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
.item {
  text-align: center;
  font-size: 20px;
  transition: opacity 1s;
  animation: fade 1s;
}
.gridMargin {
  margin-left: 150px;
  margin-right: 150px;
}
.image {
  transition: transform 0.2s;
}
.image:hover {
  transform: scale(1.5);
}
.textMargin {
  text-align: center;
  background-color: #e7e7e7;
  padding: 20px;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
