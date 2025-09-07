import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;

export const ShopCard = ({ products, images }) => {
    const getRandomImage = () => {
        const index = Math.floor(Math.random() * images.length);
        return images[index];
    };

    const handleBuy = (id, name) => {
        console.log(`Product ID: ${id}, Name: ${name}`);
    };

    return (
        <div style={{ padding: '24px' }}>
            <Row gutter={[50, 50]}>
                {products.map((product) => (
                    <Col key={product.id}>
                        <Card
                            hoverable
                            cover={<img style={{
                                width: '100%',
                                height: '80%',
                            }} alt={product.name} src={getRandomImage()} />}
                            style={{
                                width: '300px',
                                height: '400px',
                            }}
                        >
                            <Meta title={product.name} />
                            <Button
                                type="primary"
                                style={{ marginTop: '12px' }}
                                onClick={() => handleBuy(product.id, product.name)}
                            >
                                Buy now
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

