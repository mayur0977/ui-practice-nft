function HowItWorks() {
  return (
    <div className="work-wrapper">
      <div className="work__title">
        <h1>How it works</h1>
        <span>Find Out How To Get Started</span>
      </div>

      <div className="work__list">
        <div className="work__item">
          <div className="work__item-image">
            <img src="images/work_1.png" alt="how_it_works" />
          </div>
          <div className="work__item__details">
            <h1>Setup Your Wallet</h1>
            <p>
              Set up your wallet of choice. Collect it to the Animaket by
              clicking the wallet icon in the top right corner
            </p>
          </div>
        </div>
        <div className="work__item">
          <div className="work__item-image">
            <img src="images/work_2.png" alt="how_it_works" />
          </div>
          <div className="work__item__details">
            <h1>Create Collection</h1>
            <p>
              Upload your work and setup your collection. Add a description,
              social links and floor price.
            </p>
          </div>
        </div>
        <div className="work__item">
          <div className="work__item-image">
            <img src="images/work_3.png" alt="how_it_works" />
          </div>
          <div className="work__item__details">
            <h1>Start Earning</h1>
            <p>
              Choose between auctions and fixed-price listings. Start earning by
              selling your NFTs or trading others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
