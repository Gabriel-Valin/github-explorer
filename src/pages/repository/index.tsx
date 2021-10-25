import { useRouteMatch } from 'react-router-dom'

type RepositoryParams = {
    name: string
}

export function Repository () {
    const { params } = useRouteMatch<RepositoryParams>()
    console.log(params)

    return (
        <h1>Repository: {params.name}</h1>
    )
}