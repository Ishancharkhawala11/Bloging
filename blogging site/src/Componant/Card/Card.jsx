import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
// import './Card.css'; // Import CSS file for styling

const Card = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await fetch("http://localhost:3000/Blog/show");
        const result = await response.json();
        setCardData(result);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    };
    fetchCard();
  }, []);

  const deleteBlog = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/Blog/delete/${id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log('Item deleted successfully');
      
      setCardData(prevData => prevData.filter(card => card._id !== id));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const handleOnDelete = (id) => {
    deleteBlog(id);
  };

  const truncateContent = (content) => {
    if (content.length > 25) {
      return content.slice(0, 25) + "...";
    } else {
      return content;
    }
  };

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4"> {/* Using Bootstrap grid system */}
      {cardData.map((card, index) => {
        const cardDate = card.date ? new Date(card.date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }) : '';

        return (
          <div className="col" key={index}>
            <div className="card shadow mb-4 bg-body rounded h-100">
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{cardDate}</p>
                <p className="card-text">{truncateContent(card.content)}</p>
                <div className="d-flex flex-column mt-2">
                  <Link to={`/show/edit/${card._id}`} className="mb-2">
                    <button className="btn btn-outline-primary btn-sm w-100">Edit</button>
                  </Link>
                  <Link to={`/show/card/${card._id}`} className="mb-2">
                    <button className="btn btn-outline-primary btn-sm w-100">View</button>
                  </Link>
                  <button type="button" className="btn btn-outline-danger btn-sm w-100" onClick={() => handleOnDelete(card._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
