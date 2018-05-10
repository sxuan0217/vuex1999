<template>
  <select 
    name="ZipSelect" 
    id="ZipSelect"
    class="custom-select custom-select-lg mb-3 ZipSelect"
    v-model="ChosenZip"
    >
    <option value="" selected>請選擇行政區</option>
    <option 
      v-for='(item,i) in CleanZipArray' 
      :key='i' 
      :value="item">
      {{item}}
    </option>
  </select>
</template>

<script>
export default {
  name: 'ZipSelect',
  props: {
    CleanZipArray: {
      types: Array
    }
  },
  data () {
    return {
      ChosenZip: ''
    }
  },
  watch: {
    ChosenZip () {
      this.$emit('input', this.ChosenZip)
    }
  }
}
</script>

<style>
  .ZipSelect {
    width: 100%;
  }
</style>
