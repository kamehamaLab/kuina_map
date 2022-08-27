<template>
  <splitpanes style="height: 100vh">
    <pane size="78">
      <splitpanes horizontal>
        <pane size="75"><Map></Map></pane>
        <pane size="25">ターミナル</pane>
      </splitpanes>
    </pane>
    <pane size="22">
      <el-tabs :tab-position="tabPosition" style="height: 100%">
        <el-tab-pane style="padding: 0px 0px 0px 10px;" label="Devices">
          <h3 style="margin-bottom:0px;">Devices</h3>
          <el-divider />
          <div v-for="device in devices" :key="device.id">
            <span>{{ device.name }}</span><br />
            <table class="deviceDetectionTable">
              <tbody>
                <tr>
                  <td>バッテリー残量</td>
                  <td>{{ device.remaining_bat }}%</td>
                </tr>
                <tr>
                  <td>最終検出</td>
                  <td>20XX-XX-XX</td>
                </tr>
                <tr>
                  <td>ID</td>
                  <td>{{device.id}}</td>
                </tr>
              </tbody>
            </table>
            <el-divider />
          </div>
        </el-tab-pane>
        <el-tab-pane label="Logs">Logs</el-tab-pane>
      </el-tabs>
    </pane>
  </splitpanes>
</template>

<script lang="ts">
import Map from "@/components/Map.vue";
import { affixProps } from "element-plus";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import axios from 'axios'

export default {
  components: {
    Splitpanes,
    Pane,
    Map,
  },
  data() {
    return {
      tabPosition: 'right',
      devices: [],
    }
  },
  mounted(){
    axios
      .get('/api/devices')
      .then(response => (this.devices = response.data));
  }
};
</script>

<style>
body {
  margin: 0%;
}

.el-divider--horizontal {
  margin: 10px 0 !important;
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

.deviceDetectionTable {
  border: none;
  font-size: 0.75rem;
}

.deviceDetectionTable>tbody>tr>td:nth-child(n+2) {
  padding-left: 8px;
  word-break: break-all;
}
.deviceDetectionTable>tbody>tr>td:nth-child(1) {
  white-space: nowrap;
}
</style>