const main = async () => {
  const ethers = hre.ethers

  const waveContractFactory = await ethers.getContractFactory('WavePortal')
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther('0.001')
  })
  await waveContract.deployed()

  console.log(`WavePortal address: ${waveContract.address}`)
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();