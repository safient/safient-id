import { BigNumber, providers, utils } from 'ethers'

const generateMessageForEntropy = (username) => {
    const data = JSON.stringify({
        types: {
            EIP712Domain: [
                { name: 'name', type: 'string' },
                { name: 'version', type: 'string' },
            ],
            Permit: [{ name: 'username', type: 'string' }],
        },
        domain: {
            name: 'Sybil Verifier',
            version: '1',
        },
        primaryType: 'Permit',
        message: {
            username: username,
        },
    })
    return data;
  }

  const getSigner = async () => {
    if (!window.ethereum) {
      throw new Error(
        'Ethereum is not connected. Please download Metamask from https://metamask.io/download.html'
      );
    }

    console.debug('Initializing web3 provider...');
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return signer
  }

  export const getProvider = async () => {
    if (!window.ethereum) {
      throw new Error(
        'Ethereum is not connected. Please download Metamask from https://metamask.io/download.html'
      );
    }

    console.debug('Initializing web3 provider...');
    window.ethereum.enable()
    const provider = new providers.Web3Provider(window.ethereum);
    return provider
  }

  const getAddressAndSigner = async() => {
    const signer = await getSigner()
    // @ts-ignore
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    if (accounts.length === 0) {
      throw new Error('No account is provided. Please provide an account to this application.');
    }
    const address = accounts[0];
    return {address, signer}
  }

  export const generateSignature = async (username, provider) => {
    let signedText;
    let address
      if(provider){
      const signer = provider.getSigner();
      address = await signer.getAddress();
      const message = generateMessageForEntropy(username)
      signedText = await signer.signMessage(message);
      }
      else{
        const metamask = await getAddressAndSigner()
        const message = generateMessageForEntropy(username)
        signedText = await metamask.signer.signMessage(message);
        address=metamask.address
      }
    return {signature: signedText, address:address}
  }