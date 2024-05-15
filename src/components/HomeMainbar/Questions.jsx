import { Link } from "react-router-dom"

export default function Questions({question}){
    return (
        <div className="display-question-container">
            <div className="display-votes-ans">
                <p>{question.upVotes}</p>
                <p>votes</p>
            </div>
            <div className="display-votes-ans">
                <p>{question.noOfanswers}</p>
                <p>Answers</p>
            </div>
            <div className="display-question-deatils">
                <Link to={`/Questions/${question.id}`} className="question-title-link">{question.questionTitle}</Link>
                <div className="display-tags-time">
                    <div className="display-tags">
                        {
                            question.questionTags.map((tag)=>(
                                <p key={tag}>{tag}</p>
                            ))
                        }
                    </div>
                    <p className="display-time">
                        asked {question.askedOn} by {question.userposted}
                    </p>
                </div>
            </div>
        </div>
    )
}