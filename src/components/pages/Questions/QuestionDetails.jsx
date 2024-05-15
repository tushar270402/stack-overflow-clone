import { useParams, Link } from "react-router-dom"
import upvote from '../../../assets/caret-up-solid.svg'
import downvote from '../../../assets/caret-down-solid.svg'
import './Questions.css'
import Avatar from "../../Avatar"
import DisplayAnswer from "./DisplayAnswer"

export default function QuestionDetails(){

    const { id } = useParams()
    var questionList = [{
       _id: '1',
        upVotes: 3,
        downVotes: 3,
        noOfanswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "function", "nodejs", "mongodb", "javascript"],
        userposted: "Tushar",
        askedOn: "Jan 1",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Kumar",
                answerredOn: "Jan 2",
                userId: 2
            }
        ]
    }, {
       _id: '2',
        upVotes: 3,
        downVotes: 3,
        noOfanswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "function", "nodejs"],
        userposted: "Tushar",
        askedOn: "Jan 1",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Kumar",
                answerredOn: "Jan 2",
                userId: 2
            }
        ]
    }, {
       _id: '3',
        upVotes: 3,
        downVotes: 3,
        noOfanswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "function", "nodejs"],
        userposted: "Tushar",
        askedOn: "Jan 1",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Kumar",
                answerredOn: "Jan 2",
                userId: 2
            }
        ]
    }, {
       _id: '4',
        upVotes: 3,
        downVotes: 3, 
        noOfanswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "function", "nodejs"],
        userposted: "Tushar",
        askedOn: "Jan 1",
        answer: [
            {
                answerBody: "Answer",
                userAnswered: "Kumar",
                answerredOn: "Jan 2",
                userId: 2
            }
        ]
    },]

    return(
        <div className="question-details-page">
            {
                questionList === null ?
                <h1>Loading...</h1>:
                <>
                    {
                        questionList.filter(question => question._id === id).map(question =>(
                            <div key={question._id}>
                                <section className="question-details-container">
                                    <h1>{question.questionTitle}</h1>
                                    <div className="question-details-container-2">
                                        <div className="question-votes">
                                            <img src={upvote} alt="" width={18} className="votes-icon"></img>
                                            <p>{question.upVotes - question.downVotes}</p>
                                            <img src={downvote} alt="" width={18} className="votes-icon"></img>
                                        </div>
                                        <div style={{width: "100%"}}>
                                            <p className="question-body">{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag)=> (
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-action-user">
                                                <div>
                                                    <button type="button">Share</button>
                                                    <button type="button">Delete</button>
                                                </div>
                                                <div>
                                                    <p>asked on {question.askedOn}</p>
                                                    <Link to={`/User/${question.userId}`} className="user-link" style={{color: "#0086d8"}}>
                                                        <Avatar backgroundColor="orange" px="8px" py="5px">{question.userposted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userposted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfanswers !== 0 && (
                                        <section>
                                            <h3>{question.noOfanswers} answers</h3>
                                            <DisplayAnswer key={question._id} question={question}/>
                                        </section>
                                    )
                                }
                                <section className="post-ans-container">
                                    <h3 className="">Your Answer</h3>
                                    <form>
                                        <textarea rows="10" cols="30"></textarea><br/>
                                        <input type="submit" className="post-ans-btn" value='Post Your Answer'></input>
                                    </form>
                                    <p>Browse other Question tagged </p>
                                    {
                                        question.questionTags.map((tag)=>(
                                            <Link to='/Tags' key={tag} className="ans-tags">{tag} </Link>
                                        ))
                                    }or 
                                    <Link to='/AskQuestion' style={{textDecoration: "none", color : "009dff"}}> Ask your own question</Link>
                                </section>
                            </div> 
                        ))
                    }
                </>
            }
        </div>
    )
}