import React, { useState, useEffect }  from "react";
import Section from "@styled/Section";
import axios from "axios";
import ShopDetails from './ShopDetails.jsx'
import AddPost from "./AddPost.jsx";
export default function Gallery() {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log('Fetching data...',data);
    try {
      const response = await axios.get('http://127.0.0.1:5000/product');
      setData(response.data);
      console.log('Data fetched:', response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Section>
      <a id="gallery" />
      <h2>Shop</h2>
      <p className="description">
        These photos were all taken in our barbershop. As you can see, our The
        environment is pleasant and suitable for taking care of you and your
        self-esteem.
      </p>
      <div className="wahbi-lkhazri" style={{
  display: 'grid',
  gap: '60px',
  alignItems: 'center',
  gridTemplateColumns: 'repeat(3, 1fr)'
}}> 

          {data.map((element, key) => (
            <ShopDetails key={key} element={element} />
          ))}

      </div>
      <AddPost />
    </Section>
  );
}