import React, {useState, useEffect} from 'react'
import Card from './Card'
import {
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    orderBy,
    query,
    setDoc,
  } from "@firebase/firestore";
  import { db } from '../../../firebase'




function SubPage({ id }) {

    const [post, setPost] = useState([]);
    useEffect(
        () =>
        onSnapshot(doc(db, "posts", id), (snapshot) => {
            setPost(snapshot.data());
        }),
        [db]
    );

  return (
      <> 
      {post && <Card post={post} key={post.id} postPage={id} id={id}  />}
      </>
    )
}

export default SubPage