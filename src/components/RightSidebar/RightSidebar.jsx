import Widget from './Widget'
import WidgetTags from './WidgetTags'
import './RightSidebar.css'

export default function RightSidebar(){
    return (
        <aside className='Right-Sidebar'>
            <Widget/>
            <WidgetTags/>
        </aside> 
    )
}