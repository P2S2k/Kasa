import "../../utils/style/main.css"
import "../../utils/style/accueil.css"
import { Apparts } from "../../datas/Apparts"
import React from "react"
import { Link } from "react-router-dom"

function Annonces() {
    return (
        <div className="sticker-gallery">
            {Apparts.map(({ id, title, host, cover }) => (
                <Link key={id} className="sticker" to={`../Appart/${id}`}>
                    <img src={cover} className="sticker-pic" alt="" />
                    <span className="sticker-title">{title}</span>
                </Link>
            ))}
        </div>
    )
}

export default Annonces
