import React from 'react'
import { makeStyles } from '@material-ui/styles';
import LoginCard from '@/components/LoginCard'
import Container from '@material-ui/core/Container';
const useStyles = makeStyles({
    'login': {
        backgroundColor: '#282C34',
        height: '100%',
        paddingTop: '10%'
    },
    'login__h3': {
        textAlign: 'center',
        color: '#fff',
        fontSize: '2rem'
    }
})
const Login: React.FC = () => {
    const classes = useStyles();
    return (
        <Container className={classes['login']} maxWidth={false}>
            <h3 className={classes['login__h3']}>管理系统</h3>
            <LoginCard />
        </Container>
    )
}

export default Login