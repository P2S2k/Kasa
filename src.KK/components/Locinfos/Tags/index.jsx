import "../../../utils/style/main.css"
import "../../../utils/style/appart.css"
import { Apparts } from "../../../datas/Apparts"
import { useParams } from "react-router-dom"
//import { useState } from "react"

function Tags() {
    const { id } = useParams()
    const [appart] = Apparts.filter((appart) => appart.id === id)
    if (!appart) {
        alert("c'est la m...")
    } else {
        for (let i = 0; i < appart.tags.length; i++){
        return (
            <div >
                {appart.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                ))}
            </div>
        )}
        
    }
}

export default Tags
