import Post from "./Post";

const PostList = (props) => {
    return (
        <div style={{
            padding: 100,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {
                props.posts.map((post) =>
                    <Post
                        userName={post.userName}
                        imageUrl={post.imageUrl}
                        imageUserUrl={post.imageUserUrl}
                        imageDescription={post.imageDescription}
                    />
                )
            }
        </div>
    )
}

export default PostList;