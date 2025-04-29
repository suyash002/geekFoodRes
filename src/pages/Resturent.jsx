import React, { useState } from "react";
import "../css/resturant.css";
import data from "../data/resturants.json";

const Restaurant = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [starFilter, setStarFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 24;

  const filteredRestaurants = data.filter((restaurant) => {
    const nameMatch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch = restaurant.categories.some((category) =>
      category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const starMatch =
      starFilter === "" || restaurant.stars === parseInt(starFilter);
    return (nameMatch || categoryMatch) && starMatch;
  });

  const totalPages = Math.ceil(filteredRestaurants.length / itemsPerPage);
  const currentItems = filteredRestaurants.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderStars = (stars) => {
    return (
      <span className="star-rating">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </span>
    );
  };

  // Create an array of pages to show, limiting to 5 pages at a time
  const generatePageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(currentPage - 2, 1);
    let endPage = Math.min(startPage + 4, totalPages);

    if (endPage - startPage < 4) {
      startPage = Math.max(endPage - 4, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className="restaurant-container">
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
        <input
          type="number"
          placeholder="Filter by stars"
          min="0"
          max="5"
          step="1"
          value={starFilter}
          onChange={(e) => {
            setStarFilter(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

      <div className="restaurant-grid">
        {currentItems.map((restaurant) => (
          <div className="restaurant-card" key={restaurant._id.$oid}>
            <div>
              <h2>{restaurant.name}</h2>
              {renderStars(restaurant.stars)}
              <div className="tags">
                {restaurant.categories.map((cat, i) => (
                  <span className="tag" key={i}>
                    🍽 {cat}
                  </span>
                ))}
              </div>
              <a href="#" className="menu-link">
                Visit Menu
              </a>
            </div>
            {/* Contact Info */}
            {restaurant.contact && (
              <div className="contact-info">
                <p>📞 {restaurant.contact.phone}</p>
                <p>📧 {restaurant.contact.email}</p>
                <p>
                  📍 Lat: {restaurant.contact.location[1]}, Lng:{" "}
                  {restaurant.contact.location[0]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>

        {generatePageNumbers().map((page) => (
          <button
            key={page}
            className={page === currentPage ? "active" : ""}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default Restaurant;