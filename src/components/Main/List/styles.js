import { makeStyles } from '@material-ui/core/styles';
import { red, green } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  avatarIncome: {
    color: '#0000',
    backgroundColor: green[500],
  },
  avatarExpense: {
   // color: theme.palette.getContrastText(red[500]),
   color:'#0000',
    backgroundColor: red[500],
  },
  list: {
    maxHeight: '150px',
    overflow: 'auto',
  },
}));
