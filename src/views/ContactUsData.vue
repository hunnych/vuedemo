<template>
  <div>
    <Header />
    <div v-if="users">
      <md-table
        v-model="users"
        :md-sort.sync="currentSort"
        :md-sort-order.sync="currentSortOrder"
        :md-sort-fn="customSort"
        md-card
      >
        <md-table-toolbar>
          <h1 class="md-title">Contact Us</h1>
        </md-table-toolbar>
        <Notification />
        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Name" md-sort-by="name">{{
            item.name
          }}</md-table-cell>
          <md-table-cell md-label="Email" md-sort-by="email">{{
            item.email
          }}</md-table-cell>
          <md-table-cell md-label="Action">
            <span
              @click="onSelect(item)"
              style="cursor: pointer; font-size: 20px"
              >&#x1F441;</span
            >&nbsp;&nbsp;
            <span @click="removeEntry(item.id)" style="cursor: pointer; font-size: 14px"
              >&#10060;</span
            >
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <p>{{ selected }}</p>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Modal from "@/components/Modal.vue";
import Notification from "@/components/Notification.vue";

export default {
  $inheritAttrs: false,
  name: "ContactUsData",
  components: {
    Header,
    Footer,
    Notification
  },
  data: () => ({
    currentSort: "name",
    currentSortOrder: "asc",
    users: null,
    selected: null,
  }),
  methods: {
    customSort(value) {
      return value.sort((a, b) => {
        const sortBy = this.currentSort;

        if (this.currentSortOrder === "desc") {
          return a[sortBy].localeCompare(b[sortBy]);
        }

        return b[sortBy].localeCompare(a[sortBy]);
      });
    },
    onSelect(item) {
      this.selected = item;
      this.$modal.show(
        Modal,
        { item: item },
        { draggable: true, Height: 200, width: 500 }
      );
      this.selected = null;
    },
    async removeEntry(id) {
      console.log("remove here");
      if (confirm("Do you really want to delete?")) {
          await this.$store.dispatch('RemoveContactUs',id).then(()=>{
            console.log("Remove entry called",this.$store.state.ContactUs);
            this.fetchRecords();
            // this.users = this.$store.state.ContactUs;
          });
      }
    },
    fetchRecords(){
      this.$store.dispatch("getContactUsData").then(()=>{
        this.users = this.$store.state.ContactUs;
      })
       
    }
  },
  created() {
    this.$store.dispatch("getContactUsData").then(() => {
      console.log("Created hook called",this.$store.state.ContactUs);
      this.users = this.$store.state.ContactUs;
    });
  },
};
</script>

<style>
.md-table .md-table-content {
  flex: 1;
  overflow-x: unset;
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.md-table-head {
  text-align: center;
}
</style>
