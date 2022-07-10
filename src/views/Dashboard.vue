<template>
  <div>
    <div class="wrapper nav-open">
      <!-- <DashboardNotification /> -->

      <SideBar
        :sidebar-item-color="sidebarBackground"
        :sidebar-background-image="sidebarBackgroundImage"
      >
        <MobileMenu slot="content"></MobileMenu>
        <SidebarLink to="/dashboard">
          <md-icon>dashboard</md-icon>
          <p>Dashboard</p>
        </SidebarLink>
      </SideBar>

      <div class="main-panel">
        <TopNavbar></TopNavbar>
        <transition name="fade" mode="out-in">
          <ContactUsData />
        </transition>

        <!-- <dashboard-content> </dashboard-content> -->

        <DashboardContentFooter />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/SideBar";
import SidebarLink from "../components/SidebarLink";
import TopNavbar from "../components/TopNavbar";
import DashboardContentFooter from "../components/ContentFooter";
import MobileMenu from "../components/MobileMenu";
import ContactUsData from "../components/ContactUsData";

// import DashboardNotification from "../components/DashboardNotification"

export default {
  name: "Dashboard",
  components: {
    SideBar,
    SidebarLink,
    TopNavbar,
    DashboardContentFooter,
    MobileMenu,
    ContactUsData,
    // DashboardNotification
  },
  data() {
    return {
      sidebarBackground: "green",
      sidebarBackgroundImage: require("../assets/img/sidebar-2.jpg"),
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter,
.fade-leave-to .fade-leave-active {
  opacity: 0;
}
</style>
