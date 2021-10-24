import * as Styles from './styles'
import { FiChevronRight } from 'react-icons/fi'

export function Dashboard () {
    return (
    <>
        <span>explorerLogo.</span>
        <Styles.Title>Explore some repository from Github here</Styles.Title>
        <Styles.Form action="">
            <input placeholder="Typing repository name here.." type="text" />
            <button type="submit">Search</button>
        </Styles.Form>

        <Styles.Repositories>
            <a href="teste">
                <img src="https://avatars.githubusercontent.com/u/59366369?v=4" alt="Gabriel Valin" />
                <div>
                    <strong>liuv/cardapio-digital</strong>
                    <p>Cardapio By LIUV</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://avatars.githubusercontent.com/u/59366369?v=4" alt="Gabriel Valin" />
                <div>
                    <strong>liuv/cardapio-digital</strong>
                    <p>Cardapio By LIUV</p>
                </div>
                <FiChevronRight size={20} />
            </a>
            <a href="teste">
                <img src="https://avatars.githubusercontent.com/u/59366369?v=4" alt="Gabriel Valin" />
                <div>
                    <strong>liuv/cardapio-digital</strong>
                    <p>Cardapio By LIUV</p>
                </div>
                <FiChevronRight size={20} />
            </a>
        </Styles.Repositories>
    </>
    )
}