export default function WidgetTags(){
    
    const tags = ['c', 'css', 'firebase', 'javascript', 'html', 'java', 'python', 'mongo', 'express', 'node', 'mySql', 'next.js', 'react.js']
    
    return(
        <div className="widget-tags">
            <h4>Watched Tags</h4>
            <div className="widget-tags-div">
                {
                    tags.map((tag)=>(
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
    )
}