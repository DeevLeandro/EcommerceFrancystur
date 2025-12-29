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
  faRoute,
  faExclamationTriangle,
  faTrain,
  faUsers,
  faCalendarDay,
  faMoneyBillWave,
  faCommentDots
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
  
  const produtoImages = produto?.imagens || [
    produto?.imagem,
    "/images/logo.jpg",
    "/images/logo.jpg",
    "/images/logo.jpg"
  ].filter(Boolean);

  const incluiMariaFumaca = () => {
    const produtosComMariaFumaca = [4, 6, 7, 8];
    return produtosComMariaFumaca.includes(produto?.id);
  };

  const isDataValidaParaMariaFumaca = (dataString) => {
    if (!incluiMariaFumaca()) return true;
    
    if (!dataString) return false;
    
    const data = new Date(dataString + 'T00:00:00');
    const diaDaSemana = data.getDay();
    
    return diaDaSemana === 0 || diaDaSemana === 3 || diaDaSemana === 5 || diaDaSemana === 6;
  };

  const getProximaDataValida = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    if (!incluiMariaFumaca()) {
      const amanha = new Date(hoje);
      amanha.setDate(amanha.getDate() + 1);
      return amanha.toISOString().split('T')[0];
    }
    
    for (let i = 1; i <= 14; i++) {
      const dataBusca = new Date(hoje);
      dataBusca.setDate(dataBusca.getDate() + i);
      const diaDaSemana = dataBusca.getDay();
      
      if (diaDaSemana === 0 || diaDaSemana === 3 || diaDaSemana === 5 || diaDaSemana === 6) {
        return dataBusca.toISOString().split('T')[0];
      }
    }
    
    const amanha = new Date(hoje);
    amanha.setDate(amanha.getDate() + 1);
    return amanha.toISOString().split('T')[0];
  };

  const getDataAmanha = () => {
    const amanha = new Date();
    amanha.setDate(amanha.getDate() + 1);
    return amanha.toISOString().split('T')[0];
  };

  useEffect(() => {
    let dataInicial;
    
    if (incluiMariaFumaca()) {
      dataInicial = getProximaDataValida();
    } else {
      dataInicial = getDataAmanha();
    }
    
    setDataSelecionada(dataInicial);
    
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
  
  const validarData = (dataString) => {
    if (!dataString) return { valida: false, mensagem: 'Selecione uma data' };
    
    const data = new Date(dataString + 'T00:00:00');
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    
    if (data < hoje) {
      return { valida: false, mensagem: 'Não é possível selecionar datas passadas' };
    }
    
    if (data.getTime() === hoje.getTime()) {
      return { 
        valida: false, 
        mensagem: 'A reserva deve ser feita com pelo menos 1 dia de antecedência' 
      };
    }
    
    if (incluiMariaFumaca()) {
      const diaDaSemana = data.getDay();
      const nomeDia = getNomeDiaSemana(dataString);
      
      if (!isDataValidaParaMariaFumaca(dataString)) {
        const diasPermitidos = ['Domingo', 'Quarta-feira', 'Sexta-feira', 'Sábado'];
        return { 
          valida: false, 
          mensagem: `O Trem Maria Fumaça opera apenas aos seguintes dias: ${diasPermitidos.join(', ')}. 
          Você selecionou ${nomeDia}.` 
        };
      }
    }
    
    return { 
      valida: true, 
      mensagem: `${getNomeDiaSemana(dataString)} - Data válida ✓` 
    };
  };

  const getNomeDiaSemana = (dataString) => {
    if (!dataString) return '';
    
    const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date(dataString + 'T00:00:00');
    return dias[data.getDay()];
  };

  const getProximasDatasValidas = () => {
    if (!incluiMariaFumaca()) return [];
    
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const datasValidas = [];
    
    for (let i = 1; i <= 30; i++) {
      const data = new Date(hoje);
      data.setDate(data.getDate() + i);
      const diaDaSemana = data.getDay();
      
      if (diaDaSemana === 0 || diaDaSemana === 3 || diaDaSemana === 5 || diaDaSemana === 6) {
        datasValidas.push({
          data: data.toISOString().split('T')[0],
          nomeDia: getNomeDiaSemana(data.toISOString().split('T')[0]),
          diaNumero: data.getDate().toString().padStart(2, '0')
        });
      }
    }
    
    return datasValidas;
  };

  if (!produto) {
    return (
      <div className="product-not-found">
        <h1>Produto não encontrado</h1>
        <button 
          onClick={() => navigate('/')}
          className="btn-back-home"
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
    const validacao = validarData(dataSelecionada);
    if (!validacao.valida) {
      alert(validacao.mensagem);
      return;
    }
    
    const preco = getPrecoAtual();
    const itemCarrinho = {
      ...produto,
      preco: preco,
      quantidade,
      dataSelecionada: dataSelecionada || 'A combinar',
      tipoPreco: tipoPrecoSelecionado || duracaoSelecionada || 'padrão',
      diaDaSemana: getNomeDiaSemana(dataSelecionada)
    };
    
    adicionarAoCarrinho(itemCarrinho);
    navigate('/checkout');
  };
  
  const handleWhatsApp = () => {
    const validacao = validarData(dataSelecionada);
    if (!validacao.valida) {
      alert(validacao.mensagem);
      return;
    }
    
    const tipo = tipoPrecoSelecionado || duracaoSelecionada || 'adulto';
    const nomeTipo = getNomeTipoPreco(tipo);
    const diaDaSemana = getNomeDiaSemana(dataSelecionada);
    
    let mensagem = `Olá! Tenho interesse no produto:\n*${produto.nome}*\n\n`;
    
    if (tipoPrecoSelecionado || duracaoSelecionada) {
      mensagem += `• Tipo/Tarifa: ${nomeTipo}\n`;
    }
    
    if (produto.categoria !== 'transporte-passeios') {
      mensagem += `• Quantidade: ${quantidade} pessoa(s)\n`;
    }
    
    mensagem += `• Data: ${dataSelecionada} (${diaDaSemana})\n\n`;
    
    if (produto.notas) {
      mensagem += `*Observações:* ${produto.notas}\n\n`;
    }
    
    if (incluiMariaFumaca()) {
      mensagem += `*Inclui Trem Maria Fumaça* (opera às Quartas, Sextas, Sábados e Domingos)\n\n`;
    }
    
    mensagem += `Poderia me fornecer mais informações sobre preços e disponibilidade?`;
    
    const numeroWhatsApp = "5554996623736";
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
  };
  
  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const proximasDatasValidas = getProximasDatasValidas();
  const validacaoData = validarData(dataSelecionada);

  return (
    <div className="product-detail-page">
      {/* LAYOUT DA GALERIA NO FORMATO DA IMAGEM */}
      <div className="product-gallery-container">
        {/* TÍTULO ACIMA DAS IMAGENS */}
        <h1 className="product-title">{produto.nome}</h1>
        
        {/* LINHA 1: IMAGENS */}
        <div className="product-images-row">
          {/* IMAGEM GRANDE PRINCIPAL */}
          <div className="gallery-large gallery-main">
            <img 
              src={produtoImages[0] || "/images/default-product.jpg"} 
              alt={`${produto.nome}`}
              className="main-gallery-image"
              loading="lazy"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/default-product.jpg";
              }}
            />
          </div>
          
          {/* COLUNA DIREITA COM 2 IMAGENS PEQUENAS */}
          <div className="gallery-secondary-column">
            <div className="gallery-large gallery-secondary">
              {produtoImages[1] && (
                <img 
                  src={produtoImages[1]} 
                  alt={`${produto.nome} - Foto 2`}
                  className="secondary-gallery-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default-product.jpg";
                  }}
                />
              )}
            </div>
            
            <div className="gallery-small gallery-small-1">
              {produtoImages[2] && (
                <img 
                  src={produtoImages[2]} 
                  alt={`${produto.nome} - Foto 3`}
                  className="small-gallery-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/default-product.jpg";
                  }}
                />
              )}
            </div>
          </div>
        </div>
        
        {/* LINHA 2: CARD DE INFORMAÇÕES (ESTILO DA IMAGEM) */}
        <div className="image-info-card">
          <div className="info-card-row">
            <div className="activity-badge">
              {incluiMariaFumaca() ? 'Inclui Trem Maria Fumaça' : 'Passeio Turístico'}
            </div>
            
            <div className="days-highlight">
              <FontAwesomeIcon icon={faCalendarAlt} />
              Dias: 
              {incluiMariaFumaca() 
                ? ' Dom Qua Sex Sáb' 
                : ' Dom Seg Ter Qua Qui Sex Sáb'
              }
            </div>
          </div>
        </div>
        
        {/* REMOVIDO: Seção de descrição */}
      </div>
      
      {/* LAYOUT EM DUAS COLUNAS */}
      <div className="product-layout-container">
        {/* COLUNA ESQUERDA - CONTEÚDO */}
        <div className="product-content-column">
          {/* SEÇÕES EXPANSÍVEIS EM LISTA VERTICAL */}
          <div className="expandable-sections-vertical">
            <div className="section-list">
              <button 
                className={`section-list-item ${activeSection === 'roteiro' ? 'active' : ''}`}
                onClick={() => toggleSection('roteiro')}
              >
                <div className="section-list-icon">
                  <FontAwesomeIcon icon={faRoute} />
                </div>
                <div className="section-list-content">
                  <h3>Roteiro Completo</h3>
                  <p>Veja todos os detalhes do passeio</p>
                </div>
                <div className="section-list-arrow">
                  <FontAwesomeIcon icon={activeSection === 'roteiro' ? faChevronUp : faChevronDown} />
                </div>
              </button>
              
              {activeSection === 'roteiro' && (
                <div className="section-list-content-panel">
                  {produto.roteiro ? (
                    <div className="section-content" 
                      dangerouslySetInnerHTML={{ __html: produto.roteiro }} 
                    />
                  ) : (
                    <div className="section-content">
                      <h4>Roteiro Detalhado</h4>
                      <p>Informações de roteiro específicas para este produto serão fornecidas na confirmação da reserva.</p>
                      <p>Para mais detalhes sobre o roteiro, entre em contato conosco.</p>
                    </div>
                  )}
                </div>
              )}
              
              <button 
                className={`section-list-item ${activeSection === 'horarios' ? 'active' : ''}`}
                onClick={() => toggleSection('horarios')}
              >
                <div className="section-list-icon">
                  <FontAwesomeIcon icon={faClock} />
                </div>
                <div className="section-list-content">
                  <h3>Horários</h3>
                  <p>Disponibilidade e horários de partida</p>
                </div>
                <div className="section-list-arrow">
                  <FontAwesomeIcon icon={activeSection === 'horarios' ? faChevronUp : faChevronDown} />
                </div>
              </button>
              
              {activeSection === 'horarios' && (
                <div className="section-list-content-panel">
                  {produto.horarios ? (
                    <div className="section-content">
                      <h4>Horários Disponíveis:</h4>
                      <div className="horarios-grid">
                        {produto.horarios.map((horario, index) => (
                          <div key={index} className="horario-item">
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
                  )}
                </div>
              )}
              
              <button 
                className={`section-list-item ${activeSection === 'cancelamento' ? 'active' : ''}`}
                onClick={() => toggleSection('cancelamento')}
              >
                <div className="section-list-icon">
                  <FontAwesomeIcon icon={faFileContract} />
                </div>
                <div className="section-list-content">
                  <h3>Políticas de Cancelamento</h3>
                  <p>Condições para cancelamento e reembolso</p>
                </div>
                <div className="section-list-arrow">
                  <FontAwesomeIcon icon={activeSection === 'cancelamento' ? faChevronUp : faChevronDown} />
                </div>
              </button>
              
              {activeSection === 'cancelamento' && (
                <div className="section-list-content-panel">
                  {produto.politicasCancelamento ? (
                    <div className="section-content" 
                      dangerouslySetInnerHTML={{ __html: produto.politicasCancelamento }} 
                    />
                  ) : (
                    <div className="section-content">
                      <h4>Políticas de Cancelamento</h4>
                      <div className="cancelamento-info">
                        <div className="cancelamento-line">
                          <strong>Cancelamento padrão:</strong>
                          <span>Consulte as políticas específicas para este produto</span>
                        </div>
                        <div className="cancelamento-line">
                          <strong>Contato para cancelamentos:</strong>
                          <span>WhatsApp: (54) 99662-3736</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* DETALHES ADICIONAIS */}
          <section className="content-section">
            <h2 className="section-title">Informações Importantes</h2>
            <div className="details-grid">
              <div className="detail-item">
                <FontAwesomeIcon icon={faClock} />
                <div>
                  <span className="detail-label">Duração</span>
                  <span className="detail-value">{produto.duracao}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <FontAwesomeIcon icon={faCalendarDay} />
                <div>
                  <span className="detail-label">Disponibilidade</span>
                  <span className="detail-value">
                    {incluiMariaFumaca() ? 'Quarta, Sexta, Sábado e Domingo' : 'Todos os dias'}
                  </span>
                </div>
              </div>
              
              <div className="detail-item">
                <FontAwesomeIcon icon={faUsers} />
                <div>
                  <span className="detail-label">Tipo</span>
                  <span className="detail-value">{getNomeCategoria(produto.categoria)}</span>
                </div>
              </div>
              
              <div className="detail-item">
                <FontAwesomeIcon icon={faMoneyBillWave} />
                <div>
                  <span className="detail-label">Pagamento</span>
                  <span className="detail-value">Cartão, PIX, Dinheiro</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* NOTA FINAL */}
          <div className="product-note">
            <p>
              <strong>Importante:</strong> {produto.categoria === 'transporte-passeios' 
                ? 'O transporte deve ser agendado com antecedência. Alterações com 24h de antecedência.' 
                : 'Reservas válidas para a data selecionada. Em caso de dúvidas, entre em contato.'}
            </p>
          </div>
        </div>
        
        {/* COLUNA DIREITA - CARD DE RESERVA STICKY */}
        <div className="booking-column">
          <div className="booking-card">
            <div className="booking-card-header">
              <h3 className="booking-card-title">Solicitar Reserva</h3>
              <div className="price-info">
                <span className="price-info-text">Preços negociáveis via WhatsApp</span>
              </div>
            </div>
            
            <div className="booking-card-body">
              {/* QUANTIDADE */}
              {produto.categoria !== 'transporte-passeios' && (
                <div className="booking-field">
                  <label className="booking-label">
                    <FontAwesomeIcon icon={faUsers} />
                    Quantidade de pessoas:
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
                      className="quantity-input"
                    />
                    <button 
                      className="qty-btn"
                      onClick={() => setQuantidade(prev => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
              
              {/* DATAS EM QUADRADINHOS */}
              <div className="booking-field">
                <label className="booking-label">
                  <FontAwesomeIcon icon={faCalendarAlt} />
                  Selecione a data:
                </label>
                
                {/* CALENDÁRIO DE QUADRADINHOS */}
                <div className="date-squares-container">
                  <div className="current-month">Próximos dias disponíveis</div>
                  <div className="date-squares">
                    {proximasDatasValidas.length > 0 ? (
                      proximasDatasValidas.slice(0, 15).map((data, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setDataSelecionada(data.data)}
                          className={`date-square ${data.data === dataSelecionada ? 'selected' : ''}`}
                          title={`${data.data} - ${data.nomeDia}`}
                        >
                          <span className="date-number">{data.diaNumero}</span>
                          <span className="date-weekday">{data.nomeDia.substring(0, 3)}</span>
                        </button>
                      ))
                    ) : (
                      // Fallback para produtos sem Maria Fumaça
                      Array.from({ length: 15 }, (_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i + 1);
                        const dayNumber = date.getDate().toString().padStart(2, '0');
                        const dateStr = date.toISOString().split('T')[0];
                        const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
                        const weekday = weekdays[date.getDay()];
                        
                        return (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setDataSelecionada(dateStr)}
                            className={`date-square ${dateStr === dataSelecionada ? 'selected' : ''}`}
                            title={`${dateStr} - ${weekday}`}
                          >
                            <span className="date-number">{dayNumber}</span>
                            <span className="date-weekday">{weekday}</span>
                          </button>
                        );
                      })
                    )}
                  </div>
                  
                  {dataSelecionada && (
                    <div className="selected-date-info">
                      <div className={`date-validation ${validacaoData.valida ? 'valid' : 'invalid'}`}>
                        {validacaoData.valida ? 
                          `✅ ${getNomeDiaSemana(dataSelecionada)}, ${dataSelecionada}` : 
                          `❌ ${validacaoData.mensagem}`
                        }
                      </div>
                    </div>
                  )}
                </div>
                
                {/* AVISO MARIA FUMAÇA */}
                {incluiMariaFumaca() && (
                  <div className="maria-fumaca-notice">
                    <FontAwesomeIcon icon={faTrain} />
                    <span>Inclui Trem Maria Fumaça (opera às Quartas, Sextas, Sábados e Domingos)</span>
                  </div>
                )}
              </div>
              
              {/* RESUMO DA SOLICITAÇÃO */}
              <div className="booking-summary">
                <div className="summary-line">
                  <span>Passeio:</span>
                  <span className="summary-value">{produto.nome}</span>
                </div>
                
                {produto.categoria !== 'transporte-passeios' && (
                  <div className="summary-line">
                    <span>Quantidade:</span>
                    <span className="summary-value">{quantidade} pessoa(s)</span>
                  </div>
                )}
                
                <div className="summary-line">
                  <span>Data selecionada:</span>
                  <span className="summary-value">
                    {dataSelecionada} ({getNomeDiaSemana(dataSelecionada)})
                  </span>
                </div>
              </div>
              
              {/* BOTÕES DE AÇÃO */}
              <div className="booking-actions">
                <button 
                  onClick={handleWhatsApp} 
                  className="btn-whatsapp-primary"
                  disabled={!validacaoData.valida}
                >
                  <FontAwesomeIcon icon={faCommentDots} />
                  Consultar Preços no WhatsApp
                </button>
                
                <div className="action-note">
                  <FontAwesomeIcon icon={faInfoCircle} />
                  <span>Entre em contato para consultar preços e disponibilidade</span>
                </div>
              </div>
              
              {/* GARANTIA DE SEGURANÇA */}
              <div className="security-guarantee">
                <div className="guarantee-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Reserva segura</span>
                </div>
                <div className="guarantee-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Cancelamento facilitado*</span>
                </div>
                <div className="guarantee-item">
                  <FontAwesomeIcon icon={faCheck} />
                  <span>Suporte personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdutoDetalhePage;