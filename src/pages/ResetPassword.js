import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Button,
    FormGroup,
    Input,
    Label,
    Col,
    Alert
} from "reactstrap"
const ResetPassword = () => {
   const [showPassword, setShowPassword]=useState(false);
   const [pwd, setPwd]=useState('');
   const [showPwd, setShowPwd]=useState('');
   const [isError, setError] = useState("");
   const Reset =()=>{
          if (pwd.length < 8 || showPwd.length < 8) setError("Min length 8 required");
           else if(pwd!==showPwd){
             setError("Passwords don't match");
             
          }
          else{
            setError("Password has been reset");
          }
   }
  
    return (
        <div style={{ margin: '10rem 30rem' }}>
            <Card
                style={{
                    width: '25rem'
                }}
            >
                <CardHeader>
                    <h2 style={{color:'red'}}>Reset Password</h2>
                </CardHeader>
                <CardBody>
                     {
                        isError.length!==0 ?
                        <Alert  color="warning" >{isError}</Alert>
                        :null
                     }
                    
                          <FormGroup row>
                        <Label
                            for="examplePassword"
                            sm={4}
                        >
                            New Password
                        </Label>
                        <Col sm={8}>
                            <Input
                                id="Password"
                                name="password"
                                value={pwd}
                                onChange={(e)=>setPwd(e.target.value)}
                                placeholder="Minimum 8 Characters"
                                type={showPassword===true?"text":"password"}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label
                            for="examplePassword"
                            sm={4}
                        >
                            Confirm Password
                        </Label>
                        <Col sm={8}>
                            <Input
                                id="showPassword"
                                name="password"
                                value={showPwd}
                                onChange={(e)=>setShowPwd(e.target.value)}
                                placeholder="Confirm Password"
                                type={showPassword===true?"text":"password"}
                            />
                        </Col>
                    </FormGroup>

                    <FormGroup check>
                        <Input type="checkbox" 
                            id="showPassword"
                            onChange={()=>{setShowPassword((prev)=>{ return !prev})}}
                        />
                          
                        <Label check
                        >
                            Show password
                        </Label> 
                    </FormGroup>
                 
                    <div style={{ margin: '0 7rem ' }}>
                        <Button
                            color="success"
                            outline
                            onClick={Reset}
                        >
                            Reset
                        </Button>
                        </div>
                </CardBody>
            </Card>
        </div>
    )
}


export default ResetPassword