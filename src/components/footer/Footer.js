import './Footer.scss'

export default function Footer(){
    return(
        <footer className='py-3'>
            <div className='container'>
                <div className='row'>
                    <span className='col-6 text-start'>
                        Een waanzinnige test-pagina van Luuk Verboeket.
                    </span>
                    <span className='col-6 text-end'>
                        <a href="https://github.com/Elempiar">GitHub</a>
                    </span>
                </div>
            </div>
        </footer>
    )
}