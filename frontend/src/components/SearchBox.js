import React, { useState } from 'react'
import { Button, Form} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
            <Form onSubmit={submitHandler} className = 'searchBar'>
                <Form.Control
                    type='text'
                    placeholder='find what you want here'
                    name='q'
                    onChange={(e) => setKeyword(e.target.value)}
                    // className='mr-sm-2 ml-sm-4'
                ></Form.Control>

                <Button
                    type='submit'
                    // className='p-2'
                >
                    Search
                </Button>
            </Form>
    )
}

export default SearchBox
