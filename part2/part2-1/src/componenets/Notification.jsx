const Notification = ({type, message}) => {
    const normalStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }
    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px',
    }
    let selectedStyle
    if (type === "error") {
        selectedStyle = errorStyle
    } else {
        selectedStyle = normalStyle
    }
    if (message !== "") {
        return (
            <div style={selectedStyle}>
                <br />
                <p>
                    {message}
                </p>
            </div>
        )
    } else {
        return null
    }
}

export default Notification
