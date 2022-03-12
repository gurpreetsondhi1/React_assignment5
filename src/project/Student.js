import React, {  useState } from 'react';
import './app.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import StudentDetail from './StudentDetail';
import { Link } from 'react-router-dom';

const Student =(props)=> {

    // const student=props.student
    // const [students, setStudents] = useContext(StudentContext);
    const student=props.data;
    const [vals,setVals]=useState("true")

    const changeVals=()=>{
        setVals(!vals)
        console.log(student)
    }
    
        return (
            <>
                
                {vals && (<>
                    <div className='stdcontainer'>
                        <h1 className='stdText'>Student Details</h1>
                        <button className='stdButton' onClick={props.back}>Add new Student</button>
                    </div>
                    
                    <TableContainer component={Paper} className='table'sx={{maxWidth:1350}}>
                        <Table sx={{ minWidth: 550,}} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Age</TableCell>
                                    <TableCell align="right">Course</TableCell>
                                    <TableCell align="right">Batch</TableCell>
                                    <TableCell align="right">Change</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {student.map((student) => (
                                    <TableRow
                                        key={student.index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {student.name}
                                        </TableCell>
                                        <TableCell align="right">{student.age}</TableCell>
                                        <TableCell align="right">{student.course}</TableCell>
                                        <TableCell align="right">{student.batch}</TableCell>
                                        <TableCell align="right">
                                            <Link to={'/StudentDetail/${student.id}'}>Edit</Link>
                                            
                                            </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>)}
                {!vals && (
                    <StudentDetail  />
                )}
            </>
        );
    }

export default Student









// const student = [
//     {name:'John', age:26, course:'MERN', batch:"October", change:'edit'},
//     {name:'DOO', age:24, course:'MERN', batch:"November", change:'edit'},
//     {name:'Shroud', age:23, course:'MERN', batch:"October", change:'edit'},
//     {name:'Mortal', age:25, course:'MERN', batch:"September", change:'edit'},
//     {name:'Scout', age:21, course:'MERN', batch:"October", change:'edit'},
    
// ];


// const [name, setName]=useState('')
    // const [age, setAge]=useState('')
    // const [course, setCourse]=useState('')
    // const [batch, setBatch]=useState('')
    
    // const [students, setStudents] = useState([
    //     {name:'John', age:26, course:'MERN', batch:"October", change:'edit'},
    // {name:'DOO', age:24, course:'MERN', batch:"November", change:'edit'},
    // {name:'Shroud', age:23, course:'MERN', batch:"October", change:'edit'},
    // {name:'Mortal', age:25, course:'MERN', batch:"September", change:'edit'},
    // {name:'Scout', age:21, course:'MERN', batch:"October", change:'edit'},
    // ]);