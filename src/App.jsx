import { Container, Row, Col, Card, Button } from "react-bootstrap";

const products = [
	{
		id: 1,
		name: "Jordan Why Not .6 PF",
		image: "src/assets/jordan-why-not-6.png",
		price: 669,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 2,
		name: "Nike Air Max Impact 4",
		image: "src/assets/air-max-impact-4.png",
		price: 379,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 3,
		name: "Nike Air Presto",
		image: "src/assets/air-presto.png",
		price: 639,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 4,
		name: "Nike Air VaporMax 2023 Flyknit",
		image: "src/assets/air-vapormax.png",
		price: 939,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 5,
		name: "Nike Juniper Trail 2",
		image: "src/assets/juniper-trail-2.png",
		price: 339,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 6,
		name: "Nike Pegasus Turbo Next Nature SE",
		image: "src/assets/pegasus-turbo.png",
		price: 669,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 7,
		name: "Nike Rival Fly 3",
		image: "src/assets/rival-fly-3.png",
		price: 369,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 8,
		name: "Nike Victory Pro 3",
		image: "src/assets/victory-pro-3.png",
		price: 539,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
	{
		id: 9,
		name: "Air Jordan XXXVII Low PF",
		image: "src/assets/air-jordan-xxxvii.png",
		price: 779,
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		rating: "⭐⭐⭐⭐⭐",
	},
];

function ProductCard({ product }) {
	const { name, image, price, description, rating } = product;

	return (
		<Card className="h-100">
			<Card.Img variant="top" src={image} alt={name} />
			<Card.Body className="d-flex flex-column justify-content-center align-items-center py-5">
				<Card.Title>{name}</Card.Title>
				<Card.Text className="mt-2 px-5 text-center">
					{description}
				</Card.Text>
				<Card.Text>RM{price}</Card.Text>
				<Card.Text>{rating}</Card.Text>
				<Button variant="primary" className="mt-2 px-3 py-2">
					Add to Cart
				</Button>
			</Card.Body>
		</Card>
	);
}

function ProductList() {
	return (
		<Row>
			{products.map((product) => (
				<Col md={4} key={product.id} className="mb-4 mr-4">
					<ProductCard product={product} />
				</Col>
			))}
		</Row>
	);
}

function App() {
	return (
		<div className="bg-dark text-white">
			<Container className="py-5">
				<h1 className="text-center mb-5">E-Commerce Website</h1>
				<ProductList />
			</Container>
		</div>
	);
}

export default App;
