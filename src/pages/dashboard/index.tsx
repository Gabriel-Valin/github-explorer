import { FormEvent, ReactNode, useState } from 'react'
import * as Styles from './styles'
import { FiChevronRight } from 'react-icons/fi'
import { api } from '../../services/api-github'

type Repository = {
    full_name: string
    description: string
    owner: {
        login: string
        avatar_url: string
    }
}

export function Dashboard () {
    const [inputError, setInputError] = useState('')
    const [inputRepo, setInputRepo] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([])

    async function handleAddRepository (event: FormEvent): Promise<void> {
        event.preventDefault()
        
        if (!inputRepo) {
            setInputError('Typing author/repository of repository')
            return;  
        } 

        try {
            const response = await api.get<Repository>(`repos/${inputRepo}`)
            setRepositories([...repositories, response.data])
            setInputRepo('')
            setInputError('')
        } catch (error) {
            setInputError('Error in search repository, please try typing a correct author/repository =)')
        }
    }

    return (
    <>
        <span>explorerLogo.</span>
        <Styles.Title>Explore some repository from Github here</Styles.Title>
        <Styles.Form hasError={ !!inputError } onSubmit={handleAddRepository}>
            <input value={inputRepo} onChange={(event) => setInputRepo(event.target.value)} placeholder="Typing repository name here.." type="text" />
            <button type="submit">Search</button>
        </Styles.Form>
        { inputError && <Styles.Error>{ inputError }</Styles.Error> }        
        <Styles.Repositories>
            {repositories.map(repository => (
                <a key={repository.full_name} href="teste">
                    <img src={repository.owner.avatar_url} alt={repository.owner.login} />
                    <div>
                        <strong>{repository.full_name}</strong>
                        <p>{repository.description}</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            ))}
        </Styles.Repositories>
    </>
    )
}