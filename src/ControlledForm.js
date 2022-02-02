import React, { useState } from "react";
function ControlledForm()
{
    const[firstName,setfirstName] = React.useState("");
    const[lastName,setlastName] = React.useState("");
    const[Email,setEmail] = React.useState("");
    const[gender,setGender] = React.useState("");
    const[Courses,setCourse] = React.useState("React");
    const[EFirstName,setEfirstName] = React.useState("");
    const[ELastName,setlEastName] = React.useState("");
    const[EEmail,setEEmail] = React.useState("");
    const[EGender,setEGender] = React.useState("");
    const[f,setf] = React.useState("");

    var a = {};
    const handleReset = () => {
      setfirstName("");
      setlastName("");
      setEmail("");
      setGender("");
      setCourse("");
    };
//     const handleReset = () => {
//     setfirstName("");
//     setlastName("");
//     setEmail("");
//     setGender("");
//     setCourse("");
//   };


    
    
    const handleSubmit=(e)=>
    {
       
     e.preventDefault();
     a={first:firstName,last:lastName, email:Email,gender:gender,course:Courses}
    
   

     if(a.first=="" && a.last==""&&a.email==""&&a.gender=="" )
     {
      
         setf("Enter the feilds")
       
         
        
        
     }
     else{
    
     if(a.first=="")
     {
     
        setEfirstName("Enter the Name")
      
     }
     if(a.last=="")
     {
        setlEastName("Enter the Last name")
        
     }
     if(a.email=="")
     {
        setEEmail("Enter the Email Address")
      
     }
     if(a.gender=="")
     {
        setEGender("Select the Gender")
        
        
     }

     
   
   
   
    }
   
    }
     

   
    return( 
    
         <div className="div1">
            
        <h1>Controlled Form</h1>
        <form >
            <div>
                <label>First Name:</label>
                <input type="text" required value={firstName} name="firstName" onChange={(e)=>setfirstName(e.target.value ) }/>
                <br></br>
               <span>{EFirstName}</span>
              
            </div><br></br>
            <div>
                <label>Last Name:</label>
                <input type="text" value={lastName} name="lastName" onChange={(e)=>setlastName(e.target.value)} />
                <br></br>
               <span>{ELastName}</span>
            </div><br></br>
            <div>
                <label>Email:</label>
                <input type="text" value = {Email}name="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <br></br>
               <span>{EEmail}</span>
            </div><br></br>
            <div>
                <label>gender:</label>
                <input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value)}/> Male
                <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}/> Female
                <br></br>
               <span>{EGender}</span>
            </div><br></br>
            <div>
                <label>Courses:</label>
                <select name = "courses" value={Courses}  onChange={(e)=>setCourse(e.target.value)}>
                <option>React</option>
                <option>Angular</option>
                <option>Node</option>
                <option>Mongo</option>
                </select>
            </div><br></br>
            <button type = "submit" onClick={(e)=>handleSubmit(e)}>Submit</button>&nbsp;
            <button type="reset" onClick={handleReset }>
          Reset
        </button>
            <div>{f}</div>
        </form>
        </div>
    )
}
export default ControlledForm;