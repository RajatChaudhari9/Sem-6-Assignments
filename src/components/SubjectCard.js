 import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core/styles";
import Slide from '@material-ui/core/Slide';


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 5,
        transition: "all .2s ease-in-out",
        "&:hover": {
            transform: "scale(0.97)"
        },
    }, 
    heading: {
        fontSize: 16,
        marginBottom: 0,
    },
    subheader: {
        fontSize: 14,
        color: theme.palette.grey[700],
        letterSpacing: '1px',
        marginBottom: 0,
    },
}))

function SubjectCard({ details }) {
    const styles = useStyles();
    return (
        <div className={styles.root}>

            <Slide in direction="down" style={{ transitionDelay: true ? '200ms' : '0ms' }}>

                <Card style={{backgroundColor:"rgb(184 178 255)"}} >
                    <CardContent>
                        <Box textAlign="center">
                            <h3 className={styles.heading}>{details.fullName}</h3>
                            <p className={styles.subheader}>PROFESSOR: {details.professorName} </p>
                        </Box>
                    </CardContent>
                </Card>
            </Slide>

        </div>
    )
}

export default SubjectCard
