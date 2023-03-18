else {
    const pics = appart.pictures
    
    if (pics.length < 2) {
        return (
        <div classname="main">
            <img className="images" src={pics[0]} alt="test" />
        </div>
        )
    } else {
    return (
        
        <div main>
            <img className="images" src={pics[0]} alt="test" />
            <button className="nextpic" onClick={Titi}>Previous</button>
            <button className="nextpic" onClick={Toto}>Next</button>
        </div>
    )}
}
function Toto() {
    alert ("image suivante")
}
function Titi() {
    alert ("image precedente")
}


{pics.map((photos) => (
    <div className="photostick" key={`${id}-${photos}`}>
        <img className="images" src={photos} alt="" />
    </div>
))}

<button
className="arrowright"
onClick={() => setCount((count) => count + 1)}
>
<img src="../../assets/VectorR.png" alt="" />
</button>

<button
className="arrowleft"
onClick={() => setCount((count) => count - 1)}
>
<img src="../../assets/VectorL.png" alt="" />
</button>