import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getCommitDetails } from '../actions/commitActions'

function CommitView({ match, history }) {
    const dispatch = useDispatch()
    const commitDetails = useSelector(state => state.commitDetails)
    const { error, loading, commit } = commitDetails

    useEffect(() => {
        dispatch(getCommitDetails(match.params.branch, match.params.sha))
    }, [dispatch, match])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <div>
            <Link 
                to='/' 
                role='button' 
                className='btn btn-secondary'
                size='sm'
                >
                Go Back
            </Link>

            <Row className='justify-content-center pt-4'>
                <Col md={8}>
                    <Card>
                        <Card.Header className='d-flex justify-content-between align-items-center' as='div'>
                            <Card.Text as='div'>
                                <div><small className='text-muted'>Branch: {commit.branch}</small></div> 
                            </Card.Text>
                            <Card.Text as='div'>
                                Commit: {commit.sha}
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title className='pb-2'>Summary</Card.Title>
                            <Card.Text className='mb-1'>Message: {commit.message}</Card.Text>
                            <Card.Text className='mb-1'>Date: {commit.authored_date}</Card.Text>
                            <Card.Text className='mb-1'>Insertions: {commit.summary.insertions}</Card.Text>
                            <Card.Text className='mb-1'>Deletions: {commit.summary.deletions}</Card.Text>
                            <Card.Text className='mb-1'>Lines: {commit.summary.lines}</Card.Text>
                            <Card.Text className='mb-1'>Files: {commit.summary.files}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Header>
                            Author Info
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>Name: {commit.author}</Card.Text>
                            <Card.Text>Email: {commit.author_email}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


        </div>
    )
}

export default CommitView