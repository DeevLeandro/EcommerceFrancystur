import React, { useState, useEffect } from 'react';
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
  faCar
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
  
  const produto = todosProdutos.find(p => p.id === parseInt(id));
  
  // Definir data atual como padrão quando o componente carrega
  useEffect(() => {
    const hoje = new Date().toISOString().split('T')[0];
    setDataSelecionada(hoje);
    
    // Definir valores padrão baseados no tipo de produto
    if (produto) {
      if (typeof produto.preco === 'object') {
        // Se é um objeto com faixas etárias
        const primeiroTipo = Object.keys(produto.preco)[0];
        setTipoPrecoSelecionado(primeiroTipo);
      } else if (produto.categoria === 'transporte-passeios' && produto.preco && typeof produto.preco === 'object') {
        // Se é transporte por horas
        const primeiraDuracao = Object.keys(produto.preco)[0];
        setDuracaoSelecionada(primeiraDuracao);
      }
    }
  }, [produto]);
  
  if (!produto) {
    return (
      <div className="product-not-found">
        <h1>Produto não encontrado</h1>
        <button onClick={() => navigate('/')}>Voltar para a página inicial</button>
      </div>
    );
  }
  
  // Função para obter o preço atual baseado nas seleções
  const getPrecoAtual = () => {
    if (typeof produto.preco === 'object') {
      if (produto.categoria === 'transporte-passeios') {
        // Para transporte por horas
        return duracaoSelecionada ? produto.preco[duracaoSelecionada] : Object.values(produto.preco)[0];
      } else {
        // Para preços por faixa etária
        return tipoPrecoSelecionado ? produto.preco[tipoPrecoSelecionado] : Object.values(produto.preco)[0];
      }
    }
    return produto.preco;
  };
  
  // Função para obter o nome do tipo de preço
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
  
  // Função para obter o ícone do tipo de preço
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
    
    const numeroWhatsApp = "5551999999999";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };
  
  return (
    <div className="product-detail-page">
      <div className="product-detail-container">
        <div className="product-image-section">
          <img src={produto.imagem} alt={produto.nome} />
        </div>
        
        <div className="product-info-section">
          <div className="location-badge">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>{produto.categoria === 'transporte-passeios' ? 'Gramado & Região' : 'Gramado - RS'}</span>
          </div>
          
          <h1>{produto.nome}</h1>
          <p className="product-description">{produto.descricao}</p>
          
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
              <FontAwesomeIcon icon={faUsers} />
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
          
          <div className="product-features">
            <div className="feature">
              <FontAwesomeIcon icon={faCheck} className="feature-icon" />
              <span className="feature-text">Confirmação imediata</span>
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faClock} className="feature-icon" />
              <span className="feature-text">
                {produto.categoria === 'transporte-passeios' ? 'Horário flexível' : 'Cancelamento grátis'}
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