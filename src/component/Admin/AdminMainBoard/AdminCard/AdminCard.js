import { Grid ,makeStyles} from '@material-ui/core'
import React,{useEffect} from 'react'
import AdminCardItem from './AdminCardItem/AdminCardItem';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 50,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));
  

export default function AdminCard({langData}) {
    const classes = useStyles();
    const [spacing, setSpacing] = React.useState(2);
    useEffect(() => {
        console.log('dddddddd',langData)
       
    }, [langData])
    return (
        <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {langData.map((value,index) => (
              <Grid key={index}  item>
                  <AdminCardItem title={value}/>
              </Grid>
            ))}
          </Grid>
        </Grid>
        </Grid>
    )
}
