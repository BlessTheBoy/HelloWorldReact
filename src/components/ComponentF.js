import React from 'react'
import { UserConsumer } from './userContext'

function ComponentF() {
    return (
        <UserConsumer>
            {
                s => <div>Hello {s}</div>
            }
        </UserConsumer>
    )
}

export default ComponentF
