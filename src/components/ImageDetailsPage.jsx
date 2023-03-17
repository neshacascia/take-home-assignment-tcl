export default function ImageDetailsPage({ backButton, artwork }) {
	return (
		<section>
			<button onClick={backButton}>Go Back</button>
			<img
				alt={artwork.thumbnail.alt_text}
				src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
			/>
			<h1>{artwork.title}</h1>
			<p>By: {artwork.artist_title}</p>
		</section>
	);
}
