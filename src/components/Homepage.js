import React from 'react'
import subjects from '../data/subjects.json';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SubjectCard from './SubjectCard'
import { Link } from "react-router-dom";


function Homepage() {
  
    return (
        <div style={{backgroundColor:"rgb(208 206 206)",height:"100%"}}>
            <CssBaseline />
            <br></br>
            <Container maxWidth="sm" > 
                    <Typography component="h3"
                        variant="h3" align="center"
                        gutterBottom>
                        SEM-6 ASSIGNMENTS
                    </Typography>
                <br />
                <Typography component="h4"
                    variant="h4" align="center"
                    gutterBottom>
                    {" "}SUBJECTS {"  "}
                </Typography>
            </Container>
            <Container maxWidth="sm">
                {
                    subjects.map((subject, index) => {
                        return (
                            <Link to={`/Sem-6-Assignments/${subject.title}`} key={index}>
                                <SubjectCard details={subject} />
                            </Link>
                        )
                    })
                }
            </Container>
            <br/>
            <Typography component="h5"
                    variant="h5" align="center"
                    gutterBottom style={{paddingBottom:"15px"}}>
                    MADE BY: RAJAT VINOD CHAUDHARI
                </Typography>

        </div>
    )
}

export default Homepage
