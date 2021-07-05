import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CommitCard from '../components/CommitCard'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getRepoDetails } from '../actions/repoActions'


function HomeView() {
    const [branch, setBranch] = useState('master')
    const dispatch = useDispatch()
    const repoDetails = useSelector(state => state.repoDetails)
    const { error, loading, repo } = repoDetails

    const handleBranch = (e) => {
        setBranch(e.target.value)
    }

    useEffect(() => {
        dispatch(getRepoDetails(branch))
    }, [dispatch, branch, setBranch])

    return loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <div>
            <Row className='justify-content-center'>
                <Col md={9}>
                    <h2>Repo History</h2>
                    <h5>{repo.url}</h5>
                    <h5>{repo.description}</h5>
                    <small className='text-muted'>Active branch: {repo.active_branch}</small>
                </Col>
            </Row>

            <Row className='justify-content-center pt-4'>
                <Col md={9} className='d-inline-flex'>
                        <Form.Control onChange={handleBranch} as="select" custom value={branch}>
                            {repo.branches.map(branch => (
                                <option key={branch.commit}>{branch.name}</option>
                            ))}
                        </Form.Control>
                        <div>
                            <Link
                                className='btn btn-sm btn-secondary'
                                to='/pullrequests/'
                                role='button'
                            >
                                Pull Requests
                            </Link>
                        </div>
                </Col>
            </Row>
            <Row className='pt-4'>
                {repo.commits.map(commit => (
                    <Col key={commit.sha} xl={12}>
                        <CommitCard commit={commit} active_branch={repo.active_branch} />
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default HomeView;