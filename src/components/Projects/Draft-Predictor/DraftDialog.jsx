import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText'
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DraftDialog({ open, handleClose, data, count, winner, confidence, formData }) {
    const [openCollapse, setOpenCollapse] = useState({});
    const handleCollapseToggle = (key) => {
        setOpenCollapse(prev => ({ ...prev, [key]: !prev[key] }));
    };
    const renderCollapses = () => {
        if (Object.keys(data).length === 0){
            return (
                <DialogContentText>
                    No similar games found with {formData.threshold} matching champions
                </DialogContentText>
            );
        } else {
            return Object.entries(data).map(([key, matches]) => (
            <div key={key}>
                <Button color='inherit' onClick={() => handleCollapseToggle(key)} variant="outlined" sx={{ mt: 1 }}>
                {openCollapse[key] ? `Hide Games with ${key} Matching Champions` : `Show Games with ${key} Matching Champions`}
                </Button>
                <Collapse in={openCollapse[key]}>
                <List>
                    {matches.map((match, index) => (
                    <ListItem key={index} sx={{ py: 0 }}> 
                        <ListItemText
                        primary={
                            <a
                            href={match.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: match.winner === '0' ? 'blue' : 'red' }}
                            >
                            {match.url}
                            </a>
                        }
                        />
                    </ListItem>
                    ))}
                </List>
                </Collapse>
            </div>
            ));
        }
      };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Predictions & Similar Matches"}</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ mb: 2 }}>
                {
                winner === 0 ? (
                    <>
                    <b>Blue team</b> predicted to win with <b>{confidence}%</b> confidence
                    </>
                ) : winner === 1 ? (
                    <>
                    <b>Red team</b> predicted to win with <b>{confidence}%</b> confidence
                    </>
                ) : (
                    <b>Not Enough Data For Prediction</b>
                )
}
                </DialogContentText>
                <DialogContentText sx={{ mb: 2 }}>
                    <b>{count} matches</b> found with parameters
                </DialogContentText>
                {renderCollapses()}
            </DialogContent>
            <DialogActions>
                <Button color='inherit' onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}

export default DraftDialog;