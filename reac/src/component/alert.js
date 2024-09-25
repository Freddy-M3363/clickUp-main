import React, { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        top: 0,
        right: 0,
        zIndex: 1000,
    },
}));

const Alert = ({ successMessage, errorMessage, errorCode, open, onClose }) => {
    const classes = useStyles();
    const [alertType, setAlertType] = useState('success');
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        if (successMessage) {
            setAlertType('success');
            setAlertMessage(successMessage);
        } else if (errorMessage) {
            setAlertType('error');
            setAlertMessage(errorMessage);
        } else if (errorCode) {
            setAlertType('error');
            setAlertMessage(`Error Code: ${errorCode}`);
        } else {
            setAlertType('info');
            setAlertMessage('Unknown error occurred.');
        }
    }, [successMessage, errorMessage, errorCode]);

    return (
        <Snackbar open={open} onClose={onClose} autoHideDuration={3000} className={classes.root}>
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
                <Alert severity={alertType}>{alertMessage}</Alert>
            </Slide>
        </Snackbar>
    );
};

export default Alert;