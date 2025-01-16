const HomeItem = ({ item }) => {
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="" />
      <div className="rating">
        {item.rating.stars} 🌟 | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="End">
        <button className="btn-add-bag" onClick={() => console.log('clicked')}>
          Add to Bag
        </button>
        <i
          onClick="addToWishlist({item.id},event)"
          className="fa-regular dil fa-heart"
        ></i>
      </div>
    </div>
  );
};
export default HomeItem;
