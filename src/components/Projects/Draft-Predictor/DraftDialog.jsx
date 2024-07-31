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

function DraftDialog({ open, handleClose, data, count, winner }) {
    const [openCollapse, setOpenCollapse] = useState({});
    const handleCollapseToggle = (key) => {
        setOpenCollapse(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const renderCollapses = () => {
        return Object.entries(data).map(([key, links]) => (
            <div key={key}>
                <Button color='inherit' onClick={() => handleCollapseToggle(key)} variant="outlined" sx={{ mt: 1 }}>
                    {openCollapse[key] ? `Hide Games with ${key} Matching Champions` : `Show Games with ${key} Matching Champions`}
                </Button>
                <Collapse in={openCollapse[key]}>
                    <List>
                        {links.map((link, index) => (
                            <ListItem key={index} sx={{ py: 0 }}> {/* Reduce vertical padding */}
                                <ListItemText primary={<a href={link} target="_blank" rel="noopener noreferrer">{link}</a>} />
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
        ));
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Predictions & Match Details"}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {winner}
                </DialogContentText>
                <DialogContentText>
                    Total matches found with parameters: {count}
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