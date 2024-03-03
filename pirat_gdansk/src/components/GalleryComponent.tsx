function Gallery() {
    const data = [
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 14.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 15.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 16.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 21.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 23.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 24.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 27.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 28.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 30.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 31.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 36.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/EmptyName 40.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/piratgdansk 19.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/piratgdansk 26.jpg",
      },
      {
        imageLink:
          "src/assets/GalleryPhotos/piratgdansk 34.jpg",
      },
      
    
      
    ];
   
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-2 mx-4">
        {data.map(({ imageLink }, index) => (
          <div key={index}>
            <img
              className="h-40 w-full max-w-full rounded-lg object-cover object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    );
  }

  export default Gallery;
   