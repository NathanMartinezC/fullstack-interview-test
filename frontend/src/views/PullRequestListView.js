import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PullRequestCard from '../components/PullRequestCard'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getPullRequestList } from '../actions/pullRequestActions'


function PulllRequestListView() {

    const dispatch = useDispatch()
    const pullRequestList = useSelector(state => state.pullRequestList)
    const { error, loading, pull_requests } = pullRequestList

    useEffect(() => {
        dispatch(getPullRequestList())
    },[dispatch])

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
                <Col md={9} className='justify-content-center pb-3'>
                    <h2>Pull Requests</h2>
                </Col>
                <Col md={9} className='justify-content-center'>
                        <div>
                            <Link
                                className='btn btn-sm btn-secondary'
                                to='/pullrequests/add/'
                                role='button'
                            >
                                Add Pull Request
                            </Link>
                        </div>
                </Col>
            </Row>

            <Row className='pt-3'>
                {pull_requests.map(pull_request => (
                    <Col key={pull_request.id} xl={12}>
                        <PullRequestCard pull_request={pull_request} />
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default PulllRequestListView