<template>
  <div class="container">
    <div>
      <ZipSelect
        v-model="Zip"
        :CleanZipArray='ZipArray'></ZipSelect>
    </div>
      <!-- 為什麼Gmap要用到v-if呢? -->
      <!-- 因為loading會在獲取資料後才會變成false -->
      <!-- 這之前是沒有資料的 -->
      <!-- 沒有資料center拿到的就會是undefined -->
      <!-- 所以需要再loading後再渲染Gmap -->
      <!-- 這時center就會有資料了 -->
      <GmapMap
      v-if='!loading' 
      :center="{lat:+isCenterMarkerFilterArray[0].Lat_, 
                lng:+isCenterMarkerFilterArray[0].Lng_}"
      :zoom="13"
      map-type-id="roadmap"
      style="width: 100%; height: 300px"
      class='mb-3'>
      <gmap-info-window 
        :options="infoOptions" 
        :position="infoWindowPos" 
        :opened="infoWinOpen" 
        @closeclick="infoWinOpen=false">
        <info-window 
        :Information='infoContent'>
        </info-window>
      </gmap-info-window>
      <GmapMarker
        v-if='item.Lat_ !== "" && item.Lng_ !== ""'
        :key="i"
        v-for="(item, i) in isZipFilterArray"
        :position="{lat: +item.Lat_,
                    lng: +item.Lng_}"
        :clickable="true"
        :draggable="false"
        @click="toggleInfoWindow(item,i)"
      />
    </GmapMap>
    <div class="row justify-content-around custom-row">
      <Card 
        v-for='item in isZipFilterArray' 
        :key='item.FileNo' 
        :Information='item'></Card>
      <Card></Card>
      <Card></Card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './Card'
import ZipSelect from './ZipSelect'
import InfoWindow from './InfoWindow'

export default {
  name: 'MainPage',
  components: {
    Card,
    ZipSelect,
    InfoWindow
  },
  data() {
    return {
      Zip: '', // 選擇的行政區
      infoContent: {}, // 資訊欄內容
      infoWindowPos: null, // 資訊欄定位
      infoWinOpen: false, // 資訊欄開啟
      currentMidx: null, // marker 的 index
      infoOptions: { // 視窗設定
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
    }
  },
  computed: {
    ...mapGetters({
      listData: 'getlistData',
      loading:'getLoading'
    }),
    ZipArray () { //去重並回傳行政區
      let isDirtyZipArray = this.listData.map(obj => obj.ZipName_);
      let isCleanZipArray = new Set();
      isDirtyZipArray.map(obj => !isCleanZipArray.has(obj) ? isCleanZipArray.add(obj) : false)
      return [...isCleanZipArray]
    },
    isZipFilterArray () { // 依照選擇區域回傳
        if(this.listData.filter(obj => obj.ZipName_ === this.Zip).length !== 0) {
          return this.listData.filter(obj => obj.ZipName_ === this.Zip)
        } else {
          return this.listData
        }
    },
    isCenterMarkerFilterArray () { //避免讓沒有經緯度的資料成為googleMap center
      return this.isZipFilterArray.filter(obj => obj.Lat_ !== '' && obj.Lng_ !== '')
    }
  },
  methods: {
    toggleInfoWindow (marker, idx) {
      const position = { // 因為資料的經緯度不是傳物件，所以在這裡把它組成插件所需要的資料格式
        lat: +marker.Lat_,
        lng: +marker.Lng_,
      };
      this.infoWindowPos = position;
      this.infoContent = marker;
      // 如果是相同marker id 等於關閉
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      } else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
  created() {
    this.$store.dispatch('actionsAJAX');
  },
  mounted() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
td {
  text-align: left;
}
.custom-row{
  margin-right: 0px;
  margin-left: 0px;
}
</style>
