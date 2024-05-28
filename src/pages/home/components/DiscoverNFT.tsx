function DiscoverNFT() {
  const nftList = [
    {
      id: 1,
      image: "discover_nft_1.png",
      name: "Distant Galaxy",
      artist: "MoonDancer",
      artistProfile: "discover_nft_1_1.png",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
    },
    {
      id: 2,
      image: "discover_nft_2.png",
      name: "Life On Edena",
      artist: "NebulaKid",
      artistProfile: "discover_nft_2_1.png",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
    },
    {
      id: 3,
      image: "discover_nft_3.png",
      name: "AstroFiction",
      artist: "Spaceone",
      artistProfile: "discover_nft_3_1.png",
      price: "1.63 ETH",
      highestBid: "0.33 wETH",
    },
  ];
  return (
    <div className="discover-wrapper">
      <div className="discover">
        <div className="discover__title">
          <h1>Discover More NFTs</h1>
          <span>Explore New Trending NFTs</span>
        </div>
        <div className="discover__list">
          {nftList.map((nft) => (
            <div key={nft.id} className="discover__item">
              <img src={`images/${nft.image}`} alt="discover" />
              <div className="content">
                <div className="owner-wrapper">
                  <h3>{nft.name}</h3>
                  <div className="owner">
                    <img src={`images/${nft.artistProfile}`} alt="owner" />
                    <p>{nft.artist}</p>
                  </div>
                </div>
                <div className="price-wrapper">
                  <div className="price">
                    <p>Price</p>
                    <span>{nft.price}</span>
                  </div>
                  <div className="price">
                    <p>Hightest Bid</p>
                    <span>{nft.highestBid}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn-see-all">
          <img src="images/Eye.svg" alt="icon" />
          See All
        </button>
      </div>
    </div>
  );
}

export default DiscoverNFT;
