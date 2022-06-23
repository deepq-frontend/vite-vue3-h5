<script lang="ts">
import { defineComponent, h } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default defineComponent({
  name: 'RedirectIndex',
  render() {
    return h('i');
  }
});
</script>

<script lang="ts" setup>
const route = useRoute();
const router = useRouter();

const { params, query } = route;
const { path } = params;
router.replace({ path: '/' + path, query });
</script>
