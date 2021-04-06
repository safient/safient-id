import { BigNumber, providers, utils } from 'ethers'
import { hashSync } from 'bcryptjs'

import { EthereumAuthProvider } from '@ceramicnetwork/blockchain-utils-linking'
import WalletConnectProvider from '@walletconnect/web3-provider'

import { hash } from '@stablelib/sha256'
import { fromString, toString } from 'uint8arrays'

const generateMessageForEntropy = (ethereum_address, application_name) => {
  return (
    '******************************************************************************** \n' +
    'READ THIS MESSAGE CAREFULLY. \n' +
    'DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND WRITE \n' +
    'ACCESS TO THIS APPLICATION. \n' +
    'DO NOT SIGN THIS MESSAGE IF THE FOLLOWING IS NOT TRUE OR YOU DO NOT CONSENT \n' +
    'TO THE CURRENT APPLICATION HAVING ACCESS TO THE FOLLOWING APPLICATION. \n' +
    '******************************************************************************** \n' +
    'The Ethereum address used by this application is: \n' +
    '\n' +
    ethereum_address.value +
    '\n' +
    '\n' +
    '\n' +
    'By signing this message, you authorize the current application to use the \n' +
    'following app associated with the above address: \n' +
    '\n' +
    application_name +
    '\n' +
    '\n' +
    '\n' +
    'The hash of your non-recoverable, private, non-persisted password or secret \n' +
    'phrase is: \n' +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '******************************************************************************** \n' +
    'ONLY SIGN THIS MESSAGE IF YOU CONSENT TO THE CURRENT PAGE ACCESSING THE KEYS \n' +
    'ASSOCIATED WITH THE ABOVE ADDRESS AND APPLICATION. \n' +
    'AGAIN, DO NOT SHARE THIS SIGNED MESSAGE WITH ANYONE OR THEY WILL HAVE READ AND \n' +
    'WRITE ACCESS TO THIS APPLICATION. \n' +
    '******************************************************************************** \n'
  );
}

function toHex(bytes) {
    return toString(bytes, 'base16')
  }

  const _authCreate = async (authProvider) => {
    const accountId = (await authProvider.accountId()).toString()
    const message = 'Add this account as a Ceramic authentication method'
    const authSecret = await authProvider.authenticate(message)
    const entropy = hash(fromString(authSecret.slice(2)))
    localStorage.setItem("Accounts", toHex(entropy))
    return entropy
  }


  export const generateAuth = async (web3Modal) => {
   
  
      const ethProvider = await web3Modal.connect()
      const addresses = await ethProvider.enable()
      const authProvider = new EthereumAuthProvider(ethProvider, addresses[0])
      const accountId = (await authProvider.accountId()).toString()
      const authSecret = await _authCreate(authProvider);
      return {authProvider, accountId, authSecret}
  }

  export const generateIdentity = async (web3Provider) => {

      const signer = web3Provider.getSigner();
      const userAddress = await signer.getAddress();
      const message = generateMessageForEntropy(userAddress, 'Portex')
      const signedText = await signer.signMessage(message);
      const providerUsed = web3Provider
          
      const hash = utils.keccak256(signedText);
      const authSecret = hash
        // @ts-ignore
        .replace('0x', '')
        // @ts-ignore
        .match(/.{2}/g)
        .map((hexNoPrefix) => BigNumber.from('0x' + hexNoPrefix).toNumber())
      return {authSecret, providerUsed}
  }