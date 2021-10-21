import {useState} from "react";
import {Link} from "react-router-dom"

export default function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        author: "",
        image: "",
        text: "",
    });
    
    //handleChange function for form
    const handleChange = (event) => {
        setNewForm({...newForm, [event.target.name]: event.target.value});
    };

    // handleSubmit function for form
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
}