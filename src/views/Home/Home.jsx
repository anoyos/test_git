import React from 'react';

import { makeStyles } from "@mui/styles";
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from '../../assets/jss/views/homeStyles';
import { Button, Grid } from '@mui/material';

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
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#1da1f2" className="bi bi-discord" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </Link>
            <Link href='https://twitter.com/y00tsanchorclub' target='_blank' sx={{ ml: 3 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#1da1f2" class="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
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
