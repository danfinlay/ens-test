var Web3 = require('web3')
var ENS = require('ethereum-ens')
var web3 = new Web3()
web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io/ens-test'))
render('setup web3')

var ensAddress = '0x112234455c3a32fd11230c42e7bccd4a84e02010'
var knownName = 'vitalik.eth'
var knownAddress = '0x5f8f68a0d1cbc75f6ef764a44619277092c32df0'

var ens = new ENS(web3, ensAddress)
render('ens created.')

render('resolving for ' + knownName)
ens.resolver(knownName).addr()
.then((address) => {
  render('returned! ' + address)
  if (address === knownAddress) {
    render('hooray!')
  } else {
    render('We resolved a different address: ' + address)
  }
})
.catch((reason) => {
  render('There was a problem: ' + reason.message)
})

function render (text) {
	document.body.innerHTML = text
}
