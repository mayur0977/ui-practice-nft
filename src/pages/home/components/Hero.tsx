function Hero() {
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="hero__title">
          <h1>Discover Digital Art & Collect NFTs</h1>
          <span>
            NFT Marketplace Ui created with anima for Figma, bug and sell art
            from more than 20k NFT artists.
          </span>
        </div>
        <div className="hero__nft">
          <img src="images/hero_image1.png" alt="hero_nft" />
          <div className="nft__detail">
            <p> Space Walking</p>
            <div className="owner">
              <img src="images/hero_avatar1.png" alt="owner" />
              <p>Animakid</p>
            </div>
          </div>
        </div>

        <div className="hero__get-started">
          <button>
            <img src="images/rocket-icon.svg" alt="icon" />
            Get Started
          </button>
          <div className="hero__nft__total">
            <div className="nft-total">
              <p>240k+</p>
              <p>Total Sale</p>
            </div>
            <div className="nft-total">
              <p>100k+</p>
              <p>Auctions</p>
            </div>
            <div className="nft-total">
              <p>240k+</p>
              <p>Artists</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
