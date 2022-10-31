import React from 'react';

import { makeStyles } from "@mui/styles";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../../assets/jss/views/homeStyles';
import { Button, Grid } from '@mui/material';

import Twitter from 'mdi-material-ui/Twitter'
import Discord from 'mdi-material-ui/Discord'

const useStyles = makeStyles(styles)

const Home = () => {

  const classes = useStyles()
  const contractAddress = '0x3k3k3j3j4k5jm6m6m767n5j4j4k4l3l3';
  const communityAddress = '0x9c3Ce8721a275C9C1e14aBEfdCC16d973FCA3c21';

  return (
    <Box className={classes.container}>
      <Box className={classes.contents}>

        {/* Header section start */}
        <Box className={classes.header}>
          <img src="/images/logo.jpg" alt="logo" width={80} />
        </Box>
        {/* Header section end */}

        {/* Main background section start */}
        <Box className={classes.mainBackground}>
          <img src="/images/background1.png" alt="background" width='100%' style={{ borderRadius: '15px' }} />
        </Box>
        {/* Main background section end */}

        {/* Mint section start */}
        <Box className={classes.mint}>
          <Grid container spacing={2} rowSpacing={1}>
            <Grid item xs={12} md={6} lg={6} sx={{ my: 4 }}>
              <img src='/images/gif1.gif' alt="gif1" width='100%' />
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ my: 4 }}>
              <Typography variant='h3'>
                Get your y00ts Anchor Club NFT
              </Typography>
              <Typography variant='h5' sx={{ my: 2 }}>
                Get your y00ts Anchor Club NFT (free mint + gas) by holding a y00ts Yacht Club NFT. You will receive the same exact token ID, with the same traits, and you will now have access to the y00ts Anchor Club ecosystem.
              </Typography>
              <Box sx={{ my: 3 }}>
                <Link href='/mint' className={classes.buttonLink}>
                  <Button variant="contained" className={classes.button}>
                    Mint
                  </Button>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
        {/* Mint section end */}

        {/* BuyOpensea section start */}
        <Box className={classes.buyOpensea}>
          <Grid container spacing={2} rowSpacing={1}>
            <Grid item xs={12} md={6} lg={6} sx={{ my: 4 }}>
              <Typography variant='h3'>
                What is y00ts Anchor Club?
              </Typography>
              <Typography variant='h5' sx={{ my: 2 }}>
                y00ts Anchor Club is a community-driven project born from the ashes of y00ts Yacht Club. The community was abandoned by the original team and left to die. But that’s not what happened. The community joined together and picked up the pieces. A new project was forged - a project by the people & for the people. The anchor was dropped and the anchor always hodls despite the storm.
              </Typography>
              <Box>
                <Link href='https://opensea.io/en-US/collection/y00ts-yacht-club' target="_blank">
                  <Button variant="contained" className={classes.button}>
                    Buy on OpenSea
                  </Button>
                </Link>
              </Box>
              <Box sx={{ my: 2 }}>
                <Link href='https://nftx.io/vault/0xccae5f1e4a9728e464307b4c702b2f4c9f8d71e3/buy/' target="_blank">
                  <Button variant="contained" className={classes.button}>
                    Buy From NFTX Pool
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={{ my: 4 }}>
              <img src='/images/gif2.gif' alt="gif2" width='100%' style={{ borderRadius: '20px' }} />
            </Grid>
          </Grid>
        </Box>
        {/* BuyOpensea section end */}

        {/* About NFT section start */}
        <Box className={classes.aboutNFT}>
          <Box>
            <Typography variant='h3'>
              IP Rights & Royalties
            </Typography>
            <Typography variant='h5' sx={{ my: 2 }}>
              Your y00ts Anchor Club NFT is your key into the y00ts Anchor Club ecosystem. You own all IP and possess all commercial rights to the NFT artwork. Rights are transferred to the new owner when a y00ts Anchor Club NFT is sold on secondary. There is a 10% royalty on all secondary transactions that will be used to fund the community wallet. Join our Discord and learn more!
            </Typography>
          </Box>
          <Box>
            <Link href='https://discord.gg/4VcbnR7MuK' target="_blank">
              <Button variant="contained" className={classes.button}>
                JOIN THE DISCORD
              </Button>
            </Link>
          </Box>
        </Box>
        {/* About NFT section end */}

        {/* Team section start */}
        <Box className={classes.teams}>
          <Typography variant='h3' sx={{ my: 5 }}>
            TEAM
          </Typography>
          <Grid container spacing={2} rowSpacing={2} display='flex' justifyContent='center'>
            <Grid item xs={12} md={4} lg={2}>
              <Box >
                <img src='/images/smokethatdank1.png' alt="smokethatdank1" width="100%" style={{ borderRadius: '30px' }} />
              </Box>
              <Typography variant='h4' sx={{ mt: 2 }}>
                @smokethatdank1
              </Typography>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Co-Founder
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Box >
                <img src='/images/creamcurtis.png' alt="creamcurtis" width="100%" style={{ borderRadius: '30px' }} />
              </Box>
              <Typography variant='h4' sx={{ mt: 2 }}>
                @creamcurtis
              </Typography>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Co-Founder
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Box >
                <img src='/images/gorkulus.png' alt="gorkulus" width="100%" style={{ borderRadius: '30px' }} />
              </Box>
              <Typography variant='h4' sx={{ mt: 2 }}>
                @gorkulus
              </Typography>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Advisor
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Box >
                <img src='/images/HaiJakd.png' alt="HaiJakd" width="100%" style={{ borderRadius: '30px' }} />
              </Box>
              <Typography variant='h4' sx={{ mt: 2 }}>
                @HaiJakd
              </Typography>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Artist
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Box >
                <img src='/images/TheHornyDegen.png' alt="TheHornyDegen" width="100%" style={{ borderRadius: '30px' }} />
              </Box>
              <Typography variant='h4' sx={{ mt: 2 }}>
                @TheHornyDegen
              </Typography>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Director of Vibes
              </Typography>
            </Grid>
            <Grid item xs={12} md={4} lg={2}>
              <Box >
                <img src='/images/Banned.Muffin.png' alt="Banned.Muffin" width="100%" style={{ borderRadius: '30px' }} />
              </Box>
              <Typography variant='h4' sx={{ mt: 2 }}>
                Banned.Muffin
              </Typography>
              <Typography variant='h6' sx={{ mb: 3 }}>
                Technical Gigabrain
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Team section end */}

        {/* Footer section start */}
        <Box className={classes.footer}>
          <Typography variant='h3' sx={{ mt: 3 }}>
            Verified Smart Contract Address
          </Typography>
          <Link href={`https://etherscan.io/address/${contractAddress}`} sx={{ color: 'white', textDecoration: 'unset', my: 1 }}>
            {contractAddress}
          </Link>
          <Typography variant='h3' sx={{ mt: 5 }}>
            Community Wallet Address
          </Typography>
          <Link href={`https://etherscan.io/address/${communityAddress}`} sx={{ color: 'white', textDecoration: 'unset', my: 5 }}>
            {communityAddress}
          </Link>
          <Box className={classes.socialLinks} sx={{ my: 3 }}>
            <Link href='https://discord.gg/4VcbnR7MuK' target='_blank'>
              <Discord sx={{ color: '#1da1f2' }} />
            </Link>
            <Link href='https://twitter.com/y00tsanchorclub' target='_blank' sx={{ ml: 3 }}>
              <Twitter sx={{ color: '#1da1f2' }} />
            </Link>
          </Box>
          <Typography variant='h5' sx={{ my: 3 }}>
            Terms of Service
          </Typography>
          <Typography variant='h5' sx={{ my: 3 }}>
            Copyright 2022 Y00ts Anchor Club. All Rights Reserved.
          </Typography>
        </Box>
        {/* Footer section end */}
      </Box>
    </Box >
  );
}

export default Home;
