module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*' // Match any network id
    }
  },
  solc: {
    version:"native",
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
