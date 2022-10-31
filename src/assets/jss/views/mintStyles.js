const homeStyles = ((theme) => ({
  container: {
    backgroundColor: 'black',
  },
  contents: {
    margin: 'auto',
    maxWidth: '1600px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9be3d',
    color: 'white',
    padding: '10px',
    minHeight: '100vh',
    textAlign: 'center'
  },
  box: {
    width: '600px !important',
    border: '4px dotted white',
    borderRadius: '20px',
    margin: '20px 40px',
    backgroundColor: 'black',
    [theme.breakpoints.down('md')]: {
      width: '500px !important',
    },
    [theme.breakpoints.down('sm')]: {
      width: '400px !important',
    },
  },
  button: {
    padding: '8px 20px !important',
    backgroundColor: 'white !important',
    color: '#f9be3d !important',
    borderRadius: '20px !important',
    boxShadow: 'rgb(250 250 250 / 30%) 0px 6px 0px -2px !important',
    '&:active': {
      boxShadow: 'none !important'
    }
  },
  buttonLink: {
    textDecoration: 'none !important',
    margin: '20px 0',
    '&:hover': {
      textDecoration: 'none !important'
    }
  },
  calButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    backgroundColor: '#f9be3d !important',
    fontWeight: 'bold',
    width: '30px',
    height: '30px',
    color: 'black !important',
    borderRadius: '50% !important',
    '&:active': {
      boxShadow: 'none !important'
    }
  },

}))

export default homeStyles;
