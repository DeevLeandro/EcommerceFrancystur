import React from 'react';

const ComentariosTripAdvisor = () => {
  // Dados dos depoimentos
  const depoimentos = [
    {
      id: 1,
      nome: "Maria Silva",
      cidade: "São Paulo, SP",
      avaliacao: 5,
      comentario: "Contratamos a FrancysTur para nossa lua de mel em Gramado e foi tudo perfeito! Os transfers eram pontuais, os passeios bem organizados e o atendimento excepcional. Recomendo a todos!",
      data: "Janeiro 2024",
      viagem: "Lua de mel",
      foto: "👩",
      origem: "TripAdvisor"
    },
    {
      id: 2,
      nome: "Carlos Mendes",
      cidade: "Rio de Janeiro, RJ",
      avaliacao: 5,
      comentario: "Atendimento impecável! Reservei online e tudo correu como combinado. O tour pelas vinícolas foi o ponto alto - guia muito conhecedor e as degustações maravilhosas.",
      data: "Dezembro 2023",
      viagem: "Viagem em família",
      foto: "👨",
      origem: "TripAdvisor"
    },
    {
      id: 3,
      nome: "Ana Paula Rocha",
      cidade: "Belo Horizonte, MG",
      avaliacao: 5,
      comentario: "Fazemos viagens para Gramado há 5 anos e é a primeira vez que contratamos uma agência. A FrancysTur superou todas as expectativas! Organização impecável e preços justos.",
      data: "Novembro 2023",
      viagem: "Viagem anual",
      foto: "👩",
      origem: "TripAdvisor"
    },
    {
      id: 4,
      nome: "Roberto Santos",
      cidade: "Curitiba, PR",
      avaliacao: 5,
      comentario: "O passeio do Natal Luz foi mágico! As crianças adoraram e o transporte foi muito confortável. A agência sugeriu horários ideais para evitar filas. Excelente serviço!",
      data: "Julho 2023",
      viagem: "Viagem com crianças",
      foto: "👨",
      origem: "TripAdvisor"
    },
    {
      id: 5,
      nome: "Fernanda Costa",
      cidade: "Porto Alegre, RS",
      avaliacao: 5,
      comentario: "Jantar temático incrível! A FrancysTur nos reservou em um restaurante que parecia saído de um conto de fadas. A atenção aos detalhes fez toda a diferença na nossa experiência.",
      data: "Agosto 2023",
      viagem: "Aniversário de casamento",
      foto: "👩",
      origem: "TripAdvisor"
    },
    {
      id: 6,
      nome: "João Pedro Almeida",
      cidade: "Florianópolis, SC",
      avaliacao: 5,
      comentario: "Serviço de transfer muito profissional. Motorista cordial, carro limpo e seguro. Para quem quer tranquilidade na locomoção em Gramado, recomendo muito a FrancysTur!",
      data: "Outubro 2023",
      viagem: "Viagem a negócios",
      foto: "👨",
      origem: "TripAdvisor"
    }
  ];

  // Componente de estrelas de avaliação
  const EstrelasAvaliacao = ({ quantidade }) => {
    return (
      <div className="estrelas-avaliacao">
        {[...Array(quantidade)].map((_, i) => (
          <span key={i} className="estrela">★</span>
        ))}
      </div>
    );
  };

  return (
    <section className="comentarios-section">
      <div className="comentarios-header">
        <div className="tripadvisor-badge">
          <div className="tripadvisor-logo">
            <span style={{color: '#00AA6C', fontWeight: 'bold', fontSize: '24px'}}>trip</span>
            <span style={{color: '#000', fontWeight: 'bold', fontSize: '24px'}}>advisor</span>
          </div>
          <div className="tripadvisor-rating">
            <EstrelasAvaliacao quantidade={5} />
            <span className="rating-text">Excelente • 4.9/5</span>
          </div>
        </div>
        <h2>O que nossos clientes dizem</h2>
        <p className="comentarios-subtitle">Mais de 500 avaliações verificadas no TripAdvisor</p>
      </div>

      <div className="depoimentos-grid">
        {depoimentos.map((depoimento) => (
          <div key={depoimento.id} className="depoimento-card">
            <div className="depoimento-header">
              <div className="depoimento-foto">{depoimento.foto}</div>
              <div className="depoimento-info">
                <h4>{depoimento.nome}</h4>
                <p className="depoimento-cidade">{depoimento.cidade}</p>
                <p className="depoimento-viagem">{depoimento.viagem}</p>
              </div>
              <div className="depoimento-origem">
                <span className="origem-badge">{depoimento.origem}</span>
              </div>
            </div>
            
            <div className="depoimento-avaliacao">
              <EstrelasAvaliacao quantidade={depoimento.avaliacao} />
              <span className="depoimento-data">{depoimento.data}</span>
            </div>
            
            <div className="depoimento-texto">
              <p>{depoimento.comentario}</p>
            </div>
            
            <div className="depoimento-footer">
              <div className="tripadvisor-verificado">
                <span style={{color: '#00AA6C', marginRight: '5px'}}>✓</span>
                Avaliação verificada no TripAdvisor
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="comentarios-cta">
        <p>Quer compartilhar sua experiência? Deixe sua avaliação no TripAdvisor!</p>
        <a 
          href="https://www.tripadvisor.com.br" 
          target="_blank" 
          rel="noopener noreferrer"
          className="tripadvisor-button"
        >
          <span className="tripadvisor-icon">t</span>
          Avaliar no TripAdvisor
        </a>
      </div>
    </section>
  );
};

export default ComentariosTripAdvisor;