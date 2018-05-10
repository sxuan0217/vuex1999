<template>
  <div 
    class="card col-12 col-md-5 col-sm-5 mb-3"
    :class='{"hidden-card": Information === ""}'>
    <div v-if='Information !== ""' class="card-body">
      <div class="flex-row d-flex flex-wrap mb-2">
      <span class="badge badge-warning mr-1 mb-1">{{Information.ZipName_}}</span>
      <span class="badge badge-secondary mr-1 mb-1">{{Information.InformDesc_}}</span>
      <span class="badge badge-info mr-1 mb-1 ">{{Information.UnitName_}}</span>
      </div>
      <div class="flex-column d-flex">
      <h6 class="card-subtitle mb-2 text-muted mr-auto ">{{Information.Cre_Date_}}</h6>
      <p class="card-text ">{{Information.BeforeDesc_}}</p>
      </div>        
    </div>
    <div v-else class="card-body">
      <div class="flex-row d-flex flex-wrap mb-2">
      <span class="badge badge-warning mr-1 mb-1"></span>
      <span class="badge badge-secondary mr-1 mb-1"></span>
      <span class="badge badge-info mr-1 mb-1 "></span>
      </div>
      <div class="flex-column d-flex">
      <h6 class="card-subtitle mb-2 text-muted mr-auto "></h6>
      <p class="card-text "></p>
      </div>        
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoCard',
  props: {
    Information: {
      types: Object,
      default () {
        return ""
      }
    }
  }

}
</script>

<style>
  .hidden-card{
    visibility: hidden;
  }
</style>
