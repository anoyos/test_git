import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Countdown from 'react-countdown';
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";


import { makeStyles } from "@mui/styles";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../../assets/jss/views/mintStyles';
import { Button } from '@mui/material';
import Plus from 'mdi-material-ui/Plus';
import Minus from 'mdi-material-ui/Minus'
import Link from '@mui/material/Link';

const useStyles = makeStyles(styles)

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

const Mint = () => {

  const classes = useStyles()

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
  const [mintAmount, setMintAmount] = useState(1);
  const [mintEnd, setMintEnd] = useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    console.log('11111', blockchain.smartContract)
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong please try again later.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const connectWallet = (e) => {
    dispatch(connect());
    getData();
  }

  return (
    <Box className={classes.container}>
      <Box className={classes.contents}>
        <Box sx={{ py: 5 }}>
          <img src='/images/mintNFT.jpg' alt="nft" width={200} style={{ borderRadius: '50%' }} />
        </Box>
        <Box className={classes.box}>
          <Typography variant='h3' sx={{ fontSize: '40px', fontWeight: 'bold', my: 2 }}>
            {
              !mintEnd && Number(data.mintDuration) > new Date().getTime() &&
              <Countdown
                date={Number(data.mintDuration)}
                // date={Date.now() + 5000}
                onComplete={() => setMintEnd(true)}
              />
            }

          </Typography>
          <Typography variant='h3' sx={{ fontSize: '40px', fontWeight: 'bold', my: 2 }}>
            {Number(data.totalSupply)} / {CONFIG.MAX_SUPPLY}
          </Typography>
          <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2 }}>
            {truncate(CONFIG.CONTRACT_ADDRESS, 15)}
          </Typography>
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY || mintEnd ? (
            <>
              <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2 }}>
                The sale has ended.
              </Typography>
              <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2 }}>
                You can still find {CONFIG.NFT_NAME} on
              </Typography>
              <Box sx={{ my: 2 }}>
                <Link href={CONFIG.MARKETPLACE_LINK} className={classes.buttonLink} sx={{ my: 2 }}>
                  <Button variant="contained" className={classes.button} onClick={(e) => e.preventDefault()}>
                    {CONFIG.MARKETPLACE}
                  </Button>
                </Link>
              </Box>
            </>
          ) : (
            <>
              <Typography variant='h3' sx={{ fontSize: '28px', fontWeight: 'bold', my: 2 }}>
                1 {CONFIG.SYMBOL} token costs {CONFIG.DISPLAY_COST} {CONFIG.NETWORK.SYMBOL}
              </Typography>
              <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2 }}>
                Excluding gas fees
              </Typography>
              {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                <>
                  <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2 }}>
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </Typography>
                  <Box sx={{ my: 3 }}>
                    <Button
                      variant="contained"
                      disabled={data.totalSupply === CONFIG.MAX_SUPPLY ? true : false}
                      className={classes.button}
                      onClick={() => connectWallet()}
                    >
                      {data.totalSupply === CONFIG.MAX_SUPPLY ? "SOLD OUT" : "CONNECT"}
                    </Button>
                  </Box>
                  {blockchain.errorMsg !== "" ? (
                    <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2, color: 'red' }}>
                      {blockchain.errorMsg}
                    </Typography>
                  ) : null}
                </>
              ) : (
                <Box>
                  <Typography variant='h3' sx={{ fontSize: '16px', fontWeight: 'bold', my: 2 }}>
                    {feedback}
                  </Typography>
                  <Box display='flex' justifyContent='center' alignItems='center'>
                    <Box
                      disabled={claimingNft ? 1 : 0}
                      className={classes.calButton}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      <Plus />
                    </Box>
                    <Typography variant='h5' sx={{ fontSize: '16px', fontWeight: 'bold', m: 2 }}>
                      {mintAmount}
                    </Typography>
                    <Box
                      disabled={claimingNft ? 1 : 0}
                      className={classes.calButton}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      <Minus />
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    className={classes.button}
                    sx={{ my: 2 }}
                    onClick={() => claimNFTs()}
                    disabled={claimingNft ? true : false}
                  >
                    {claimingNft ? "MINTING" : "MINT"}
                  </Button>
                </Box>
              )}
            </>
          )}
        </Box>
        <Typography variant='h3' sx={{ fontSize: '20px', m: 4, py: 3, maxWidth: 800 }}>
          Please make sure you are connected to the right network (Ethereum Mainnet) and the correct address. Please note: Once you press mint, you cannot undo this action.
        </Typography>
      </Box>
    </Box>
  );
}

export default Mint;
