import '../../../App.css'
import HomeMainbar from "../../HomeMainbar/HomeMainbar.jsx"
import RightSidebar from "../../RightSidebar/RightSidebar.jsx"
import LeftSidebar from "../../LeftSidebar/LeftSidebar.jsx"

export default function Questions() {
    return (
        <div className="home-container-1">
            <LeftSidebar />
            <div className="home-container-2">
                <HomeMainbar />
                <RightSidebar />
            </div>
        </div>
    )
}