<template>
  <div class="v-timeline-card">
    <div class="v-timeline-card__date">
      <font-awesome class="v-timeline-card__icon" icon="clock" /> <span>{{ event.date }}</span>
    </div>
    <div class="v-timeline-card__status">
      <font-awesome class="v-timeline-card__icon" icon="truck" />
      <span>{{ event.status.split('-')[1].trim() }}</span>
    </div>
    <div class="v-timeline-card__location">
      <font-awesome class="v-timeline-card__icon" icon="map-marked" />
      <span>{{ event.location }}</span>
    </div>
  </div>
</template>

<script>
import FontAwesome from '@/components/FontAwesome.vue';

export default {
  name: 'Timeline',
  props: {
    event: {
      type: Object,
      required: true,
      // validate:
    },
  },
  components: {
    FontAwesome,
  },
};
</script>

<style lang="scss" scoped>
.v-timeline-card {
  background-color: var(--color-gray);
  border-radius: var(--border-radius);
  padding: 1rem 0.8rem;
  width: 100%;
  box-shadow: var(--box-shadow);
  font-size: 0.8rem;
  color: var(--color-black);

  & > div:not(:last-child) {
    margin-bottom: 0.5rem;
    display: flex;
  }

  .v-timeline-card__status span {
    font-weight: 600;
  }

  .v-timeline-card__icon {
    margin-right: 0.35rem;
    margin-top: 0.12rem;
  }
}

@media (min-width: 30em) {
  .v-timeline-card {
    padding: 1.5rem 1rem;
  }
}
</style>
