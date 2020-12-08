declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly CONSUMER_KEY: string
    readonly CONSUMER_SECRET: string
    readonly ACCESS_TOKEN_KEY: string
    readonly ACCESS_TOKEN_SECRET: string
  }
}
