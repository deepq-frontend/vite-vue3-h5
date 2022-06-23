module.exports = {
  FILE_HEADER: `/* eslint-disable */
// The file is created by the command, do not modify !!!
import { RouteRecordRaw } from 'vue-router'
export default `,
  VUE: (name: string) => {
    return `<template>
<div class='${name}'>${name}</div>
</template>
<script lang='ts' setup>
defineOptions({
  name: '${name}'
})
</script>
<style lang='scss' scoped>
</style>
`;
  }
};
