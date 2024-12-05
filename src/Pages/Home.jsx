import PostCard from "./../Component/PostCard";
import { useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useRef } from "react";

import useTitle from "./../Hooks/useTitle";
const Home = () => {
  useTitle("Home");
  const [toggle, setToggle] = useState(false);
  const [posts, setPosts] = useState([]);
  const postsRef = useRef(collection(db, "posts"));
  useEffect(() => {
    async function getPosts() {
      let data = await getDocs(postsRef.current);
      setPosts(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    }
    getPosts();
  }, [postsRef, toggle]);

  return (
    <section>
      {posts.map((post) => (
        <PostCard
          key={post}
          post={post}
          toggle={toggle}
          setToggle={setToggle}
        />
      ))}
    </section>
  );
};

export default Home;
