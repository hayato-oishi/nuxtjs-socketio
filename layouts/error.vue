<template>
  <v-app>
    <v-main>
      <div>
        {{ error }}
      </div>
      <div>
        <a href="/">
          ログイン画面へ戻る
        </a>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  layout: 'public',
  scrollToTop: true,
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>
