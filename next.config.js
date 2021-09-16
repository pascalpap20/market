module.exports = {
  reactStrictMode: true,
  output: {
    // ...
    globalObject: 'this',
  },
  env: {
    NO_TELP: '6212345678910',
    DEVELOPMENT_URL: 'https://dreamy-yonath-830d20.netlify.app/api/hello'
  }
}
