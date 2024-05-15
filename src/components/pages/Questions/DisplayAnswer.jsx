import QuestionDetails from "./QuestionDetails"
import Avatar from "../../Avatar"
import { Link } from 'react-router-dom'
import './Questions.css'

export default function DisplayAnswer({question}){
    return(
        <div>
            {
                question.answer.map((ans)=>(
                    <div className="display-ans" key={ans._id}>
                        <p>{ans.answerBody}</p>
                        <div className="question-action-user">
                            <div>
                                <button type="button">Share</button>
                                <button type="button">Delete</button>
                            </div>
                            <div>
                                <p> answered {ans.answerredOn}</p>
                                <Link to={`/User/${question.userId}`} className="user-link" style={{color: "#0086d8"}}>
                                    <Avatar backgroundColor="green" px="8px" py="5px">{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                        <div>
                                            {ans.userAnswered}
                                        </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}