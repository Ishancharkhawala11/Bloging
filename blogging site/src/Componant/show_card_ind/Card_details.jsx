import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Background from '../Background/Background';

const Card_details = () => {
  const [cardData, setCardData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/Blog/Card/${id}`);
        const result = await response.json();
        setCardData(result);
      } catch (error) {
        console.error('Error fetching card:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!cardData) {
    return <div>Loading...</div>;
  }

  const cardDate = new Date(cardData.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <>
      <Background color="#FFF9C4" />
      <div className="container">
        <div className="card position-absolute top-50 start-50 translate-middle overflow-auto shadow" style={{ width: "40rem", height: "500px" }}>
          <div className="card-body">
            {cardData.title ? (
              <>
                <h1>{cardData.title}</h1>
                <p>Date: {cardDate}</p>
                <p>{cardData.content}</p>
              </>
            ) : (
              <>
                <h1>No Card</h1>
                <p>No card available from this ID</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card_details;
