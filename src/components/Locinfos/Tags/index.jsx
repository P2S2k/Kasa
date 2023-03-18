import "../../../utils/style/appart.css"

function Tags({ tags }) {
    return (
        <div>
            {tags.map((tag) => (
                <span className="tag" key={tag}>
                    {tag}
                </span>
            ))}
        </div>
    )
}

export default Tags
