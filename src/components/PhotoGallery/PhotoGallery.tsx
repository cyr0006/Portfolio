import CircularGallery from "../CircularGallery/CircularGallery";
import acyrus1 from "../../assets/acyrus1.jpg";
import acyrus3 from "../../assets/acyrus3.png";
import acyrus4 from "../../assets/acyrus4.jpg";
import acyrus5 from "../../assets/acyrus5.png";
import "./PhotoGallery.css";

const items = [
  { image: acyrus3, alt: "Aryan Cyrus" },
  { image: acyrus4, alt: "Aryan Cyrus" },
  { image: acyrus1, alt: "Aryan Cyrus" },
  { image: acyrus5, alt: "Aryan Cyrus" },
];

const PhotoGallery = () => {
  return (
    <div className="photo-gallery-slot">
      <CircularGallery items={items} bend={5} textColor="#f5deb3" showTitles={false} />
    </div>
  );
};

export default PhotoGallery;
