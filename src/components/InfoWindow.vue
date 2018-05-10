<template>
  <div>
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
</template>

<script>
export default {
  name: 'InfoWindow',
  props: {
    Information: {
      type: Object
    }
  }

}
</script>

<style>

</style>
