import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"


function Survey() {
    const { questionNumber } = useParams()
    const questionNumberInt = parseInt(questionNumber)
    const prevQuestionNumber = questionNumber < 2 ? 1 : questionNumberInt - 1
    const nextQuestionNumber = questionNumberInt + 1

    return (
        <div className="App">
            <h1>Questionnaire ✍</h1>
            <h2>Question {questionNumber}</h2>
            <Link to={`/survey/${prevQuestionNumber}`}>
                Question précédente
            </Link>
            {questionNumberInt === 10 ? (
                <Link to="/results">Résultats</Link>
            ) : (
                <Link to={`/survey/${nextQuestionNumber}`}>
                    Question suivante
                </Link>
            )}
        </div>
    )
}

export default Survey
