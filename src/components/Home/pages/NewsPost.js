/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react'
import { db } from '../../../firebase'
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "@firebase/firestore";
import Card from './Card';
import './Card.css'
import { Link } from 'react-router-dom';




function News() {
  const [posts, setPosts] = useState([]);
  const [pagenum, setPageNum] = useState(1);
  useEffect(() => 
     onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')),  (snapshot) => {
       setPosts(snapshot.docs)
      }),
  [db]);

  const pagesChange = (x, page_size) => {
    if(x === 1 && pagenum * page_size >= posts.length)return;
    else if(x === 1){
      setPageNum(pagenum + 1);
    }
    else if(x === -1 && pagenum === 1)return
    else if(x === -1) {
      setPageNum(pagenum - 1);
    }
  }
  
  function paginate(array, page_size, page_number) {
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
  
  return (
    
    <div className="news">
      {posts && paginate(posts, 5, pagenum).map((post) => 
      <Link to={`/news/subpage/?id=${post.id}`} style={{textDecoration : 'none'}} key={post.id}> <Card id={post.id} post={post.data()} key={post.id} /></Link>
      )}
    <nav aria-label="Page navigation example">  
       <ul className="pagination">
        <li className="page-item"><Link className="page-link" to={`/news/?${pagenum}`} onClick={() => pagesChange(-1, 5)}>Previous</Link></li>
        <li className="page-item"><Link className="page-link" to={`/news/?${pagenum}`} onClick={() => pagesChange(1, 5)}>Next</Link></li>
      </ul>
      </nav>
    </div>
  
  )
}

export default News