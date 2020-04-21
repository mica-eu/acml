<template>
  <font-awesome-icon :icon="icon" />
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export default {
  name: 'FontAwesome',
  components: {
    FontAwesomeIcon,
  },
  props: ['icon'],
};
</script>
