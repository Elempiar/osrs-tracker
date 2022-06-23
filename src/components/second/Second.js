import { Parallax } from 'react-parallax'
import './Second.scss'
import bgBack from './images/bg-back.jpeg'

export default function Second() {
    return(
        <section className='second'>
            <div className='container-fluid'>
                <div className='row'>
                    <Parallax bgImage={ bgBack } strength={ -100 }>
                        <div className='col-12 text-center position-absolute top-50'>
                            <h1>Parallax Test</h1>
                            <p>Lorem Ipsum Dolor Sit Amet.</p>
                        </div>
                    </Parallax>
                </div>
            </div>
        </section>
    )
}