import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faStar, 
  faCheck, 
  faUsers,
  faCalendarAlt,
  faShoppingCart,
  faMapMarkerAlt,
  faTicketAlt,
  faClock,
  faChild,
  faUser,
  faUserTie,
  faCar,
  faChevronDown,
  faChevronUp,
  faImages,
  faUtensils,
  faWineBottle,
  faMountain,
  faTheaterMasks,
  faTree,
  faBus,
  faInfoCircle,
  faFileContract,
  faChevronLeft,
  faChevronRight
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
  
  const intervalRef = useRef(null);
  
  const produto = todosProdutos.find(p => p.id === parseInt(id));
  
  // Array de imagens para o produto
  const produtoImages = produto?.imagens || [
    produto?.imagem,
    "/images/gramado-tour-2.jpg",
    "/images/gramado-tour-3.jpg",
    "/images/gramado-tour-4.jpg"
  ].filter(Boolean);

  // Definir data atual como padrão quando o componente carrega
  useEffect(() => {
    const hoje = new Date().toISOString().split('T')[0];
    setDataSelecionada(hoje);
    
    if (produto) {
      if (typeof produto.preco === 'object') {
        const primeiroTipo = Object.keys(produto.preco)[0];
        setTipoPrecoSelecionado(primeiroTipo);
      } else if (produto.categoria === 'transporte-passeios' && produto.preco && typeof produto.preco === 'object') {
        const primeiraDuracao = Object.keys(produto.preco)[0];
        setDuracaoSelecionada(primeiraDuracao);
      }
    }
  }, [produto]);
  
  // Auto-play do carrossel
  useEffect(() => {
    if (produtoImages.length > 1) {
      intervalRef.current = setInterval(() => {
        nextImage();
      }, 4000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [produtoImages.length, currentImageIndex]);
  
  if (!produto) {
    return (
      <div className="product-not-found">
        <h1>Produto não encontrado</h1>
        <button onClick={() => navigate('/')}>Voltar para a página inicial</button>
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
      'crianca': 'Criança',
      'jovem': 'Jovem',
      'senior': 'Idoso',
      '4 horas': '4 horas',
      '8 horas': '8 horas',
      '12 horas': '12 horas'
    };
    return nomes[tipo] || tipo;
  };
  
  const getIconeTipoPreco = (tipo) => {
    const icones = {
      'adulto': faUser,
      'crianca': faChild,
      'jovem': faUser,
      'senior': faUserTie,
      '4 horas': faClock,
      '8 horas': faClock,
      '12 horas': faClock
    };
    return icones[tipo] || faUser;
  };

  const getIconeCategoria = () => {
    switch(produto.categoria) {
      case 'passeios': return faMountain;
      case 'vinicolas': return faWineBottle;
      case 'jantares': return faUtensils;
      case 'ingressos': return faTicketAlt;
      case 'natal-luz': return faTree;
      case 'transfers': return faBus;
      case 'transporte-passeios': return faCar;
      default: return faMapMarkerAlt;
    }
  };
  
  const handleAddToCart = () => {
    const preco = getPrecoAtual();
    const itemCarrinho = {
      ...produto,
      preco: preco,
      quantidade,
      dataSelecionada: dataSelecionada || 'A combinar',
      tipoPreco: tipoPrecoSelecionado || duracaoSelecionada
    };
    
    adicionarAoCarrinho(itemCarrinho);
    navigate('/checkout');
  };
  
  const handleWhatsApp = () => {
    const preco = getPrecoAtual();
    const tipo = tipoPrecoSelecionado || duracaoSelecionada || 'adulto';
    const nomeTipo = getNomeTipoPreco(tipo);
    
    let mensagem = `Olá! Gostaria de informações sobre: *${produto.nome}*\n\n`;
    
    if (tipoPrecoSelecionado || duracaoSelecionada) {
      mensagem += `• Tipo: ${nomeTipo}\n`;
    }
    
    mensagem += `• Quantidade: ${quantidade}\n` +
                `• Data selecionada: ${dataSelecionada}\n` +
                `• Valor unitário: R$ ${preco.toFixed(2)}\n` +
                `• Valor total: R$ ${(preco * quantidade).toFixed(2)}\n\n`;
    
    if (produto.faixaEtaria) {
      mensagem += `*Faixa etária:*\n${produto.faixaEtaria}\n\n`;
    }
    
    if (produto.notas) {
      mensagem += `*Observações:*\n${produto.notas}\n\n`;
    }
    
    mensagem += `Poderia me fornecer mais detalhes?`;
    
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
        return produto.roteiro ? (
          <div className="section-content" dangerouslySetInnerHTML={{ __html: produto.roteiro }} />
        ) : (
          <div className="section-content">
            <h4>Roteiro Detalhado</h4>
            <p>Informações de roteiro específicas para este produto serão fornecidas na confirmação da reserva.</p>
            <p>Para mais detalhes sobre o roteiro, entre em contato conosco.</p>
          </div>
        );
      
      case 'pontos':
        return produto.pontosVisita ? (
          <div className="section-content">
            <h4>Pontos de Visitação Incluídos:</h4>
            <div className="points-grid">
              {produto.pontosVisita.map((ponto, index) => (
                <div key={index} className="point-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{ponto}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="section-content">
            <h4>Pontos de Visitação</h4>
            <p>Os pontos de visitação serão definidos conforme o roteiro escolhido e podem ser personalizados.</p>
          </div>
        );
      
      case 'horarios':
        return produto.horarios ? (
          <div className="section-content">
            <h4>Horários Disponíveis:</h4>
            <div className="schedule-grid">
              {produto.horarios.map((horario, index) => (
                <div key={index} className="schedule-item">
                  <FontAwesomeIcon icon={faClock} />
                  <span>{horario}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="section-content">
            <h4>Horários</h4>
            <p>Horários flexíveis conforme disponibilidade. Entre em contato para agendar o melhor horário para você.</p>
          </div>
        );
      
      case 'saidas':
        return produto.saidas ? (
          <div className="section-content">
            <h4>Pontos de Saída:</h4>
            <div className="departure-list">
              {produto.saidas.map((saida, index) => (
                <div key={index} className="departure-item">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>{saida}</span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="section-content">
            <h4>Pontos de Saída</h4>
            <p>Ponto de saída será combinado conforme localização do cliente e tipo de serviço contratado.</p>
          </div>
        );
      
      case 'importante':
        return produto.informacoesImportantes ? (
          <div className="section-content">
            <h4>Informações Importantes:</h4>
            <ul className="important-list">
              {produto.informacoesImportantes.map((info, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  {info}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="section-content">
            <h4>Informações Importantes</h4>
            <p>Informações específicas serão fornecidas na confirmação da reserva.</p>
          </div>
        );
      
      case 'politicas':
        return produto.politicasCancelamento ? (
          <div className="section-content" dangerouslySetInnerHTML={{ __html: produto.politicasCancelamento }} />
        ) : (
          <div className="section-content">
            <h4>Políticas de Cancelamento</h4>
            <div className="cancellation-policy">
              <div className="policy-item">
                <strong>Cancelamento padrão:</strong>
                <span>Consulte as políticas específicas para este produto</span>
              </div>
              <div className="policy-item">
                <strong>Contato para cancelamentos:</strong>
                <span>WhatsApp: (53) 99122-4480</span>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        {/* SEÇÃO DE IMAGENS SIMPLES */}
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
          
          {/* MINIATURAS SIMPLES */}
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
                    alt={`${produto.nome} thumbnail ${index + 1}`}
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
          <div className="location-badge">
            <FontAwesomeIcon icon={getIconeCategoria()} />
            <span>
              {produto.categoria === 'passeios' ? 'Passeio Turístico' :
               produto.categoria === 'vinicolas' ? 'Rota das Vinícolas' :
               produto.categoria === 'jantares' ? 'Jantar Temático' :
               produto.categoria === 'ingressos' ? 'Ingresso para Atração' :
               produto.categoria === 'natal-luz' ? 'Natal Luz' :
               produto.categoria === 'transfers' ? 'Transfer' :
               produto.categoria === 'transporte-passeios' ? 'Transporte Personalizado' : produto.categoria}
            </span>
          </div>
          
          <h1>{produto.nome}</h1>
          {produto.descricao && (
            <div className="product-description-section">
              <p className="product-description-text">{produto.descricao}</p>
            </div>
          )}
          
          {/* Informações específicas se existirem */}
          {produto.faixaEtaria && (
            <div className="age-info">
              <FontAwesomeIcon icon={faChild} />
              <span>{produto.faixaEtaria}</span>
            </div>
          )}
          
          {produto.notas && (
            <div className="notes-info">
              <span className="note-text">📝 {produto.notas}</span>
            </div>
          )}
          
          <div className="price-container">
            {typeof produto.preco === 'object' ? (
              <div className="multi-price-container">
                <div className="price-selector">
                  {Object.keys(produto.preco).map((tipo) => (
                    <button
                      key={tipo}
                      className={`price-option ${(tipoPrecoSelecionado === tipo || duracaoSelecionada === tipo) ? 'selected' : ''}`}
                      onClick={() => {
                        if (produto.categoria === 'transporte-passeios') {
                          setDuracaoSelecionada(tipo);
                        } else {
                          setTipoPrecoSelecionado(tipo);
                        }
                      }}
                    >
                      <FontAwesomeIcon icon={getIconeTipoPreco(tipo)} />
                      <span>{getNomeTipoPreco(tipo)}</span>
                      <span className="price-option-value">R$ {produto.preco[tipo].toFixed(2)}</span>
                    </button>
                  ))}
                </div>
                <div className="selected-price">
                  <span className="current-price">R$ {getPrecoAtual().toFixed(2)}</span>
                  <span className="price-type">
                    {produto.categoria === 'transporte-passeios' ? 'por período' : 'por pessoa'}
                  </span>
                </div>
              </div>
            ) : (
              <>
                <span className="current-price">R$ {produto.preco.toFixed(2)}</span>
                <span className="price-type">por pessoa</span>
                {produto.precoAntigo && (
                  <>
                    <span className="old-price">R$ {produto.precoAntigo.toFixed(2)}</span>
                    <span className="discount-badge">
                      {Math.round((1 - produto.preco / produto.precoAntigo) * 100)}% OFF
                    </span>
                  </>
                )}
              </>
            )}
          </div>
          
          <div className="rating-container">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon key={i} icon={faStar} />
              ))}
            </div>
            <span className="review-count">({produto.reviews || 45} avaliações)</span>
            <span className="rating-value">⭐ {produto.avaliacao || 4.8}/5</span>
          </div>

          <div className="details-grid">
            <div className="detail-item">
              <FontAwesomeIcon icon={faClock} />
              <div>
                <span className="detail-label">Duração</span>
                <span className="detail-value">{produto.duracao}</span>
              </div>
            </div>
            
            <div className="detail-item">
              <FontAwesomeIcon icon={getIconeCategoria()} />
              <div>
                <span className="detail-label">Categoria</span>
                <span className="detail-value">
                  {produto.categoria === 'passeios' ? 'Passeio Turístico' :
                   produto.categoria === 'vinicolas' ? 'Rota das Vinícolas' :
                   produto.categoria === 'jantares' ? 'Jantar Temático' :
                   produto.categoria === 'ingressos' ? 'Ingresso' :
                   produto.categoria === 'natal-luz' ? 'Natal Luz' :
                   produto.categoria === 'transfers' ? 'Transfer' :
                   produto.categoria === 'transporte-passeios' ? 'Transporte' : produto.categoria}
                </span>
              </div>
            </div>
          </div>

          {produto.categoria === 'transporte-passeios' ? (
            <div className="transport-duration">
              <label>
                <FontAwesomeIcon icon={faCar} style={{marginRight: '8px'}} />
                Selecione a duração do transporte:
              </label>
              <div className="duration-options">
                {Object.keys(produto.preco).map((duracao) => (
                  <button
                    key={duracao}
                    className={`duration-option ${duracaoSelecionada === duracao ? 'selected' : ''}`}
                    onClick={() => setDuracaoSelecionada(duracao)}
                  >
                    {duracao}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              <div className="quantity-selector">
                <label>
                  <FontAwesomeIcon icon={faTicketAlt} style={{marginRight: '8px'}} />
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
              
              <div className="date-selector">
                <label>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: '8px'}} />
                  Selecione a data:
                </label>
                <input 
                  type="date"
                  value={dataSelecionada}
                  onChange={(e) => setDataSelecionada(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
            </>
          )}
          
          {/* BOTÕES EXPANSÍVEIS */}
          <div className="expandable-sections">
            <div className="section-buttons-grid">
              <button 
                className={`section-btn ${activeSection === 'roteiro' ? 'active' : ''}`}
                onClick={() => toggleSection('roteiro')}
              >
                <FontAwesomeIcon icon={faTheaterMasks} />
                <span>Roteiro</span>
                <FontAwesomeIcon icon={activeSection === 'roteiro' ? faChevronUp : faChevronDown} />
              </button>
              
              <button 
                className={`section-btn ${activeSection === 'pontos' ? 'active' : ''}`}
                onClick={() => toggleSection('pontos')}
              >
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Pontos de Visitação</span>
                <FontAwesomeIcon icon={activeSection === 'pontos' ? faChevronUp : faChevronDown} />
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
                className={`section-btn ${activeSection === 'saidas' ? 'active' : ''}`}
                onClick={() => toggleSection('saidas')}
              >
                <FontAwesomeIcon icon={faBus} />
                <span>Saídas</span>
                <FontAwesomeIcon icon={activeSection === 'saidas' ? faChevronUp : faChevronDown} />
              </button>
              
              <button 
                className={`section-btn ${activeSection === 'importante' ? 'active' : ''}`}
                onClick={() => toggleSection('importante')}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                <span>Importante Saber</span>
                <FontAwesomeIcon icon={activeSection === 'importante' ? faChevronUp : faChevronDown} />
              </button>
              
              <button 
                className={`section-btn ${activeSection === 'politicas' ? 'active' : ''}`}
                onClick={() => toggleSection('politicas')}
              >
                <FontAwesomeIcon icon={faFileContract} />
                <span>Políticas de Cancelamento</span>
                <FontAwesomeIcon icon={activeSection === 'politicas' ? faChevronUp : faChevronDown} />
              </button>
            </div>
            
            {/* CONTEÚDO DAS SEÇÕES EXPANSÍVEIS */}
            {activeSection && (
              <div className="section-content-container">
                {renderSectionContent(activeSection)}
              </div>
            )}
          </div>
          
          <div className="product-features">
            <div className="feature">
              <FontAwesomeIcon icon={faCheck} className="feature-icon" />
              <span className="feature-text">Confirmação imediata</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faClock} className="feature-icon" />
              <span className="feature-text">
                {produto.categoria === 'transporte-passeios' ? 'Horário flexível' : 'Cancelamento grátis*'}
              </span>
            </div>
            {produto.inclui && (
              <div className="feature">
                <FontAwesomeIcon icon={faUsers} className="feature-icon" />
                <span className="feature-text">{produto.inclui.length} itens inclusos</span>
              </div>
            )}
          </div>
          
          {/* Lista do que está incluído */}
          {produto.inclui && produto.inclui.length > 0 && (
            <div className="included-items">
              <h4>🎁 O que está incluído:</h4>
              <ul>
                {produto.inclui.map((item, index) => (
                  <li key={index}>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="total-container">
            <div className="total-item">
              <span>Valor {produto.categoria === 'transporte-passeios' ? 'do período:' : 'unitário:'}</span>
              <span>R$ {getPrecoAtual().toFixed(2)}</span>
            </div>
            {produto.categoria !== 'transporte-passeios' && (
              <div className="total-item">
                <span>Quantidade:</span>
                <span>{quantidade}</span>
              </div>
            )}
            <div className="total-item total">
              <span>Total:</span>
              <span className="total-price">
                R$ {(
                  getPrecoAtual() * 
                  (produto.categoria === 'transporte-passeios' ? 1 : quantidade)
                ).toFixed(2)}
              </span>
            </div>
          </div>
          
          <div className="action-buttons">
            <button onClick={handleAddToCart} className="btn-add-cart">
              <FontAwesomeIcon icon={faShoppingCart} /> 
              {produto.categoria === 'transporte-passeios' ? 'Contratar Transporte' : 'Comprar Agora'}
            </button>
            <button onClick={handleWhatsApp} className="btn-whatsapp">
              Tirar Dúvidas no WhatsApp
            </button>
          </div>
          
          <div className="product-note">
            <p>
              <strong>Importante:</strong> {produto.categoria === 'transporte-passeios' 
                ? 'O transporte deve ser agendado com antecedência. Em caso de alterações, entre em contato com 24h de antecedência.' 
                : 'Reservas são válidas apenas para a data selecionada. Em caso de dúvidas sobre disponibilidade ou horários, entre em contato conosco.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhePage;