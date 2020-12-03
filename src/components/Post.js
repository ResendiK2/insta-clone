/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-undef */
import Comment from "./Comment";
import Avatar from "./Avatar";

const Post = (props) => {
    return (
        <div style={
            {
                maxWidth: 700,
                boxShadow: '0px 0px 4px black',
                marginBottom: 20,
            }
        }>
            <Avatar
                imageUserUrl={props.imageUserUrl}
                userName={props.userName}
            />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <img
                    src={props.imageUrl}
                    style={{ maxWidth: '100%' }}
                />
                <p>{props.imageDescription}</p>
                <Comment />
            </div>
        </div>
    );
}

export default Post;