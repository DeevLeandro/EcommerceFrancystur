import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faClock, faCartPlus, faUsers, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

const ProductCard = ({ produto }) => {
  const { adicionarAoCarrinho } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Criar um item básico para o carrinho
    const itemCarrinho = {
      ...produto,
      quantidade: 1,
      // Se o preço for objeto, usar o primeiro valor
      preco: typeof produto.preco === 'object' 
        ? Object.values(produto.preco)[0] 
        : produto.preco
    };
    
    adicionarAoCarrinho(itemCarrinho);
  };

  // Função para obter o preço de exibição
  const getPrecoExibicao = () => {
    if (!produto.preco) return "0.00";
    
    if (typeof produto.preco === 'object') {
      // Se for objeto, pega o menor valor
      const valores = Object.values(produto.preco);
      if (valores.length === 0) return "0.00";
      
      const valoresNumericos = valores.map(v => parseFloat(v) || 0);
      const menorPreco = Math.min(...valoresNumericos);
      return menorPreco.toFixed(2);
    }
    
    // Se for número, formata direto
    const precoNum = parseFloat(produto.preco);
    return isNaN(precoNum) ? "0.00" : precoNum.toFixed(2);
  };

  // Função para obter o texto do preço
  const getTextoPreco = () => {
    const precoExibicao = getPrecoExibicao();
    
    if (typeof produto.preco === 'object') {
      const valores = Object.values(produto.preco);
      if (valores.length === 0) return "R$ 0,00";
      
      const valoresNumericos = valores.map(v => parseFloat(v) || 0);
      const menorPreco = Math.min(...valoresNumericos);
      const maiorPreco = Math.max(...valoresNumericos);
      
      if (valores.length === 1 || menorPreco === maiorPreco) {
        return `R$ ${menorPreco.toFixed(2).replace('.', ',')}`;
      }
      
      return `A partir de R$ ${menorPreco.toFixed(2).replace('.', ',')}`;
    }
    
    return `R$ ${precoExibicao.replace('.', ',')}`;
  };

  // Função para verificar se tem múltiplos preços
  const temMultiplosPrecos = () => {
    return typeof produto.preco === 'object' && Object.keys(produto.preco).length > 1;
  };

  // Função para obter a categoria formatada
  const getCategoriaFormatada = () => {
    const categorias = {
      'passeios': 'Passeio',
      'vinicolas': 'Vinícola',
      'transfers': 'Transfer',
      'jantares': 'Jantar',
      'ingressos': 'Ingresso',
      'natal-luz': 'Natal Luz',
      'transporte-passeios': 'Transporte'
    };
    
    return categorias[produto.categoria] || produto.categoria;
  };

  const textoPreco = getTextoPreco();
  const categoriaFormatada = getCategoriaFormatada();
  const precoExibicao = getPrecoExibicao();

  return (
    <Link to={`/produto/${produto.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={produto.imagem} alt={produto.nome} loading="lazy" />
          <div className="product-badge">{categoriaFormatada}</div>
        </div>
        
        <div className="product-content">
          <div className="product-header">
            <div className="location-badge">
              <FontAwesomeIcon icon={faMapMarkerAlt} size="xs" />
              <span>Gramado, RS</span>
            </div>
            
            <div className="product-rating">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              <span>{produto.avaliacao || 4.8}</span>
              <span className="review-count">({produto.reviews || 45})</span>
            </div>
          </div>
          
          <h3 className="product-title">{produto.nome}</h3>
          
          <div className="product-details">
            <div className="product-duration">
              <FontAwesomeIcon icon={faClock} />
              <span>{produto.duracao}</span>
            </div>
          </div>
          
          {produto.faixaEtaria && (
            <div className="age-range">
              <span>{produto.faixaEtaria}</span>
            </div>
          )}
          
          {temMultiplosPrecos() && (
            <div className="multi-price-notice">
              <span>Várias opções disponíveis</span>
            </div>
          )}
          
          <div className="product-footer">
            <div className="product-price">
              <span className="price">{textoPreco}</span>
              <span className="per-person">
                {produto.categoria === 'transporte-passeios' ? 'por período' : 'por pessoa'}
              </span>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              title="Adicionar ao carrinho"
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