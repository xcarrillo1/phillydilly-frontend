import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

function Main(props) {
    const [post, setPost] = useState(null);

    const URL = "https://phillydilly.herokuapp.com/post/";

    const getPost = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setPost(data);
    };

    const createPost = async (post) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(post),
        });
        getPost();
    };

    const updatePost = async (post, id) => {
        await fetch(URL + id, { 
            method: "PUT" , 
            headers: {
                "Content-Type": "Application/json", 
            },
            body: JSON.stringify(post),
        });
        getPost();
    }

    const deletePost = async id => {
        await fetch(URL + id, { 
            method: "DELETE", 
        })
        getPost();
    }

    useEffect(() => getPost(), []);

    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Index post={post} createPost={createPost} />
                </Route>
                <Route
                    path="/post/:id"
                    render={(rp) => (
                        <Show
                            post={post}
                            updatePost={updatePost}
                            deletePost={deletePost}
                            {...rp}
                        />
                    )}
                />
            </Switch>
        </main>
    );
}

export default Main;