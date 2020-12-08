const twitter = require('../config/twitter')

const toDatetimeTokyo = (datetime: string) => {
  const options = {
    timeZone: 'Asia/Tokyo',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }
  return new Date(datetime).toLocaleDateString('ja', options)
}

export default {
  async search(query: string) {
    try {
      const client = twitter.getClient()
      let temp: any = []
      temp = await client.get('search/tweets', {
        q: query,
        lang: 'ja',
        locale: 'ja',
        result_type: 'recent',
        count: 100
      })
      const tweets = temp.statuses.filter(
        (tweet: any) => !tweet.text.includes('RT @')
      )
      const result: any = tweets.map((tweet: any) => {
        tweet.created_at = toDatetimeTokyo(tweet.created_at)
        return tweet
      })
      return result
    } catch {
      throw new Error('tweetsの取得に失敗しました。')
    }
  }
}
