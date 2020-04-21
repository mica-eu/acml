<template>
  <div class="v-hero">
    <form class="v-form" @submit.prevent="submit">
      <div class="v-form__header">
        <h1 class="v-form__title">Código de rastreamento</h1>
        <span class="v-form__help">Seu código de rastreamento deve conter 7 digitos</span>
      </div>
      <div class="v-form__group">
        <span class="v-form__prepend">
          <font-awesome icon="barcode" />
        </span>
        <input
          class="v-form__input"
          type="text"
          name="code"
          v-model="inputCode"
          placeholder="1011011"
          autocomplete="off"
          maxlength="7"
          minlength="7"
          inputmode="numeric"
          autofocus="true"
        />
        <span class="v-form__append"></span>
      </div>
    </form>
  </div>
</template>

<script>
import FontAwesome from '@/components/FontAwesome.vue';

export default {
  name: 'Hero',
  data() {
    return {
      inputCode: null,
    };
  },
  props: ['code'],
  components: {
    FontAwesome,
  },
  methods: {
    submit() {
      this.$emit('submit', this.inputCode);
    },
  },
  mounted() {
    this.inputCode = this.code;
  },
};
</script>

<style lang="scss" scoped>
.v-hero {
  background-image: url('../assets/bg.svg');
  background-color: var(--color-primary);
  background-blend-mode: soft-light;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  padding: 1.5rem 1rem;

  .v-form {
    margin: 0 auto;
    max-width: 30rem;

    .v-form__header {
      margin-bottom: 1rem;
    }

    .v-form__title {
      font-size: 1.3rem;
      font-weight: bold;
      margin: 0 0 0.25rem 0;
      color: var(--color-black);
    }

    .v-form__help {
      font-size: 0.7rem;
      margin-bottom: 0.25rem;
      color: var(--color-black);
    }

    .v-form__input {
      width: 100%;
      padding: 0.8rem;
      font-size: 1rem;
      border: 0;
      outline: 0;
      background-color: var(--color-gray);
      border-radius: var(--border-radius);

      &:focus {
        background-color: #ffffff;
        box-shadow: var(--box-shadow);
      }
    }

    .v-form__group {
      position: relative;

      .v-form__prepend {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: #7c7d80;
      }

      .v-form__input {
        padding: 0.8rem 0.5rem 0.8rem 2.5rem;
      }
    }
  }
}

@media (min-width: 30em) {
  .v-hero {
    padding: 4rem 1rem;

    .v-form {
      max-width: 25rem;

      .v-form__title {
        font-size: 1.6rem;
      }

      .v-form__help {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
