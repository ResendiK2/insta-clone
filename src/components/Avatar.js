/* eslint-disable jsx-a11y/alt-text */
const Avatar = (props) => {
    console.log(props);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                padding: '2%',
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginRight: "2%",
            }}>
                <img
                    src={props.imageUserUrl}
                    style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: '50%',
                    }}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                <h2>{props.userName}</h2>
            </div>
        </div>
    )
}

export default Avatar;