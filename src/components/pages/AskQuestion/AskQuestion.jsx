import './AskQuestion.css'
import { useNavigate } from 'react-router-dom'

export default function AskQuestion() {
    return (
        <div className="ask-question">
            <div className="ask-ques-container">
                <h1>Ask a Public Question</h1>
                <form>
                    <div className="ask-form-container">
                        <label htmlFor='ask-ques-title'>
                            <h4>Title</h4>
                            <p>Be specific and imagibe you're asking a question to another person</p>
                            <input type='text' name='questiontitle' id='ask-ques-title' placeholder='e.g Is there an R function for finding than element in a vector'/>
                        </label>
                        <label htmlFor='ask-ques-body'>
                            <h4>Body</h4>
                            <p>Include all the information someone would need to answer your question</p>
                            <textarea name="body" id="ask-ques-body" cols="155" rows="10"></textarea>
                        </label>
                        <label htmlFor='ask-ques-tags'>
                            <h4>Tags</h4>
                            <p>Add upto 5 tags to describe what your question is about</p>
                            <input type='text' name='questiontitle' id='ask-ques-tags' placeholder='e.g Xml Typescript Wordpress '/>
                        </label>
                    </div>
                    <input type='submit' value='Review your Question' className='review-btn'></input>
                </form>
            </div>
        </div>
    )
}
