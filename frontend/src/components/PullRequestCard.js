import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

function PullRequestCard({ pull_request }){
    return (
            <Row className='justify-content-center'>
                <Col xs={9}>
                    <Card className='rounded m-1'>
                        <Card.Header className='d-flex justify-content-between align-items-center' as='div'>
                            <div>
                                {pull_request.title}
                            </div>
                        </Card.Header>
            
                        <Card.Body>
                            <Card.Text className='mb-1'>
                                <small>{pull_request.author}</small>                
                            </Card.Text>
                            <Card.Text className='mb-1'>
                                <small>{pull_request.description}</small>                
                            </Card.Text>
                            <Card.Text>
                                <small className='text-muted'>status: {
                                        pull_request.status==='O'? 'Open'
                                        : pull_request.status==='C'? 'Closed'
                                        : pull_request.status==='M'? 'Merged'
                                        : 'Not available'}
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    )   
}

export default PullRequestCard