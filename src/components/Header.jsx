import image from '../../public/quiz-logo.png'

export default function Header(){
    return(
        <header>
            <img src={image} alt="quiz-logo" />
            <h1>REACT</h1>
        </header>
    )
}

