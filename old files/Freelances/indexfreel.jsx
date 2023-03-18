import "../../App.css"
import DefaultPicture from "../../assets/profile.png"
import Card from "../../components/Card"

const freelanceProfiles = [
    {
        name: "Pierre",
        jobTitle: "CTO",
        picture: DefaultPicture,
    },

    {
        name: "Paul",
        jobTitle: "TC",
        picture: DefaultPicture,
    },

    {
        name: "Jacques",
        jobTitle: "PM",
        picture: DefaultPicture,
    },
]
function Freelances() {
    return (
        <div>
            <h1>Freelances 💻</h1>
            {freelanceProfiles.map((profile, index) => (
                <Card
                    key={`${profile.name}-${index}`}
                    label={profile.jobTitle}
                    picture={profile.picture}
                    title={profile.name}
                />
            ))}
        </div>
    )
}

export default Freelances
