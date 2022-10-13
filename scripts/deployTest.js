/* global ethers web3 */

async function main() {
  // We get the contract to deploy
  const Test = await ethers.getContractFactory('Test');
  console.log('Deploying Test...');
  const instance = await Test.deploy();
  await instance.deployed();
  // console.log('Test deployed to:', instance.address);

  const address = instance.address;
  const hash = instance.deployTransaction.hash;
  const trx = await web3.eth.getTransaction(instance.deployTransaction.hash);
  const block = trx.blockNumber;
  console.log(`Test is deployed at: ${address} | block = ${block} | hash = ${hash}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
