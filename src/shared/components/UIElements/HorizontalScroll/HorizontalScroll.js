import React from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = (props) => {
	return <div className="horizontal-scroll-container">{props.children}</div>;
};

export default HorizontalScroll;

// {props.items.map((place) => (
//    <PlaceItem
//       listStyle={props.listStyle}
//       key={place.id}
//       id={place.id}
//       image={place.image}
//       title={place.title}
//       description={place.description}
//       address={place.address}
//       creatorId={place.creator}
//       coordinates={place.location}
//       onDelete={props.onDeletePlace}
//       place={place}
//       updatePreview={props.updatePreview}
//       preview={props.preview}
//    />
// ))}
