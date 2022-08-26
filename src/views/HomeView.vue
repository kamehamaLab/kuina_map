<template>
  <splitpanes style="height: 100vh">
    <pane size="80">
      <splitpanes horizontal>
        <pane size="75"><Map :center="center" :markers="markers"></Map></pane>
        <pane size="25">ターミナル</pane>
      </splitpanes>
    </pane>
    <pane size="20">
      <el-tabs :tab-position="tabPosition" style="height: 100%">
        <el-tab-pane label="Devices">Devices
          <el-button v-on:click="addPin">Default</el-button>
        </el-tab-pane>
        <el-tab-pane label="Logs">Logs</el-tab-pane>
      </el-tabs>
    </pane>
  </splitpanes>
</template>

<script lang="ts">
import Map from "@/components/Map.vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  components: {
    Splitpanes,
    Pane,
    Map,
  },
  data() {
    return {
      tabPosition: 'right',
      counter:0,
      center: { lat: 26.573824362797634, lng: 128.11595295531532 },
      markers: [
        {
          position: {
            lat: 26.573824362797634, lng: 128.11595295531532
          },
        },
      ],
    }
  },
  methods: {
    addPin: function () {
      this.counter += 1;
      var _lat = 26.573824362797634 + 0.01*this.counter;
      var newPos = {position:{lat: _lat, lng: 128.11595295531532}};
      this.center = newPos.position;
      this.markers.push(newPos);
    }
  },
};
</script>

<style>
body {
  margin: 0%;
}

.splitpanes--vertical>.splitpanes__splitter {
  min-width: 3px;
  background: #222;
  transition: 0.1s;
}

.splitpanes--vertical>.splitpanes__splitter:hover {
  background: #409eff;
  transform: scale(2.4, 1);
}

.splitpanes--horizontal>.splitpanes__splitter {
  min-height: 3px;
  background: #222;
  transition: 0.1s;
}

.splitpanes--horizontal>.splitpanes__splitter:hover {
  background: #409eff;
  transform: scale(1, 2.4);
}
</style>