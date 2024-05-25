import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom"
import "./Add_form.css";
import Background from '../Background/Background';

const Add_form = ({ H1_name }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const [previousData, setPreviousData] = useState({});

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/Blog/Update/${id}`)
        .then(res => res.json())
        .then(data => {
          setTitle(data.title);
          setContent(data.content);
          setPreviousData(data);
        })
        .catch(err => {
          console.log("Error in fetching update data:", err);
        });
    }
  }, [id]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title: title || previousData.title, // Use previousData.title if title is empty
      content: content || previousData.content, // Use previousData.content if content is empty
    };
    const url = id ? `http://localhost:3000/Blog/Update/${id}` : "http://localhost:3000/Blog/Add";
    const method = id ? "PATCH" : "POST";

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(blog),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        console.log("Blog post added/updated successfully:", data);
        navigate("/");
      })
      .catch(err => {
        console.error("Error adding/updating blog post:", err);
        alert("Error adding/updating blog post. Please try again.");
      });
  };

  return (
    <div className='cont'>
      <Background color="#FFF9C4" />
      <form className='shadow position-absolute top-50 start-50 translate-middle border border-primary p-5 w-50 radius' onSubmit={handleOnSubmit}>
        <div className='text-center'>
          <p className="h1">{H1_name}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Blog Title</label>
          <input type="text" className="form-control" aria-label="default input example" onChange={(e) => setTitle(e.target.value)} value={title} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleBlogContent" className="form-label">Blog Content</label>
          <textarea className="form-control" id="exampleBlogContent" rows="5" onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        </div>
        <button className="btn btn-dark" type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Add_form;
