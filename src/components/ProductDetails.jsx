import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const products = [
    { id: 1, name: 'Iphone 12 Pro Max', price: 60000, description: 'Este poderoso dispositivo apresenta uma tela Super Retina XDR de 6,7 polegadas, proporcionando cores vibrantes e uma qualidade de imagem impressionante. Além disso, o iPhone 12 Pro Max é equipado com o processador A14 Bionic, que oferece um desempenho rápido e eficiente em todas as tarefas.', image: '../images/iphone.webp' },
    { id: 2, name: 'Bundle c/ 1 Jogo (Fifa 2022)', price: 65500, description: 'Se você é um fã de jogos e especialmente apaixonado por futebol, este bundle é perfeito para si. Aproveite a emoção de controlar seus times favoritos, participar de campeonatos e criar momentos memoráveis ​​no mundo virtual do futebol.', image: '../images/ps5.webp' },
    { id: 3, name: 'HP Laserjet Printer 612DN', price: 89500, description: 'A HP Laserjet Printer 612DN é uma impressora a laser altamente confiável e eficiente. Com sua tecnologia avançada, ela oferece impressões nítidas e de alta qualidade, garantindo resultados profissionais em cada página.', image: '../images/impressora.webp' },
    { id: 4, name: 'Headset Pulse 3D Black', price: 9000, description: 'O Headset Pulse 3D Black é um fone de ouvido de alta qualidade, projetado para proporcionar uma experiência imersiva de áudio. Com tecnologia avançada, este headset oferece som surround 3D, permitindo que você mergulhe completamente nos seus jogos, filmes e músicas favoritos.', image: '../images/headphones.webp' },
    { id: 5, name: 'Apple TV 4K 64GB 2021', price: 19500, description: 'A Apple TV 4K 64GB 2021 é um dispositivo de streaming que oferece uma experiência de entretenimento imersiva. Com suporte a resolução 4K e HDR, você poderá desfrutar de imagens nítidas e vibrantes em sua TV. Além disso, possui um poderoso processador para garantir um desempenho rápido e fluido.', image: '../images/apple-tv.webp' },
    { id: 6, name: 'Acer Aspire 3 i3-1005G1', price: 44500, description: 'O Acer Aspire 3 i3-1005G1 é um laptop eficiente e confiável projetado para atender às suas necessidades diárias de computação. Equipado com um processador Intel Core i3-1005G1, este laptop oferece desempenho rápido e responsivo para lidar com tarefas cotidianas, como navegação na web, edição de documentos e reprodução de mídia.', image: '../images/acer.webp' },
  ];
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Preço: {product.price} MZN</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
    </div>
  );
};

export default ProductDetails;
