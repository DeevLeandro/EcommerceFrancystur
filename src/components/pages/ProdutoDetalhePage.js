import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faCheck, 
  faShoppingCart,
  faMapMarkerAlt,
  faClock,
  faChild,
  faCar,
  faChevronDown,
  faChevronUp,
  faImages,
  faChevronLeft,
  faChevronRight,
  faCalendarAlt,
  faTicketAlt,
  faUser,
  faInfoCircle,
  faFileContract,
  faRoute
} from "@fortawesome/free-solid-svg-icons";
import { todosProdutos } from "../data/products";
import { useCart } from "../CartContext";

const ProdutoDetalhePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { adicionarAoCarrinho } = useCart();
  const [quantidade, setQuantidade] = useState(1);
  const [dataSelecionada, setDataSelecionada] = useState('');
  const [tipoPrecoSelecionado, setTipoPrecoSelecionado] = useState('');
  const [duracaoSelecionada, setDuracaoSelecionada] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const produto = todosProdutos.find(p => p.id === parseInt(id));
  
  // Array de imagens para o produto
  const produtoImages = produto?.imagens || [
    produto?.imagem,
    "/images/logo.jpg",
    "/images/logo.jpg",
    "/images/logo.jpg"
  ].filter(Boolean);

  // Definir data atual como padrão quando o componente carrega
  useEffect(() => {
    const hoje = new Date().toISOString().split('T')[0];
    setDataSelecionada(hoje);
    
    if (produto) {
      if (typeof produto.preco === 'object') {
        const primeiroTipo = Object.keys(produto.preco)[0];
        if (produto.categoria === 'transporte-passeios') {
          setDuracaoSelecionada(primeiroTipo);
        } else {
          setTipoPrecoSelecionado(primeiroTipo);
        }
      }
    }
  }, [produto]);
  
  if (!produto) {
    return (
      <div style={{textAlign: 'center', padding: '50px 20px'}}>
        <h1 style={{color: '#666', marginBottom: '20px'}}>Produto não encontrado</h1>
        <button 
          onClick={() => navigate('/')}
          style={{
            padding: '10px 20px',
            background: '#2a9d8f',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Voltar para a página inicial
        </button>
      </div>
    );
  }
  
  const getPrecoAtual = () => {
    if (typeof produto.preco === 'object') {
      if (produto.categoria === 'transporte-passeios') {
        return duracaoSelecionada ? produto.preco[duracaoSelecionada] : Object.values(produto.preco)[0];
      } else {
        return tipoPrecoSelecionado ? produto.preco[tipoPrecoSelecionado] : Object.values(produto.preco)[0];
      }
    }
    return produto.preco;
  };
  
  const getNomeTipoPreco = (tipo) => {
    const nomes = {
      'adulto': 'Adulto',
      'crianca': 'Criança (5-11 anos)',
      'jovem': 'Jovem (12-17 anos)',
      'senior': 'Idoso (60+ anos)',
      '4 horas': '4 horas',
      '8 horas': '8 horas',
      '12 horas': '12 horas'
    };
    return nomes[tipo] || tipo;
  };
  
  const getNomeCategoria = (categoria) => {
    const nomes = {
      'passeios': 'Passeio Turístico',
      'vinicolas': 'Rota das Vinícolas',
      'jantares': 'Jantar Temático',
      'ingressos': 'Ingresso',
      'natal-luz': 'Natal Luz Gramado',
      'transfers': 'Transfer',
      'transporte-passeios': 'Transporte Personalizado'
    };
    return nomes[categoria] || categoria;
  };
  
  const handleAddToCart = () => {
    const preco = getPrecoAtual();
    const itemCarrinho = {
      ...produto,
      preco: preco,
      quantidade,
      dataSelecionada: dataSelecionada || 'A combinar',
      tipoPreco: tipoPrecoSelecionado || duracaoSelecionada || 'padrão'
    };
    
    adicionarAoCarrinho(itemCarrinho);
    navigate('/checkout');
  };
  
  const handleWhatsApp = () => {
    const preco = getPrecoAtual();
    const tipo = tipoPrecoSelecionado || duracaoSelecionada || 'adulto';
    const nomeTipo = getNomeTipoPreco(tipo);
    const total = preco * (produto.categoria === 'transporte-passeios' ? 1 : quantidade);
    
    let mensagem = `Olá! Tenho interesse no produto:\n*${produto.nome}*\n\n`;
    
    if (tipoPrecoSelecionado || duracaoSelecionada) {
      mensagem += `• Tipo/Tarifa: ${nomeTipo}\n`;
    }
    
    if (produto.categoria !== 'transporte-passeios') {
      mensagem += `• Quantidade: ${quantidade} pessoa(s)\n`;
    }
    
    mensagem += `• Data: ${dataSelecionada || 'A combinar'}\n` +
                `• Valor unitário: R$ ${preco.toFixed(2)}\n` +
                `• Valor total: R$ ${total.toFixed(2)}\n\n`;
    
    if (produto.faixaEtaria) {
      mensagem += `*Faixa etária:* ${produto.faixaEtaria}\n\n`;
    }
    
    if (produto.notas) {
      mensagem += `*Observações:* ${produto.notas}\n\n`;
    }
    
    mensagem += `Poderia me fornecer mais informações?`;
    
    const numeroWhatsApp = "5553991224480";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };
  
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === produtoImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? produtoImages.length - 1 : prevIndex - 1
    );
  };
  
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const renderSectionContent = (section) => {
    switch(section) {
      case 'roteiro':
        if (produto.roteiro) {
          return (
            <div className="section-content" 
              dangerouslySetInnerHTML={{ __html: produto.roteiro }} 
            />
          );
        } else {
          return (
            <div className="section-content">
              <h4>Roteiro Detalhado</h4>
              <p>Informações de roteiro específicas para este produto serão fornecidas na confirmação da reserva.</p>
              <p>Para mais detalhes sobre o roteiro, entre em contato conosco.</p>
            </div>
          );
        }
      
      case 'horarios':
        if (produto.horarios) {
          return (
            <div className="section-content">
              <h4>Horários Disponíveis:</h4>
              <div style={{ display: 'grid', gap: '10px', marginTop: '15px' }}>
                {produto.horarios.map((horario, index) => (
                  <div key={index} style={{
                    padding: '10px',
                    background: '#f8f9fa',
                    borderRadius: '6px',
                    border: '1px solid #ddd'
                  }}>
                    <FontAwesomeIcon icon={faClock} style={{ marginRight: '8px', color: '#2a9d8f' }} />
                    <span>{horario}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        } else {
          return (
            <div className="section-content">
              <h4>Horários</h4>
              <p>Horários flexíveis conforme disponibilidade. Entre em contato para agendar o melhor horário para você.</p>
            </div>
          );
        }
      
      case 'cancelamento':
        if (produto.politicasCancelamento) {
          return (
            <div className="section-content" 
              dangerouslySetInnerHTML={{ __html: produto.politicasCancelamento }} 
            />
          );
        } else {
          return (
            <div className="section-content">
              <h4>Políticas de Cancelamento</h4>
              <div style={{ 
                display: 'grid', 
                gap: '10px', 
                marginTop: '15px',
                padding: '15px',
                background: '#f8f9fa',
                borderRadius: '6px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <strong>Cancelamento padrão:</strong>
                  <span>Consulte as políticas específicas para este produto</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0' }}>
                  <strong>Contato para cancelamentos:</strong>
                  <span>WhatsApp: (53) 99122-4480</span>
                </div>
              </div>
            </div>
          );
        }
      
      default:
        return null;
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        
        {/* SEÇÃO DE IMAGENS - Carrossel que o cliente gostou */}
        <div className="product-image-section">
          <div className="main-image-container">
            <img 
              src={produtoImages[currentImageIndex]} 
              alt={`${produto.nome} - Foto ${currentImageIndex + 1}`}
              className="main-product-image"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-product.jpg";
              }}
            />
            
            {produtoImages.length > 1 && (
              <>
                <button 
                  className="nav-button prev" 
                  onClick={prevImage}
                  aria-label="Imagem anterior"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button 
                  className="nav-button next" 
                  onClick={nextImage}
                  aria-label="Próxima imagem"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                
                <div className="image-counter">
                  <span>{currentImageIndex + 1}</span> / <span>{produtoImages.length}</span>
                </div>
              </>
            )}
          </div>
          
          {/* MINIATURAS */}
          {produtoImages.length > 1 && (
            <div className="image-thumbnails">
              {produtoImages.map((img, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${currentImageIndex === index ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                >
                  <img 
                    src={img} 
                    alt={`${produto.nome} miniatura ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          )}
          
          <div className="image-badge">
            <FontAwesomeIcon icon={faImages} />
            <span>{produtoImages.length} {produtoImages.length === 1 ? 'foto' : 'fotos'}</span>
          </div>
        </div>
        
        <div className="product-info-section">
          
          {/* CABEÇALHO E INFORMAÇÕES BÁSICAS */}
          <div className="product-header">
            <div className="location-badge">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>{getNomeCategoria(produto.categoria)}</span>
            </div>
            
            <h1>{produto.nome}</h1>
          </div>
          
          {/* DESCRIÇÃO */}
          {produto.descricao && (
            <div className="product-description-section">
              <p className="product-description-text">{produto.descricao}</p>
            </div>
          )}
          
          {/* INFORMAÇÕES ESPECÍFICAS */}
          {produto.faixaEtaria && (
            <div className="age-info">
              <FontAwesomeIcon icon={faChild} />
              <span>{produto.faixaEtaria}</span>
            </div>
          )}
          
          {produto.notas && (
            <div className="notes-info">
              <span>📝 {produto.notas}</span>
            </div>
          )}
          
          {/* PREÇO */}
          <div className="price-container">
            {typeof produto.preco === 'object' ? (
              <>
                <span className="current-price">R$ {getPrecoAtual().toFixed(2)}</span>
                <select 
                  className="price-select"
                  value={tipoPrecoSelecionado || duracaoSelecionada}
                  onChange={(e) => {
                    if (produto.categoria === 'transporte-passeios') {
                      setDuracaoSelecionada(e.target.value);
                    } else {
                      setTipoPrecoSelecionado(e.target.value);
                    }
                  }}
                >
                  {Object.keys(produto.preco).map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {getNomeTipoPreco(tipo)} - R$ {produto.preco[tipo].toFixed(2)}
                    </option>
                  ))}
                </select>
                <span style={{fontSize: '0.9rem', color: '#666'}}>
                  {produto.categoria === 'transporte-passeios' ? 'por período' : 'por pessoa'}
                </span>
              </>
            ) : (
              <>
                <span className="current-price">R$ {produto.preco.toFixed(2)}</span>
                <span style={{fontSize: '0.9rem', color: '#666'}}>por pessoa</span>
                {produto.precoAntigo && (
                  <>
                    <span style={{textDecoration: 'line-through', color: '#999'}}>
                      R$ {produto.precoAntigo.toFixed(2)}
                    </span>
                    <span style={{
                      background: '#ff6b6b',
                      color: 'white',
                      padding: '3px 8px',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                      fontWeight: '600'
                    }}>
                      {Math.round((1 - produto.preco / produto.precoAntigo) * 100)}% OFF
                    </span>
                  </>
                )}
              </>
            )}
          </div>
          
          {/* AVALIAÇÃO */}
          <div className="rating-container">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <span className="review-count">({produto.reviews || 45} avaliações)</span>
            <span className="rating-value">⭐ {produto.avaliacao || 4.8}/5</span>
          </div>
          
          {/* DETALHES */}
          <div className="details-grid">
            <div className="detail-item">
              <FontAwesomeIcon icon={faClock} />
              <div>
                <span className="detail-label">Duração</span>
                <span className="detail-value">{produto.duracao}</span>
              </div>
            </div>
            
            <div className="detail-item">
              <FontAwesomeIcon icon={faUser} />
              <div>
                <span className="detail-label">Categoria</span>
                <span className="detail-value">{getNomeCategoria(produto.categoria)}</span>
              </div>
            </div>
          </div>
          
          {/* CONTROLES - QUANTIDADE E DATA */}
          {produto.categoria === 'transporte-passeios' ? (
            <div className="duration-selector">
              <label>
                <FontAwesomeIcon icon={faCar} />
                Duração do transporte:
              </label>
              <select 
                className="duration-select"
                value={duracaoSelecionada}
                onChange={(e) => setDuracaoSelecionada(e.target.value)}
              >
                {Object.keys(produto.preco).map((duracao) => (
                  <option key={duracao} value={duracao}>
                    {duracao} - R$ {produto.preco[duracao].toFixed(2)}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className="controls-row">
              <div className="control-group">
                <label>
                  <FontAwesomeIcon icon={faTicketAlt} />
                  Quantidade:
                </label>
                <div className="quantity-controls">
                  <button 
                    className="qty-btn"
                    onClick={() => setQuantidade(prev => Math.max(1, prev - 1))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantidade}
                    onChange={(e) => setQuantidade(parseInt(e.target.value) || 1)}
                    min="1"
                  />
                  <button 
                    className="qty-btn"
                    onClick={() => setQuantidade(prev => prev + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="control-group">
                <label>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Data:
                </label>
                <input 
                  type="date"
                  className="date-input"
                  value={dataSelecionada}
                  onChange={(e) => setDataSelecionada(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </div>
          )}
          
          {/* SEÇÕES EXPANSÍVEIS SIMPLIFICADAS */}
          <div className="expandable-sections">
            <div className="section-buttons-grid">
              <button 
                className={`section-btn ${activeSection === 'roteiro' ? 'active' : ''}`}
                onClick={() => toggleSection('roteiro')}
              >
                <FontAwesomeIcon icon={faRoute} />
                <span>Roteiro</span>
                <FontAwesomeIcon icon={activeSection === 'roteiro' ? faChevronUp : faChevronDown} />
              </button>
              
              <button 
                className={`section-btn ${activeSection === 'horarios' ? 'active' : ''}`}
                onClick={() => toggleSection('horarios')}
              >
                <FontAwesomeIcon icon={faClock} />
                <span>Horários</span>
                <FontAwesomeIcon icon={activeSection === 'horarios' ? faChevronUp : faChevronDown} />
              </button>
              
              <button 
                className={`section-btn ${activeSection === 'cancelamento' ? 'active' : ''}`}
                onClick={() => toggleSection('cancelamento')}
              >
                <FontAwesomeIcon icon={faFileContract} />
                <span>Cancelamento</span>
                <FontAwesomeIcon icon={activeSection === 'cancelamento' ? faChevronUp : faChevronDown} />
              </button>
            </div>
            
            {/* CONTEÚDO DAS SEÇÕES */}
            {activeSection && (
              <div className="section-content-container">
                {renderSectionContent(activeSection)}
              </div>
            )}
          </div>
          
          {/* RESUMO E AÇÕES */}
          <div className="total-summary">
            <div className="total-line">
              <span>Valor {produto.categoria === 'transporte-passeios' ? 'do período:' : 'unitário:'}</span>
              <span>R$ {getPrecoAtual().toFixed(2)}</span>
            </div>
            
            {produto.categoria !== 'transporte-passeios' && (
              <div className="total-line">
                <span>Quantidade:</span>
                <span>{quantidade}</span>
              </div>
            )}
            
            <div className="total-line" style={{paddingTop: '15px', borderTop: '2px solid #ddd'}}>
              <strong>TOTAL:</strong>
              <span className="total-amount">
                R$ {(getPrecoAtual() * (produto.categoria === 'transporte-passeios' ? 1 : quantidade)).toFixed(2)}
              </span>
            </div>
            
            <div className="action-buttons">
              <button onClick={handleAddToCart} className="btn-add-cart">
                <FontAwesomeIcon icon={faShoppingCart} /> 
                {produto.categoria === 'transporte-passeios' ? 'Contratar Transporte' : 'Comprar Agora'}
              </button>
              <button onClick={handleWhatsApp} className="btn-whatsapp">
                <FontAwesomeIcon icon={faInfoCircle} />
                Tirar Dúvidas
              </button>
            </div>
          </div>
          
          {/* NOTA FINAL */}
          <div className="product-note">
            <p>
              <strong>Importante:</strong> {produto.categoria === 'transporte-passeios' 
                ? 'O transporte deve ser agendado com antecedência. Alterações com 24h de antecedência.' 
                : 'Reservas válidas para a data selecionada. Em caso de dúvidas, entre em contato.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhePage;