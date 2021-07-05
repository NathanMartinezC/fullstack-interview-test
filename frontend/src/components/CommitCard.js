import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CommitCard({ commit, active_branch }){
    return (
            <Row className='justify-content-center'>
                <Col xs={9}>
                    <Card className='rounded m-1'>
                        <Card.Header className='d-flex justify-content-between align-items-center' as='div'>
                            <div>
                                {commit.message}
                            </div>
                            <div>
                                <Link
                                    className='btn btn-sm btn-secondary'
                                    role='button'
                                    to={`/commits/${active_branch}/${commit.sha}`}
                                >
                                    Details
                                </Link>
                            </div>
                        </Card.Header>
            
                        <Card.Body>
                            <Card.Text className='mb-1'>
                                <small>{commit.author}</small>                
                            </Card.Text>
                            <Card.Text className='mb-1'>
                                <small className='text-muted'>commited {commit.authored_date}</small>
                            </Card.Text>
                            <Card.Text>
                                <small className='text-muted'>{commit.sha}</small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
    )   
}

export default CommitCard