import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const ProductCard = ({ produto }) => {
  const { adicionarAoCarrinho } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    adicionarAoCarrinho({
      ...produto,
      quantidade: 1,
      dataSelecionada: 'A combinar'
    });
  };

  return (
    <Link to={`/produto/${produto.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={produto.imagem} alt={produto.nome} loading="lazy" />
          <div className="product-badge">{produto.categoria}</div>
        </div>
        
        <div className="product-content">
          <h3 className="product-title">{produto.nome}</h3>
          <p className="product-description">{produto.descricao}</p>
          
          <div className="product-details">
            <div className="product-rating">
              <FontAwesomeIcon icon={faStar} />
              <span>{produto.avaliacao}</span>
              <span className="review-count">({produto.reviews})</span>
            </div>
            
            <div className="product-duration">
              <FontAwesomeIcon icon={faClock} />
              <span>{produto.duracao}</span>
            </div>
          </div>
          
          <div className="product-footer">
            <div className="product-price">
              <span className="price">R$ {produto.preco.toFixed(2)}</span>
              <span className="per-person">por pessoa</span>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;