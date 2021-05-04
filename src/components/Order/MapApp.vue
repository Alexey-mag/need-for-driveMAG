<template>
  <div class="location__map__container">
    <yandex-map
      v-if="mapStatus && getCity"
      :settings="settings"
      :coords="coords"
      :zoom="zoom"
      style="height: 100%; width: 100%"
    >
      <ymap-marker
        v-for="point in getPoints"
        :key="point.id"
        :marker-id="point.id"
        :coords="point.coords"
        :icon="markerIcon"
        :hint-content="`${point.name},  ${point.address}`"
        @click="markerOnCenter(point)"
      />
    </yandex-map>
    <Loader v-if="loading"/>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { mapGetters } from "vuex";
import Loader from '../Loader';

export default {
  name: "MapApp",
  components: { yandexMap, ymapMarker, Loader },
  data() {
    return {
      settings: {
        apiKey: "a77bd471-3a16-4a8c-8604-aa8285380d79",
        lang: "ru_RU",
        coordorder: "longlat",
        version: "2.1"
      },
      zoom: 12,
      markerIcon: {
        layout: "default#imageWithContent",
        imageHref: "/images/map_marker.svg",
        imageSize: [18, 18],
        imageOffset: [0, 0]
        // content: this.address,
        // contentOffset: [0, 15],
        // contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      }
    };
  },
  computed: {
    ...mapGetters("order", ["getPoints", "getPoint", "getCity"]),
    ...mapGetters("shared", ["loading", "mapStatus"]),
    coords() {
      return this.getPoint ? this.getPoint.coords : this.getCity.coords;
    }
    // zoom() {
    //     return this.getPoint ? 17 : 12
    // }
  },
  methods: {
    markerOnCenter(point) {
      this.$store.dispatch("order/setPoint", point);
      // this.zoom = 17
    }
  }
};
</script>

<style scoped>
.location__map__container {
  width: 100%;
  height: calc(100vh / 25 * 11);
}
</style>
