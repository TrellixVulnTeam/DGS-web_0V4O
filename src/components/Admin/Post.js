import React, { useEffect, useState } from 'react'
import { db } from '../../firebase';
import {
    addDoc,
    collection,
    onSnapshot,
    doc,
    serverTimestamp,
    updateDoc,
    deleteDoc,
    query
  } from "@firebase/firestore";
import { getDownloadURL, ref, uploadString} from '@firebase/storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Post.css'


function Post() {
    const [newPost, setNewPost] = useState(true);
    const [loading, setLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    const [postId, setPostId] = useState("");
    const [pastTitle, setPastTitle] = useState("");
    const [pastText, setPastText] = useState("");
    const [posts, setPosts] = useState([]);
    const [deleteId, setDeleteId] = useState("");



    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('token')));
    }, [])

    useEffect(() => (
        onSnapshot(query(collection(db, 'posts')), (snapshots) => setPosts(snapshots.docs))
    ), [db]);

    const DeleteId = (e) => {
        setDeleteId(e.target.value);
    }
    const PostIdPast = (e) => {
        setPostId(e.target.value);
    }
    const changePastTitle = (e) => {
        setPastTitle(e.target.value);
    }
    const changePastText = (e) => {
        setPastText(e.target.value);
    }
    const SetPastPost = () => {
        if(posts) {
            posts.map((post) => {
                if(post.id === postId){
                    setPastText(post.data().text);
                    setPastTitle(post.data().title);
                    // console.log(post);
                }
                // console.log(post.data().title);
            })
        }
        if(pastText){
            alert("This post doesn't exist in this list");
            return
        }
        // console.log(pastText, pastTitle);
        setShow(!show)
    }
    const sendPastPost = async () => {
        if(loading)return
        setLoading(true);
        const docRef = await updateDoc(doc(db, 'posts', postId), {
            id: user.uid,
            title: pastTitle,
            text: pastText,
            timestamp: serverTimestamp(),
        }).then((res) => {
            console.log(res);
            toast("Post upload Successfully")
        })
        .catch((err) => {
            console.log(err);
        })
        setLoading(false);
        setPastText("");
        setPastTitle("");
        setPostId("");

    }

    const sendPost = async () => {
        if(loading)return
        setLoading(true);
        const docRef = await addDoc(collection(db, 'posts'), {
            id: user.uid,
            title: title,
            text: text,
            timestamp: serverTimestamp(),
        }).then((res) => {
            console.log(res);
            toast("Post upload Successfully")
        })
        setLoading(false);
        setText("");
        setTitle("");
    }
    const deletePost = async () => {
        await deleteDoc(doc(db, "posts", deleteId)).then((res) => {
            toast("Delete Successfully")
        });
        setDeleteId("");
    }
  return (
    <>
    {newPost ? (
        <> 
        <div className="Container">
        <div className="left">
            <button className="btn-primary _btn btn mb-3" onClick={() => setNewPost(true)}>
                New Post
            </button>
            <button className="btn-primary _btn btn" onClick={() => setNewPost(false)}>
                Past Post
            </button>
            <button type="button" className="btn btn-danger mb-3 mt-3" data-toggle="modal" data-target="#exampleModal">Delete</button>
        </div>
    </div>
    <div className="container">
        <h1>New Post</h1>
        <div className="row">
            <div className="col">
                    <label htmlFor="title" className='form-group mt-2'>Title</label>
                    <input 
                      type="text" 
                      placeholder='Enter title'
                      className='form-control'
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                     />
                     <label htmlFor="post" className='form-group mt-2'>New Post</label>
                     <textarea 
                      name="newpost"
                      id=""
                      cols="30"
                      rows="10"
                      placeholder='Details...'
                      className='form-control'
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      required
                    ></textarea>
                {!loading && <button className='_btn btn mt-2'  onClick={() => sendPost()}> Post </button> }
            </div>
        </div>
    </div> 
        </>
    ) : (
       <>
       {show ? (
           <> 
            <div className="Container">
                <div className="left">
                    <button className="btn-primary _btn btn mb-3" onClick={() => setNewPost(true)}>
                        New Post
                    </button>
                    <button className="btn-primary _btn btn" onClick={() => setNewPost(false)}>
                        Past Post
                    </button>
                    <button type="button" className="btn btn-danger mb-3 mt-3" data-toggle="modal" data-target="#exampleModal"> Delete</button>

                </div>
            </div>
            <div className="container">
                <h1>Past Post</h1>
                <div className="row">
                    <div className="col">
                        <form action="">
                            <label htmlFor="title" className='form-group mt-2'>Title</label>
                            <input 
                            type="text" 
                            placeholder='Enter title'
                            className='form-control'
                            value={pastTitle}
                            onChange={changePastTitle}
                            required
                            />
                            <label htmlFor="post" className='form-group mt-2'>New Post</label>
                            <textarea 
                            name="newpost"
                            id=""
                            cols="30"
                            rows="10"
                            placeholder='Details...'
                            className='form-control'
                            value={pastText}
                            onChange={changePastText}
                            required
                            ></textarea>
                           {!loading && <button className='_btn btn mt-2'  onClick={() => sendPastPost()}> Post </button> }
                        </form>
                    </div>
                </div>
            </div>
           </>
       ) : 
       (
           <> 
           <div className="Container">
                <div className="left">
                    <button className="btn-primary _btn btn mb-3" onClick={() => setNewPost(true)}>
                        New Post
                    </button>
                    <button className="btn-primary _btn btn" onClick={() => setNewPost(false)}>
                        Past Post
                    </button>
                    <button type="button" className="btn btn-dange mb-3 mt-3r" data-toggle="modal" data-target="#exampleModal"> Delete</button>
                </div>
            </div>
            <div className="container">
                <label htmlFor="title" className='form-group mt-2'>Post Id</label>
                <input 
                type="text" 
                placeholder='Enter id'
                className='form-control'
                value={postId}
                onChange={PostIdPast}
                required
                />
               <button  className='_btn btn mt-2' onClick={() => SetPastPost()}> Click </button> 
            </div>
           </>
       )}
       </>
    )}
    <ToastContainer />
    {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel" style={{color : "#666"}}>Delete Post</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <label htmlFor="title" className='form-group mt-2' style={{color : "#666"}}>Delete Id</label>
              <input 
                type="text" 
                placeholder='Enter id'
                className='form-control'
                value={deleteId}
                onChange={DeleteId}
                required
            />
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-danger" onClick={() => deletePost()}>Delete</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Post