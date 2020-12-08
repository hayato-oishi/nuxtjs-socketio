<template>
  <v-container>
    <v-row dense>
      <v-col v-for="tweet in tweets" :key="tweet.index" cols="12" sm="3" md="2">
        <v-card light>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-avatar color="grey darken-3">
                <v-img
                  class="elevation-6"
                  :src="tweet.user.profile_image_url_https"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="caption">
                  {{ tweet.user.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card-actions>
          <v-card-text class="pt-1 font-weight-bold caption">
            {{ tweet.text }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import io from 'socket.io-client'
const socket = io(process.env.SOCKET)
export default {
  data() {
    return {
      tweets: []
    }
  },
  mounted() {
    socket.on('new-tweets', tweets => {
      this.tweets = tweets
    })
  }
}
</script>
