// Displays all the products of a given makeup brand
const Details = () => {
  const filteredMakeupArray = [];
  return (
    <div>
      {filteredMakeupArray.map((makeup) => (
        <div key={makeup.id}>
          <img alt="makeup" src={makeup.image} />
          <div>
            <h3>
              {makeup.title}
            </h3>
            <h5>
              {makeup.priceSign}
              {makeup.price}
            </h5>
            <p>{makeup.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Details;
