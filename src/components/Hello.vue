<template>
  <div class="container">
    <div class="row">
      <div v-for='item in data' class="card col-12 col-md-4 col-sm-6" >
        <div class="card-body">
          <div class="flex-row d-flex flex-wrap mb-2">
          <span class="badge badge-warning mr-1 mb-1">{{item.ZipName_}}</span>
          <span class="badge badge-secondary mr-1 mb-1">{{item.InformDesc_}}</span>
          <span class="badge badge-info mr-1 mb-1 ">{{item.UnitName_}}</span>
          </div>
          <div class="flex-column d-flex">
          <h6 class="card-subtitle mb-2 text-muted mr-auto ">{{item.Cre_Date_}}</h6>
          <p class="card-text ">{{item.BeforeDesc_}}</p>
          </div>        
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'hello',
  /*   data () {
      return {
        datalist:[1,2,3]
      }
    }, */
  computed: {
    ...mapGetters({
      data: 'getlistData'
    })

  },
  methods: {
    ...mapActions([

    ])

  }
  ,
  created() {
    this.$store.dispatch('actionsAJAX')
  },
  mounted() {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  text-align: left;
}
.card{
  
}
</style>
