import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from "@material-ui/core/Link";


const useStyles = makeStyles({
    paper: {
        textAlign: "center",
        padding: "8px 1px",
        backgroundColor:"#969cfe",
        marginBottom:"18px",
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(0.97)",
        },
    }
});



function TimelineComponent({ data }) {
    const classes = useStyles();

    return (
        <div>
            <Timeline >
                {
                    data?.map((value, index) => {
                        return (
                                    <Link href={value.link} key={index} target="_blank" underline="none">
                                        <Paper elevation={22} className={classes.paper}>
                                            {value.title}
                                        </Paper>
                                    </Link>
                            
                        )
                    })
                }
            </Timeline>



        </div>
    )
}

export default TimelineComponent
