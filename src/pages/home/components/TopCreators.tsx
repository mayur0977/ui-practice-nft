function TopCreators() {
  const creatorList = [
    {
      id: 1,
      name: "Keepitreal",
      totalSales: "34.53 ETH",
      creatorImage: "creator_1.png",
    },
    {
      id: 2,
      name: "DigiLab",
      totalSales: "32.13 ETH",
      creatorImage: "creator_2.png",
    },
    {
      id: 3,
      name: "GravityOne",
      totalSales: "28.93 ETH",
      creatorImage: "creator_3.png",
    },
    {
      id: 4,
      name: "Juanie",
      totalSales: "25.30 ETH",
      creatorImage: "creator_4.png",
    },
    {
      id: 5,
      name: "BlueWhale",
      totalSales: "34.53 ETH",
      creatorImage: "creator_5.png",
    },
    {
      id: 6,
      name: "Mr Fox",
      totalSales: "34.53 ETH",
      creatorImage: "creator_6.png",
    },
    {
      id: 7,
      name: "Shroomie",
      totalSales: "34.53 ETH",
      creatorImage: "creator_7.png",
    },
    {
      id: 8,
      name: "Robotica",
      totalSales: "34.53 ETH",
      creatorImage: "creator_8.png",
    },
    {
      id: 9,
      name: "RustyRobot",
      totalSales: "34.53 ETH",
      creatorImage: "creator_9.png",
    },
    {
      id: 10,
      name: "Animakid",
      totalSales: "34.53 ETH",
      creatorImage: "creator_10.png",
    },
    {
      id: 11,
      name: "Dotgu",
      totalSales: "34.53 ETH",
      creatorImage: "creator_11.png",
    },
    {
      id: 12,
      name: "Ghiblier",
      totalSales: "34.53 ETH",
      creatorImage: "creator_12.png",
    },
  ];
  return (
    <div className="top-creators">
      <div className="top-creators__title">
        <h1>Top Creators</h1>
        <span>Checkout top Rated Creators on the NFT Marketplace</span>
      </div>

      <div className="top-creators__list">
        {creatorList.map((item, index) => (
          <div key={item.id} className="top-creators__item">
            <div className="number">{index + 1}</div>
            <div className="creator__detail__main">
              <img src={`images/${item.creatorImage}`} alt="top_creators" />
              <div className="creator__info">
                <p className="name">{item.name}</p>
                <div className="total-sales">
                  <p className="sales">Total Sales:</p>
                  <span className="eth">{item.totalSales}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCreators;
