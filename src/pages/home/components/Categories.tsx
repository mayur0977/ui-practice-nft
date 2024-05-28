function Categories() {
  const categoriesList = [
    {
      id: 1,
      title: "Art",
      image: "category_1.png",
      overlayImage: "PaintBrush.svg",
    },
    {
      id: 2,
      title: "Collectibles",
      image: "category_2.png",
      overlayImage: "Swatches.svg",
    },
    {
      id: 3,
      title: "Music",
      image: "category_3.png",
      overlayImage: "MusicNotes.svg",
    },
    {
      id: 4,
      title: "Photography",
      image: "category_4.png",
      overlayImage: "Camera.svg",
    },
    {
      id: 5,
      title: "Video",
      image: "category_5.png",
      overlayImage: "VideoCamera.svg",
    },
    {
      id: 6,
      title: "Utility",
      image: "category_6.png",
      overlayImage: "MagicWand.svg",
    },
    {
      id: 7,
      title: "Sport",
      image: "category_7.png",
      overlayImage: "Basketball.svg",
    },
    {
      id: 8,
      title: "Virtual Words",
      image: "category_8.png",
      overlayImage: "Planet.svg",
    },
  ];
  return (
    <div className="categories-wrapper">
      <h1>Browse Categories</h1>

      <div className="categories__list">
        {categoriesList.map((category) => (
          <div key={category.id} className="categories__item">
            <div className="category__image-wrapper">
              <img
                className="cover"
                src={`images/${category.image}`}
                alt="category"
              />
              <img
                className="overlay__image"
                src={`images/${category.overlayImage}`}
                alt="category"
              />
            </div>
            <div className="content">
              <h3>{category.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
