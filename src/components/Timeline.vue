<template>
  <div class="v-timeline">
    <ul class="v-list">
      <li class="v-list__item" v-for="(event, key) in events" :key="key">
        <div class="v-list__item__contanier">
          <timeline-card :event="event" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TimelineCard from '@/components/TimelineCard.vue';

export default {
  name: 'Timeline',
  props: {
    events: {
      type: Array,
      required: true,
      // validate:
    },
  },
  components: {
    TimelineCard,
  },
};
</script>

<style lang="scss" scoped>
.v-timeline {
  background-color: var(--color-black);
  flex: 1 1 auto;
  padding: 2rem 1rem;

  .v-list {
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 0;
    max-width: 30rem;
    list-style: none;

    &:before {
      content: '';
      position: absolute;
      width: 0.25rem;
      height: 100%;
      top: 0;
      left: 0.65rem;
      background-color: var(--color-gray);
      border-radius: 9999px;
    }

    .v-list__item {
      position: relative;
      margin-bottom: 1.5rem;

      &:before {
        content: '';
        position: absolute;
        width: 1.5rem;
        height: 1.5rem;
        z-index: 9999;
        border: 0.25rem solid var(--color-black);
        background-color: var(--color-white);
        border-radius: 9999px;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
      }

      .v-list__item__contanier {
        margin-left: 2rem;
      }
    }
  }
}

@media (min-width: 30em) {
  .v-timeline .v-list {
    max-width: 25rem;

    .v-list__item {
      margin-bottom: 2.5rem;
    }
  }
}
</style>
