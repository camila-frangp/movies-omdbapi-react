const marginBottomDefault = '20px';
export const style = {
  container: {
    flexDirection: 'column',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    //todo: Adjust height fill screen
  },
  logo: {
    width: '40%',
    marginBottom: marginBottomDefault
  },
  form: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  submit: {
    width: '30%',
    padding: '10px',
    borderColor: '#008bf6',
    background: 'transparent',
    borderRadius: '28px',
    outline: 'none',
    marginTop: marginBottomDefault
  }
}
