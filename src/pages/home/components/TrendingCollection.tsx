function TrendingCollection() {
  return (
    <div className="trending-collections">
      <div className="trending-collection__title">
        <h1>Trending Collection</h1>
        <span>Checkout our weekly updated trending collection.</span>
      </div>
      <div className="trending-collection__list">
        <div className="trending-collection__item">
          <div className="collection__main">
            <img src="images/trending_1.png" alt="main_collection" />
          </div>
          <div className="collection-list">
            <div className="collection__item">
              <img src="images/trending_1_1.png" alt="collection_item" />
            </div>
            <div className="collection__item">
              <img src="images/trending_1_2.png" alt="collection_item" />
            </div>
            <div className="collection__item numbers">1025+</div>
          </div>
          <div className="collection-owner-main">
            <p> DSGN Animals</p>
            <div className="owner__detail">
              <img src="images/trending_1_1_1.png" alt="owner" />
              <p>mrFox</p>
            </div>
          </div>
        </div>
        <div className="trending-collection__item collection_item1">
          <div className="collection__main">
            <img src="images/trending_2.png" alt="main_collection" />
          </div>
          <div className="collection-list">
            <div className="collection__item">
              <img src="images/trending_2_1.png" alt="collection_item" />
            </div>
            <div className="collection__item">
              <img src="images/trending_2_1.png" alt="collection_item" />
            </div>
            <div className="collection__item numbers">1025+</div>
          </div>
          <div className="collection-owner-main">
            <p>Magic Mushrooms</p>
            <div className="owner__detail">
              <img src="images/trending_2_1_1.png" alt="owner" />
              <p>Shroomie</p>
            </div>
          </div>
        </div>
        <div className="trending-collection__item collection_item2">
          <div className="collection__main">
            <img src="images/trending_3.png" alt="main_collection" />
          </div>
          <div className="collection-list">
            <div className="collection__item">
              <img src="images/trending_3_1.png" alt="collection_item" />
            </div>
            <div className="collection__item">
              <img src="images/trending_3_2.png" alt="collection_item" />
            </div>
            <div className="collection__item numbers">1025+</div>
          </div>
          <div className="collection-owner-main">
            <p>Disco Machines</p>
            <div className="owner__detail">
              <img src="images/trending_3_1_1.png" alt="owner" />
              <p>BeKind2Robots</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingCollection;
