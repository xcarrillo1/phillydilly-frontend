import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {

    const [newForm, setNewForm] = useState({
        title: "",
        author: "",
        image: "",
        text: "",
    });

    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createPost(newForm);
        setNewForm({
            title: "",
            author: "",
            image: "",
            text: "",
        });
    };
    const loaded = () => {
        return props.post.map((post) => (
            <div key={post._id} className="post">
                <Link to={`/post/${post._id}`}><img src={post.image} alt={post.title} /></Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newForm.title}
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.author}
                    name="author"
                    placeholder="author"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.text}
                    name="text"
                    placeholder="text"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Post" />
            </form>
            {props.post ? loaded() : loading()}
        </section>
    );
}

export default Index;