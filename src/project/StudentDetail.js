import React, { useState } from 'react'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Student from './Student';


const StudentDetail =(props)=> {

    const {ids}=useParams();


    const [students, setStudents] = useState([
        {id:1, name:'John', age:26, course:'MERN', batch:"October", change:'Edit'},
    {id:2, name:'DOO', age:24, course:'MERN', batch:"November", change:'edit'},
    {id:3, name:'Shroud', age:23, course:'MERN', batch:"October", change:'edit'},
    {id:4,name:'Mortal', age:25, course:'MERN', batch:"September", change:'edit'},
    {id:5, name:'Scout', age:21, course:'MERN', batch:"October", change:'edit'},
    ]);
    const [name, setName]=useState(ids?students[ids].name:'')
    const [age, setAge]=useState(ids?students[ids].age:'')
    const [course, setCourse]=useState(ids?students[ids].course:'')
    const [batch, setBatch]=useState(ids?students[ids].batch:'')
    
    const [val,setVal]=useState("true")
    console.log(students[ids])
    const changeVal=()=>{
        setVal(!val)
    }

    const handleSubmit =() =>{
        let studentObj = {
            id: students.length+1, 
            name:name,
            age:age,
            course:course,
            batch:batch
        }
        if(ids){
            students[ids]={name:name,
                age:age,
                course:course,
                batch:batch}
        }
        else{
            setStudents( [ ...students, studentObj ] )
        }
            setVal(!val)
        console.log(students)
    }
    
        return (
            <>
                {!val && <><div className='stddiv'>
                {console.log(students)}
                    <label className="label" for="name">Name : </label>
                    <input type="text" id="name" className='inp' name="name" placeholder='Enter your name' 
                    onChange={(e) => setName(e.target.value)} value={name} />
                    <br></br><br></br>

                    <label className="label" for="dept">Age : </label>
                    <input type="text" id="age" className='inp' name="age" placeholder='Your Age'
                     onChange={(e) => setAge(e.target.value)} value={age} />
                    <br></br><br></br>

                    <label className="label" for="rating">Course : </label>
                    <input type="text" id="course" className='inp' name="course" placeholder='Course'
                     onChange={(e) => setCourse(e.target.value)} value={course} />
                    <br></br><br></br>

                    <label className="label" for="rating">Batch : </label>
                    <input type="text" id="batch" className='inp' name="batch" placeholder='Batch'
                     onChange={(e) => setBatch(e.target.value)} value={batch} />
                    <br></br><br></br>

                </div>
                <div className='btndiv'>
                <button className='stdButton' onClick={changeVal}>Cancel </button>
                <button className='stdButton' onClick={handleSubmit }>Update </button>
                </div></>}
                {val && (<Student data={students} back={changeVal}/>)}
            </>
        )
    }


export default StudentDetail












 // state = {
    //     name: "",
    //     age: '',
    //     course: '',
    //     batch: '',
    //     user: []
    // }
    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    // const students=props.students;

    // const changestud=()=>{
    //     props.students=students;
    // }