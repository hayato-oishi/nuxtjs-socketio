/**
 * Twitter Config Class
 */
const TwitterLite = require('twitter-lite')
const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_SECRET
} = process.env

interface TwitterConfigInterface {
  consumerKey: string
  consumerSecretKey: string
  accessTokenKey: string
  accessTokenSecret: string
}

class TwitterConfig implements TwitterConfigInterface {
  consumerKey = ''
  consumerSecretKey = ''
  accessTokenKey = ''
  accessTokenSecret = ''

  constructor(
    consumerKey: string,
    consumerSecretKey: string,
    accessTokenKey: string,
    accessTokenSecret: string
  ) {
    this.consumerKey = consumerKey
    this.consumerSecretKey = consumerSecretKey
    this.accessTokenKey = accessTokenKey
    this.accessTokenSecret = accessTokenSecret
  }

  private getConsumerKey(): string {
    return this.consumerKey
  }

  private getConsumerSecretKey(): string {
    return this.consumerSecretKey
  }

  private getAccessTokenKey(): string {
    return this.accessTokenKey
  }

  private getAccessTokenSecret(): string {
    return this.accessTokenSecret
  }

  public getClient(): Object {
    return new TwitterLite({
      consumer_key: this.getConsumerKey(),
      consumer_secret: this.getConsumerSecretKey(),
      access_token_key: this.getAccessTokenKey(),
      access_token_secret: this.getAccessTokenSecret()
    })
  }
}

module.exports = new TwitterConfig(
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_SECRET
)
