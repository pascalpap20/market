module.exports = {
  reactStrictMode: true,
  output: {
    // ...
    globalObject: 'this',
  },
  env: {
    NO_TELP: '6212345678910',
    DEVELOPMENT_URL: 'http://localhost:3000/api/hello'
  }
}
