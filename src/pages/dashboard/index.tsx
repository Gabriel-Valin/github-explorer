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
    const [inputRepo, setInputRepo] = useState('')
    const [repositories, setRepositories] = useState<Repository[]>([])

    async function handleAddRepository (event: FormEvent): Promise<void> {
        event.preventDefault()
        
        const response = await api.get<Repository>(`repos/${inputRepo}`)
        setRepositories([...repositories, response.data])
        setInputRepo('')
    }

    return (
    <>
        <span>explorerLogo.</span>
        <Styles.Title>Explore some repository from Github here</Styles.Title>
        <Styles.Form onSubmit={handleAddRepository}>
            <input value={inputRepo} onChange={(event) => setInputRepo(event.target.value)} placeholder="Typing repository name here.." type="text" />
            <button type="submit">Search</button>
        </Styles.Form>

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