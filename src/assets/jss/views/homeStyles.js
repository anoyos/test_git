const homeStyles = ((theme) => ({
  container: {
    backgroundColor: 'black',
  },
  contents: {
    margin: 'auto',
    maxWidth: '1600px',
    backgroundColor: 'black',
    color: 'white',
    padding: '0 70px 20px 70px',
  },
  header: {
    paddingTop: '10px',
    paddingLeft: '10px',
    textAlign: 'center'
  },
  mainBackground: {
    textAlign: 'center',
    margin: 'auto'
  },
  mint: {
    marginTop: '30px',
    textAlign: 'center',
    '& h3': {
      fontWeight: 'bold',
      fontSize: '30px',
    },
    '& h5': {
      fontWeight: '200',
      fontSize: '18px',
    },
  },
  buyOpensea: {
    textAlign: 'center',
    '& h3': {
      fontWeight: 'bold',
      fontSize: '30px',
    },
    '& h5': {
      fontWeight: '200',
      fontSize: '18px',
    },
  },
  aboutNFT: {
    marginTop: '30px',
    textAlign: 'center',
    '& h3': {
      fontWeight: 'bold',
      fontSize: '30px',
    },
    '& h5': {
      fontWeight: '200',
      fontSize: '18px',
    },
  },
  secondBackground: {
    marginTop: '30px',
  },
  teams: {
    marginTop: '90px',
    textAlign: 'center',
    '& h3': {
      fontWeight: 'bold',
      fontSize: '30px',
    },
    '& h4': {
      fontWeight: '200',
      fontSize: '18px',
    },
    '& h6': {
      fontWeight: '200',
      fontSize: '18px',
    },
  },
  footer: {
    marginTop: '50px',
    textAlign: 'center',
    '& h3': {
      fontWeight: 'bold',
      fontSize: '18px',
    },
    '& h5': {
      fontWeight: '200',
      color: 'grey',
      fontSize: '13px',
    },
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    width: '220px !important',
    padding: '15px 20px !important',
    borderRadius: '20px !important',
  },
  buttonLink: {
    '&:hover': {
      textDecoration: 'none !important'
    }
  },
}))

export default homeStyles;
