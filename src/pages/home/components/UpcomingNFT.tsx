function UpcomingNFT() {
  return (
    <div className="upcoming-wrapper">
      <div className="upcoming">
        <div className="upcoming-container">
          <div className="upcoming-nft-title">
            <div className="badge">
              <img src="images/discover_nft_2_1.png" alt="" />
              <span>Shroomie</span>
            </div>
            <h1>Magic Mashrooms</h1>
          </div>
          <div className="timer">
            <span className="title">Auction ends in :</span>
            <div className="counter">
              <div className="time">
                <h2>59</h2>
                <span>Hours</span>
              </div>
              <h2 className="time">:</h2>
              <div className="time">
                <h2>59</h2>
                <span>Minutes</span>
              </div>
              <h2 className="time">:</h2>
              <div className="time">
                <h2>59</h2>
                <span>Seconds</span>
              </div>
            </div>
          </div>

          <div className="btn-see-nft">
            <button>
              <img src="images/Eye.svg" />
              <span>See NFT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingNFT;
