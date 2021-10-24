import React from 'react'
import * as Styles from './styles'

export function Dashboard () {
    return (
    <>
        <span>explorerLogo.</span>
        <Styles.Title>Explore some repository from Github here</Styles.Title>
        <Styles.Form action="">
            <input placeholder="Typing repository name here.." type="text" />
            <button type="submit">Search</button>
        </Styles.Form>
    </>
    )
}