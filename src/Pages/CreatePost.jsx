import React from "react";
import useTitle from './../Hooks/useTitle';

import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  let navi = useNavigate();
  useTitle("Create Post");

  const postRef = collection(db, "posts");

  async function handleSubmitPost(e) {
    e.preventDefault();
    
    let document = {
      title: e.target.title.value,
      description: e.target.description.value,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid
      }
    };
    await addDoc(postRef, document);
    navi("/");
  }
  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form action="" className="createPost" onSubmit={handleSubmitPost}>
        <input
          type="text"
          className="title"
          name="title"
          placeholder="Title"
          maxLength="50"
          required
        />
        <textarea
          type="text"
          className="description"
          name="description"
          placeholder="Description"
          maxLength="600"
          required
        ></textarea>
        <button type="submit" className="submit">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
