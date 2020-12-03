const Comment = () => {
    return (
        <div style={{
            padding: 20,
            display: 'flex',
            flexDirection: "column",
            alignItems: 'center',
        }}>
            Comentar agora:
            <br />
            <input type={"text"} />
            <br />
            <button>Comentar</button>
        </div>
    )
}

export default Comment;