import {useEffect, useState} from "react";
import {Route, Switch} from "react-router-dom";
import Index from "../pages/Index.js"
import Show from "../pages/Show.js";

export default function Main(props) {
  // set state to null
  const [post, setPost] = useState(null);

  // link to backend
  const URL = "http://localhost:4000/post/";

  const getPost = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPost(data);
  };

  const createPost = async (posting) => {
    // make post request to create people
    await fetch(URL, {
      method:"POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(posting),
    });
    // update list of posts
    getPost();
  };

  const updatePost = async (posting, id) => {
    // make put request to create posts
    await fetch(URL + id, {
      method:"PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(posting),
    });
    // update list of posts
    getPost();
  }

  return (
      <main>
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
          <Route
            path="/post/:id"
            render={(rp) => (
              <Show
                {...rp}
              />
            )}
          />
        </Switch>
      </main>
    );
};