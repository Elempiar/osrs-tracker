import { Background, Parallax } from 'react-parallax'
import './Fourth.scss'
import bgBack from './images/bg-back.webp'
import bgFront from './images/bg-front.webp'

export default function Fourth() {
    return(
        <section className='fourth'>
            <div className='container-fluid'>
                <div className='row'>
                <Parallax bgImage={ bgBack } strength={ 500 }>
                        <Parallax strength={ 0 }>
                            <Background>
                                <img src={ bgFront} alt='Parallax Front' />
                            </Background>
                        </Parallax>
                    </Parallax>
                </div>
            </div>
        </section>
    )
}