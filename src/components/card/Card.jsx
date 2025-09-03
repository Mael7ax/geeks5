import "./Card.css"
export const Card = ({user}) => {
    return (
        <>
            <div className="card">
                <h3>Name:{user.name}</h3>
                <h4>Age:{user.age}</h4>
                <h4>City: {user.address.city}</h4>
                <p><strong>Статус:</strong> {user.active ? "✅" : "❌"}</p>
            </div>
        </>
    )
}
