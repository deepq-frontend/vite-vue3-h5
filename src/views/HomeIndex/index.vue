<template>
  <div class="home-index app-container flex-box flex-center">
    <img src="@/assets/images/home-page.png" alt="" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomeIndex'
});
</script>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.home-index {
  img {
    width: 80%;
  }
}
</style>
