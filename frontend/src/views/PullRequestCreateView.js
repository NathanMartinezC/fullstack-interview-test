import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { getRepoBranches } from '../actions/repoActions'
import { savePullRequest } from '../actions/pullRequestActions'


function PullRequestCreateView(){

    const dispatch = useDispatch()

    const [author, setAuthor] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('O')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePullRequest({ author, title, description, status }))
        //history.push('/pullrequests')
    }

    useEffect(() => {
        dispatch(getRepoBranches())
    }, [dispatch])

    return (
        <div>
            <Link 
            to='/pullrequests' 
            role='button' 
            className='btn btn-secondary'
            size='sm'
            >
            Go Back
        </Link>
        <FormContainer>
            
            <h1>Add Pull Request</h1>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='author' className='pt-3'>
                    <Form.Label> Author </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Author'
                        value={author ? author : ''}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='title' className='pt-3'>
                    <Form.Label> Title </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Title'
                        value={title ? title : ''}
                        onChange={(e) => setTitle(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='description' className='pt-3'>
                    <Form.Label> Description </Form.Label>
                    <Form.Control
                        required
                        type='text'
                        placeholder='Enter Description'
                        value={description ? description : ''}
                        onChange={(e) => setDescription(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='status' className='pt-3 pb-4'>
                    <Form.Label> Status </Form.Label>
                    <Form.Control as="select" size="sm" onChange={(e) => {
                        const selectedStatus = e.target.value
                        setStatus(selectedStatus)
                    }}>
                        <option value='O'>Open</option>
                        <option value='M'>Merge</option>
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Submit
                </Button>

            </Form>
        </FormContainer>
        </div>
        
    )
}

export default PullRequestCreateView