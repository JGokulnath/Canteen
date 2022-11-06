import React from 'react'
import imgSrc from "./valid.png"
import {
    Form,
    Card,
    CardHeader,
    CardTitle,
    CardBody,
    Button,
    
} from "reactstrap"
const VerifiedEmail = () => {
    return (
        <div  style={{ margin: '10rem 30rem' }}>
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
                        <CardTitle tag="h5" style={{color:'green', padding:'0rem 2rem 0 3.5rem'}}>
                            Email Verified
                        </CardTitle>
                        <img
                            alt="Verified img"
                            src={imgSrc}
                            width="50%"
                            style={{margin:'0 3.7rem'}}
                        />
                        <div style={{ margin: '0 5.4rem ' }}>
                        <Button
                        color="success">
                            LOGIN
                        </Button>
                        </div>
                    </CardBody>
                   
                </Card>
            </Form>
        </div>
    )
}

export default VerifiedEmail