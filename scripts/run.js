const main = async () => {
  const ethers = hre.ethers
  const waveContractFactory = await ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy({
    value: ethers.utils.parseEther("0.1"),
  });
  await waveContract.deployed();
  console.log(`Contract add by: ${waveContract.address}`);

  /**
   * Get Contract balance 
   */
  let contractBalance = await ethers.provider.getBalance(
    waveContract.address
  );
  console.log(`Contract balance: ${ethers.utils.formatEther(contractBalance)}`)

  /**
   * Send Wave
   */
  const waveTxn1 = await waveContract.wave('A message! #1')
  await waveTxn1.wait()

  const waveTxn2 = await waveContract.wave('A message! #2')
  await waveTxn2.wait()

  /**
   * Get Contrat balance to see what happened!
   */
  contractBalance = await ethers.provider.getBalance(waveContract.address)
  console.log(`Contract balance: ${ethers.utils.formatEther(contractBalance)}`)

  let allWaves = await waveContract.getAllWaves()
  console.log(allWaves)
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