import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    'card': {
        width: '500px',
        margin: '0 auto'
    },
    'card__title': {
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    'card__action': {
        justifyContent: 'center'
    },
    'card__action--btn': {
        width: '250px'
    }
})
const LoginCard: React.FC = () => {
    const classes = useStyles()
    const [autoLogin, setAutoLogin] = useState(true);
    const handleChangeAutoLogin = () => {
        setAutoLogin(!autoLogin)
    }
    return (
        <>
            <Card className={classes['card']}>
                <CardHeader className={classes['card__title']} title="登录" />
                <CardContent>
                    <Grid container spacing={1} justify="center" alignItems="flex-end">
                        <Grid item>
                            <AccountCircle />
                        </Grid>
                        <Grid item>
                            <TextField label="用户名" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={1} justify="center" alignItems="flex-end">
                        <Grid item>
                            <LockIcon />
                        </Grid>
                        <Grid item>
                            <TextField label="密码" type="password" />
                        </Grid>
                    </Grid>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch checked={autoLogin} value="checkedA" />
                            }
                            onChange={() => { handleChangeAutoLogin() }}
                            label="记住密码"
                        />
                    </FormGroup>
                </CardContent>
                <CardActions className={classes['card__action']}>
                    <Button className={classes['card__action--btn']} variant="contained" color="primary" size="large">登录</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default LoginCard