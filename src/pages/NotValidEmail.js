import React from 'react'
import imgSrc from "./invalid.png"
import {
    Form,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Button,
    
} from "reactstrap"

const NotValidEmail = () => {
  return (
    <div  style={{ margin: '10rem 30rem'}}>
    <Form>
        <Card
            className="my-2"
            style={{
                width: '18rem'
            }}
        >
            <CardHeader>
               Account Status..
            </CardHeader>
            <CardBody>
                <CardTitle tag="h5" style={{color:'#dc3545' ,padding:'0 2rem 0 3.8rem'}}>
                    Invalid Email
                </CardTitle>
                <img
                    alt="Invalid img"
                    src={imgSrc}
                    width="50%"
                    style={{margin:'0 3.8rem'}}
                />
                <div style={{ margin: '0 5.7rem ' }}>
                <Button
                 color="danger">
                    LOGIN
                </Button>
                </div>
            </CardBody>
           
        </Card>
    </Form>
</div>
  )
}

export default NotValidEmail