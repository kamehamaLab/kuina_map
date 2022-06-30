<template>
  <splitpanes style="height: 100vh">
  <pane size="80">
    <splitpanes horizontal>
      <pane size="75">マップ</pane>
      <pane size="25">ターミナル</pane>
    </splitpanes>
  </pane>
  <pane size="20">ログ</pane>
</splitpanes>
</template>

<script lang="ts">
//import TheWelcome from '@/components/TheWelcome.vue'
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  components: {
    Splitpanes,
    Pane,
  },
};
</script>

<style>
body{
  margin: 0%;
}

.splitpanes--vertical > .splitpanes__splitter {
  min-width: 1px;
  background: #222;
  transition: 0.1s ;
}
.splitpanes--vertical > .splitpanes__splitter:hover {
  background: #409EFF;
  transform:scale(6,1);
}
.splitpanes--horizontal > .splitpanes__splitter {
  min-height: 1px;
  background: #222;
  transition: 0.1s ;
}
.splitpanes--horizontal > .splitpanes__splitter:hover{
  background: #409EFF;
  transform:scale(1,6);
}
</style>