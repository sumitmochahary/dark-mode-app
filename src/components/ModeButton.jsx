import { useEffect } from "react"
import { useState } from "react"

function ModeButton() {

    const [isLightMode,setDarkMode] = useState(false)

    useEffect(() => {
        document.body.style.transition= "background-color 0.5s ease-in-out"
        document.body.style.backgroundColor = isLightMode ? "#ffffff" : "#242424"
    },[isLightMode])

    const toggle = () => {
        setDarkMode(!isLightMode)
    }

    return(
        <div>
            <button onClick={toggle}>{isLightMode ? "Dark Mode" : "Light Mode"}</button>
        </div>
    )
}

export default ModeButton
