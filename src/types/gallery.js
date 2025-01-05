import PropTypes from 'prop-types';

// Define possible categories as an array of strings
export const categories = ['Graphic Design', 'Motion Design', 'UI/UX Design', 'Branding'];

// Define the shape of a GalleryItem
export const GalleryItemShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  category: PropTypes.oneOf(categories).isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
});

// Example of using the category and gallery item shapes in components
export const exampleGalleryItems = [
  {
    id: '1',
    category: 'Graphic Design',
    imageUrl: '/public/Graphic design poster/1.webp',
    title: 'Example Title',
    width: 300,
    height: 400,
  },
];
