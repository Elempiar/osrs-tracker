import { Background, Parallax } from 'react-parallax'
import './Third.scss'
import bgBack from "./images/bg-back.jpeg"
import bgFront from "./images/bg-front.webp"

export default function Third() {
    return(
        <section className='third'>
            <div className='container-fluid'>
                <div className='row'>
                <Parallax bgImage={ bgBack } strength={ 500 }>
                        <div className='col-12 text-center position-absolute bottom-0 pb-5'>
                            <h1>Parallax Test</h1>
                            <p>Lorem Ipsum Dolor Sit Amet.</p>
                        </div>
                        <Parallax strength={ 0 }>
                            <Background>
                                <img src={ bgFront} alt="Parallax Front" />
                            </Background>
                        </Parallax>
                    </Parallax>
                </div>
            </div>
        </section>
    )
}