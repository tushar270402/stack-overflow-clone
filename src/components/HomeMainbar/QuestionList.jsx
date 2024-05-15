import Questions from './Questions'
export default function QuestionList({questionList}){
    return(
        <>
            {
                 questionList.map((question)=>(
                    <Questions question={question} key={question.id}/>
                )) 
            }
        </>
    )
}