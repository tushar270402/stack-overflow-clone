import { Link, useLocation, useNavigate} from 'react-router-dom'
import './HomeMainbar.css'
import QuestionList from './QuestionList'

export default function HomeMainbar() {
    const location = useLocation()
    const user = 1;
    const navigate = useNavigate();

    var questionList = [{
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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

    const checkAuth = ()=> {
        if (user === null){
            alert("Login or Signup to ask a question")
            navigate('/Auth')
        } else {
            navigate('./AskQuestion')
        }
    }

    return (
        <div className='main-bar'>
            <div className='main-bar-header'>
                {
                    location.pathname == '/' ? <h1>Top Questions</h1> : <h1>All Questions</h1>
                }
                <button onClick={checkAuth} className='ask-btn'>Ask Question</button>
            </div>
            <div>
                {
                    questionList === null ? <h1>Loading...</h1> :
                        <>
                            <p>{questionList.length} questions</p>
                             <QuestionList questionList={questionList}/>
                        </>
                }
            </div>
        </div>
    )
}