
import './style.css'

const MyComponent = () => {
    const TieuDing = {
        name: "1TieuDing",
        age: 23,
    }

    return (
        <>
            <div>{JSON.stringify(TieuDing)} & ITieuDing!!!</div>
            <div>{console.log("TieuDing")}</div>
            <div className="Child" style={{ fontSize: "12px" }}>child</div>
        </>
    )
}

export default MyComponent