import { useState } from "react";

function Show(props) {
    const id = props.match.params.id
    const post = props.post
    const posting = post.find(p => p._id === id)

    const [editForm, setEditForm] = useState(posting);

    const handleChange = event => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.updatePost(editForm, posting._id);
        props.history.push("/");
    }

    const removePosting = () => {
        props.deletePost(posting._id);
        props.history.push("/");
    }

    return (
        <div className="posting">
            <h1>{posting.title}</h1>
            <h2>{posting.author}</h2>
            <img src={posting.image} alt={posting.title} />
            <button id="delete" onClick={removePosting}>
                DELETE
            </button>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={editForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.author}
                    name="author"
                    placeholder="author"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.image}
                    name="image"
                    placeholder="image"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={editForm.text}
                    name="text"
                    placeholder="text"
                    onChange={handleChange}
                />
                <input type="submit" value="Update Post" />
            </form>
        </div>
    )
}

export default Show;