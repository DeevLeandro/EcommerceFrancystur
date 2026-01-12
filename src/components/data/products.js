export const produtos = {
passeios: [
  {
    id: 1,
    nome: "Tour pela Cidade de Gramado c/ Transporte",
    preco: 120.00,
    imagem: "/images/gramado-tour.jpg",
    imagens: [
      "/images/gramado-tour.jpg",
      "/images/gramado-tour-2.jpg",
      "/images/gramado-tour-3.jpg",
      "/images/gramado-tour-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 9hs",
    inclui: ["Guia turístico", "Transporte", "Ingressos para atrações"],
    avaliacao: 4.8,
    reviews: 156,
    descricao: "Descubra os encantos da Suíça brasileira em um tour completo pela charmosa Gramado! Visite as principais atrações, ruas pitorescas e pontos turísticos mais fotografados. Uma experiência perfeita para quem deseja conhecer a essência desta cidade mágica.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Detalhado do Tour pela Cidade</h4>
        <ul>
          <li>08:30 - Saída do ponto de encontro no centro de Gramado (Rua Madre Verônica, 50)</li>
          <li>09:00 - Visita ao Lago Negro e Rua Coberta (fotos e história do local)</li>
          <li>10:00 - Palácio dos Festivais (explicação sobre o Natal Luz) e Igreja Matriz São Pedro</li>
          <li>11:00 - Rua Torta (famoso ponto fotográfico) e mirantes da cidade</li>
          <li>12:00 - Almoço em restaurante típico (opcional, não incluso - sugestões do guia)</li>
          <li>13:30 - Mini Mundo e Mundo a Vapor (visita às áreas externas, fotos)</li>
          <li>15:00 - Museu do Perfume e visita a fábrica de chocolates com degustação</li>
          <li>16:00 - Tempo livre para compras no centro (lojas de couro, chocolate, artesanato)</li>
          <li>17:00 - Retorno aos hotéis ou ponto inicial</li>
        </ul>
        <p class="note">*Tempo aproximado em cada atração pode variar conforme trânsito e interesse do grupo.</p>
      </div>
    `,
    pontosVisita: [
      "Lago Negro",
      "Rua Coberta",
      "Palácio dos Festivais", 
      "Igreja Matriz São Pedro",
      "Rua Torta e mirantes",
      "Mini Mundo (exterior)",
      "Mundo a Vapor (exterior)",
      "Museu do Perfume",
      "Fábricas de chocolate",
      "Centro de artesanato"
    ],
    horarios: [
      "Manhã: 08:30h (saída)",
      "Tarde: 17:00h (saída)",
      "Duração: 9 horas aproximadamente"
    ],
    saidas: [
      "Ponto principal: Rua Madre Verônica, 50 - Centro, Gramado",
      "Hotéis centrais mediante agendamento prévio (24h antes)",
      "Terminal Rodoviário de Gramado (mediante acordo)",
      "Não inclui busca em hotéis fora do centro"
    ],
    informacoesImportantes: [
      "Levar documento de identificação original ou cópia",
      "Calçados confortáveis são essenciais (muito caminhar)",
      "Protetor solar e agasalho recomendados (clima variável)",
      "Ponto de encontro: Rua Madre Verônica, 50 - Centro",
      "Chegar com 15 minutos de antecedência",
      "Tour disponível em português e espanhol",
      "Crianças até 5 anos não pagam (no colo)",
      "Fotos permitidas em todos os locais"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 72h antes:</strong>
          <span>Reembolso de 100% do valor pago</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24h e 72h antes:</strong>
          <span>Reembolso de 50% do valor pago</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem direito a reembolso</span>
        </div>
        <div class="policy-item">
          <strong>No-show (não comparecimento):</strong>
          <span>Sem direito a reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Condições climáticas:</strong>
          <span>Em caso de chuva intensa, passeio será remarcado sem custos</span>
        </div>
        <div class="policy-item">
          <strong>Remarcações:</strong>
          <span>Permitidas até 24h antes, sujeitas à disponibilidade</span>
        </div>
      </div>
    `
  },
  {
    id: 2,
    nome: "Parque Snowland c/ Transporte",
    preco: 180.00,
    imagem: "/images/snowland.jpg",
    imagens: [
      "/images/snowland.jpg",
      "/images/snowland-2.jpg",
      "/images/snowland-3.jpg",
      "/images/snowland-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 6hs",
    inclui: ["Ingresso", "Equipamentos (casaco, botas, luvas)", "Acompanhante", "Aula básica de esqui"],
    avaliacao: 4.9,
    reviews: 230,
    descricao: "Viva a magia da neve no maior parque indoor da América Latina! Esquie, ande de trenó e divirta-se em atrações geladas durante o ano todo. Uma experiência invernal autêntica no coração do Brasil - perfeita para famílias e aventureiros!",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Completo Snowland</h4>
        <ul>
          <li>08:00 - Saída de Gramado (ponto central) / 08:30 de Canela</li>
          <li>09:30 - Chegada ao Snowland (Cambará do Sul)</li>
          <li>10:00 - Recepção e distribuição de equipamentos (casaco, botas, luvas)</li>
          <li>10:30 - Aula de esqui básica para iniciantes (30 minutos com instrutor)</li>
          <li>11:30 - Pista de esqui livre (prática individual)</li>
          <li>12:30 - Almoço no restaurante do parque (opcional, não incluso)</li>
          <li>13:30 - Toboágua de gelo e trenó infantil</li>
          <li>14:30 - Vila Alpina (fotos com cenários europeus)</li>
          <li>15:30 - Atrações de inverno (esqui cross, snowboard básico)</li>
          <li>16:30 - Tempo livre para fotos e compras na loja de souvenirs</li>
          <li>17:30 - Devolução dos equipamentos e retorno para Gramado</li>
          <li>19:00 - Chegada prevista em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Pista de esqui principal (temperatura: -5°C)",
      "Trenó infantil (para crianças 3-10 anos)",
      "Toboágua de gelo (altura: 8 metros)",
      "Vila Alpina (cenários fotográficos)",
      "Praça de alimentação (várias opções)",
      "Loja de souvenirs e artigos de inverno",
      "Espaço para fotos profissionais",
      "Pista de snowboard para iniciantes"
    ],
    horarios: [
      "Saída Gramado: 08:00h",
      "Saída Canela: 08:30h",
      "Turno da manhã: 10:00h - 13:00h",
      "Turno da tarde: 14:00h - 17:00h",
      "Tempo no parque: 5-6 horas"
    ],
    saidas: [
      "Gramado Centro: 08:00h - Praça Major Nicoletti",
      "Canela Centro: 08:30h - Em frente à Catedral",
      "Hotelaria mediante agendamento (24h antes)",
      "Não inclui busca em hotéis afastados"
    ],
    informacoesImportantes: [
      "Levar roupa de baixo quente (meias grossas, calça térmica)",
      "Luvas próprias são permitidas (recomendado)",
      "Idade mínima: 3 anos completos",
      "Grávidas não é recomendado participar",
      "Pessoas com problemas cardíacos ou respiratórios consultar médico",
      "Trocar de roupa disponível no local (trazer roupa extra)",
      "Não é permitido entrar com alimentos",
      "Fotos profissionais disponíveis por taxa adicional",
      "Estacionamento gratuito para visitantes"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100% do valor</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70% do valor</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento até 48h antes:</strong>
          <span>Reembolso de 50% do valor</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Sem direito a reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Equipamentos:</strong>
          <span>Danos aos equipamentos serão cobrados separadamente</span>
        </div>
        <div class="policy-item">
          <strong>Snowland:</strong>
          <span>Ingresso não é reembolsável após entrada no parque</span>
        </div>
      </div>
    `
  },
  {
    id: 3,
    nome: "Terra Magica Florybal c/ Transporte",
    preco: 175.00,
    imagem: "/images/florybal-2.jpg",
    imagens: [
      "/images/florybal.jpeg",
      "/images/florybal-2.jpg",
      "/images/florybal-3.jpeg",
      "/images/florybal-4.jpeg"
    ],
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte ida e volta", "Ingresso ao parque", "Guia acompanhante", "Mapa do parque"],
    avaliacao: 4.7,
    reviews: 92,
    descricao: "Um mundo encantado de flores, magia e diversão! Conheça o Terra Magica Florybal, um parque temático único com esculturas florais gigantes, jardins secretos e atrações interativas. Uma experiência mágica para todas as idades.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Terra Magica Florybal</h4>
        <ul>
          <li>09:00 - Saída do ponto de encontro em Gramado</li>
          <li>09:30 - Chegada ao Terra Magica Florybal</li>
          <li>09:45 - Recepção e orientações sobre o parque</li>
          <li>10:00 - Visita ao Jardim das Esculturas Florais</li>
          <li>11:00 - Labirinto dos Segredos (atividade interativa)</li>
          <li>12:00 - Vila das Fadas e Duendes</li>
          <li>13:00 - Tempo livre para almoço (restaurante no local)</li>
          <li>14:00 - Estufa das Borboletas e Jardim Sensorial</li>
          <li>15:00 - Loja de souvenirs e produtos artesanais</li>
          <li>15:30 - Retorno para Gramado</li>
          <li>16:00 - Chegada no ponto inicial</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Jardim das Esculturas Florais",
      "Labirinto dos Segredos",
      "Vila das Fadas e Duendes",
      "Estufa das Borboletas",
      "Jardim Sensorial",
      "Mirante do Vale Encantado",
      "Loja de souvenirs temáticos"
    ],
    horarios: [
      "Manhã: 09:00h (saída)",
      "Duração: 4 horas no parque",
      "Total: 7 horas com transporte",
      "Diariamente"
    ],
    saidas: [
      "Gramado Centro: 09:00h",
      "Canela Centro: 09:15h",
      "Ponto único de encontro",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Parque totalmente acessível para cadeirantes",
      "Área de alimentação disponível no local",
      "Traje casual e calçados confortáveis",
      "Protetor solar recomendado",
      "Câmera fotográfica permitida",
      "Não é permitido colher flores",
      "Estacionamento gratuito para visitantes"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 5 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 2-5 dias antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 4,
    nome: "Passeio Maria Fumaça Gramado",
    preco: 425.00,
    imagem: "/images/trem-vale-vinhedos.jpg",
    imagens: [
      "/images/trem-vale-vinhedos.jpg",
      "/images/trem-vale-vinhedos-2.jpg",
      "/images/trem-vale-vinhedos-3.jpg",
      "/images/trem-vale-vinhedos-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 12hs",
    inclui: ["Transporte coletivo", "Ingresso Trem Maria Fumaça", "Visita a vinícolas", "Degustações padrão", "Almoço"],
    notas: "Menores de 6 anos não pagam (sem direito a degustação)",
    avaliacao: 4.8,
    reviews: 124,
    descricao: "Uma viagem no tempo a bordo do histórico Trem Maria Fumaça, seguida por uma experiência sensorial no Vale dos Vinhedos! Combine a nostalgia das locomotivas a vapor com a sofisticação dos vinhos premiados da região. Uma jornada única pela história e cultura gaúcha.",
    roteiro: `
     <div class="section-content">
<h4>Roteiro Completo Trem + Vinícolas</h4>
<ul>
  <li><strong>06:00</strong> - Saída de Gramado (ponto central)</li>
  <li><strong>06:30</strong> - Embarque em Canela (ponto de encontro)</li>
  <li><strong>08:30</strong> - Chegada em Bento Gonçalves</li>
  <li><strong>09:00</strong> - Embarque no Trem Maria Fumaça (trajeto de 1h30)</li>
  <li><strong>10:30</strong> - Chegada em Carlos Barbosa e traslado para vinícola</li>
  <li><strong>11:00</strong> - Vinícola Aurora - tour e degustação padrão</li>
  <li><strong>12:30</strong> - Almoço em restaurante típico italiano (incluído)</li>
  <li><strong>14:00</strong> - Teatro Epopéia Italiana (espetáculo de 50 minutos)</li>
  <li><strong>15:30</strong> - Queijaria Fetina Valbrenta - degustação de queijos e salames</li>
  <li><strong>16:30</strong> - Showroom Tramontina (visita e tempo para compras)</li>
  <li><strong>17:30</strong> - Início do retorno para Gramado</li>
  <li><strong>19:30</strong> - Chegada prevista em Gramado (20:00 em Canela)</li>
</ul>

<div class="attractions-details">
  <h5>🎂 Trem Maria Fumaça – Trajeto-Bento, Garibaldi e Carlos Barbosa</h5>
  <p>Show a bordo com músicas típicas, apresentações artísticas e degustação padrão de vinho, suco de uva e espumante (conforme regras da operadora).</p>
  
  <h5>🎭 Teatro Epopéia Italiana</h5>
  <p>Espetáculo com 9 cenários contando a história dos imigrantes italianos. Ingresso incluso.</p>
  
  <h5>🍇 Vinícola Aurora – Bento Gonçalves</h5>
  <p>Visitação e degustação padrão da vinícola (conforme disponibilidade). Incluso.</p>
  
  <h5>🥘 Almoço incluso</h5>
  <p>Restaurante Cantina italiana. Bebidas não inclusas.</p>
  
  <h5>🧵 Malharia Local</h5>
  <p>Parada rápida e opcional para compras direto de fábrica. (Sem custo, sem ingresso.)</p>
  
  <h5>🛠 Showroom Tramontina – Carlos Barbosa</h5>
  <p>Visita ao showroom oficial com mais de 5 mil itens em exposição. (Não é visita à fábrica e sem custo)</p>
  
  <h5>🧀 Queijaria Fetina Valbrenta</h5>
  <p>Degustação padrão de queijos, salames e vinhos coloniais (conforme disponibilidade).</p>
</div>

<div class="inclusions">
  <h5>✅ INCLUI:</h5>
  <ul>
    <li>Transporte da agência ida e volta</li>
    <li>Transporte entre todas as cidades visitadas</li>
    <li>Bilhete do Trem Maria Fumaça</li>
    <li>Ingresso da Epopeia Italiana</li>
    <li>Almoço</li>
    <li>Todas as degustações padrão nos locais mencionados</li>
  </ul>
  
  <h5>❌ NÃO INCLUI:</h5>
  <ul>
    <li>Bebidas durante o almoço</li>
    <li>Compras pessoais nas lojas visitadas</li>
  </ul>
</div>

<div class="schedule-info">
  <h5>🕒 HORÁRIOS PREVISTOS</h5>
  <p><strong>Saída de Gramado/Canela:</strong> previsto 06h00</p>
  <p><strong>Retorno previsto:</strong> entre 19:00 e 20:00</p>
  <p class="note">(Horário pode variar conforme trânsito, tempo nas atrações e fluxo do dia.)</p>
</div>

<div class="important-info">
  <h5>ℹ INFORMAÇÕES IMPORTANTES</h5>
  <p><strong>Distância:</strong><br>
  Gramado → Bento Gonçalves: aproximadamente 120 km (1h40 a 2h de viagem).</p>
  
  <p><strong>Sobre o Trem Maria Fumaça:</strong><br>
  O guia não acompanha dentro do trem (regra da operadora), mas aguarda o grupo na estação final. O passeio de trem dura cerca de 1h30.</p>
  
  <p><strong>Sobre o Transporte:</strong><br>
  Todo o deslocamento de Gramado, Bento, Garibaldi e Carlos Barbosa é feito no transporte da agência. As atrações aqui mencionadas também são todas feitas com transporte da agência, podendo ser carro, van, micro-ônibus ou ônibus.</p>
  
  <p><strong>Sobre a Ordem das Atrações:</strong><br>
  A ordem das visitas pode ser alterada pela FrancysTur conforme logística, clima e horários das atrações.</p>
</div>

<p class="note">*Ordem das atrações pode ser alterada conforme logística do dia.</p>
</div>
    `,
    pontosVisita: [
      "Trem Maria Fumaça (Bento Gonçalves a Carlos Barbosa)",
      "Vinícola Aurora (tour e degustação)",
      "Teatro Epopéia Italiana (espetáculo)",
      "Queijaria Fetina Valbrenta (degustação)",
      "Showroom Tramontina (visita)",
      "Restaurante Cantina Italiana (almoço)",
      "Parada em malharia local (opcional)"
    ],
    horarios: [
      "Saída Gramado: 06:00h",
      "Saída Canela: 06:30h",
      "Trem Maria Fumaça: 09:00h (horário fixo)",
      "Retorno Gramado: 19:30h - 20:00h",
      "Duração total: 12-14 horas"
    ],
    saidas: [
      "Gramado: 06:00h - Ponto central (informado na confirmação)",
      "Canela: 06:30h - Em frente à Catedral de Pedra",
      "Não inclui busca em hotel",
      "Transporte coletivo (micro-ônibus ou ônibus)"
    ],
    informacoesImportantes: [
      "Duração total: 12-14 horas (dia completo)",
      "Distância: 120km (Gramado até Bento Gonçalves)",
      "Guia não acompanha dentro do trem (regra da operadora)",
      "Ordem das atrações pode ser alterada conforme logística",
      "Levar agasalho (mais frio no Vale dos Vinhedos)",
      "Cartão de crédito aceito nas vinícolas",
      "Degustação alcoólica apenas para maiores de 18 anos",
      "Documento com foto obrigatório para degustações",
      "Sucos disponíveis para menores e não bebedores"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 15 dias antes:</strong>
          <span>Reembolso de 100% do valor</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 8-15 dias antes:</strong>
          <span>Reembolso de 80% do valor</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 50% do valor</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Sem direito a reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Trem Maria Fumaça:</strong>
          <span>Ingresso não é reembolsável após emissão (72h antes)</span>
        </div>
        <div class="policy-item">
          <strong>Almoço:</strong>
          <span>Cancelamento com menos de 48h: cobrança de 100% do almoço</span>
        </div>
        <div class="policy-item">
          <strong>Grupos:</strong>
          <span>Para grupos acima de 10 pessoas, políticas diferenciadas</span>
        </div>
      </div>
    `
  },
  {
    id: 5,
    nome: "Olivas de Gramado c/ Transporte",
    preco: {
      adulto: 259.00,
      senior: 189.00,
      jovem: 189.00
    },
    imagem: "/images/olivas-gramado.jpg",
    imagens: [
      "/images/olivas-gramado.jpg",
      "/images/olivas-gramado-2.jpg",
      "/images/olivas-gramado-3.jpg",
      "/images/olivas-gramado-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte ida e volta", "Ingresso", "Degustação guiada", "Guia especializado"],
    faixaEtaria: "Adultos 17-59: R$259 | 60+: R$189 | Jovens 12-16: R$189",
    avaliacao: 4.6,
    reviews: 87,
    descricao: "Uma imersão gastronômica no universo das azeitonas e azeites! Conheça o processo artesanal de produção, aprenda sobre os diferentes tipos de azeite e participe de uma degustação exclusiva. Perfeito para foodies e amantes da culinária mediterrânea.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Olivas de Gramado</h4>
        <ul>
          <li>14:00 - Saída do ponto de encontro em Gramado</li>
          <li>14:30 - Chegada à Olivais Gramado</li>
          <li>14:45 - Tour pelos olivais (explicação sobre cultivo)</li>
          <li>15:15 - Processo de produção artesanal (moinho tradicional)</li>
          <li>15:45 - Degustação guiada de azeites (6 variedades)</li>
          <li>16:15 - Aula de harmonização (azeites com alimentos)</li>
          <li>16:45 - Tempo livre na loja (compras de produtos)</li>
          <li>17:15 - Retorno para Gramado</li>
          <li>17:45 - Chegada no ponto inicial</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Olivais de Gramado (plantações)",
      "Moinho tradicional de azeite",
      "Sala de produção artesanal",
      "Sala de degustação",
      "Loja de produtos (azeites, azeitonas, patês)",
      "Jardim de oliveiras centenárias"
    ],
    horarios: [
      "Tarde: 14:00h (saída)",
      "Duração: 4 horas",
      "Todas as quintas e sábados",
      "Agendar com 48h de antecedência"
    ],
    saidas: [
      "Gramado Centro: 14:00h",
      "Ponto único de encontro",
      "Grupos mínimos: 4 pessoas",
      "Transporte incluso no trajeto"
    ],
    informacoesImportantes: [
      "Degustação inclui 6 tipos de azeite",
      "Azeitonas e patês incluídos na degustação",
      "Produtos disponíveis para compra no local",
      "Desconto de 10% nas compras durante o tour",
      "Estacionamento gratuito no local",
      "Acessível para cadeirantes",
      "Tour em português, inglês ou espanhol",
      "Reservas com 48h de antecedência"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com 48h-72h:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Sem reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Grupo mínimo:</strong>
          <span>Se não atingir 4 pessoas, tour pode ser remarcado</span>
        </div>
      </div>
    `
  },
  {
    id: 18,
    nome: "Tour Fotográfico Sem Transporte",
    preco: 150.00,
    imagem: "/images/tour-fotografico.jpg",
    imagens: [
      "/images/tour-fotografico.jpg",
      "/images/tour-fotografico-2.jpg",
      "/images/tour-fotografico-3.jpg",
      "/images/tour-fotografico-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 3hs",
    inclui: ["Fotógrafo profissional", "Sessão de fotos em 5 locais", "20 fotos editadas", "Guia dos pontos fotográficos"],
    avaliacao: 4.9,
    reviews: 78,
    descricao: "Capture os momentos mais especiais da sua viagem! Tour fotográfico pelos cenários mais belos de Gramado com fotógrafo profissional. Leve para casa lembranças incríveis dos lugares mais fotografados da Serra Gaúcha.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Tour Fotográfico</h4>
        <ul>
          <li>Encontro com o fotógrafo no ponto combinado</li>
          <li>Lago Negro - cenário romântico com chalés e natureza</li>
          <li>Rua Torta - ponto icônico e divertido</li>
          <li>Rua Coberta - arquitetura charmosa e flores</li>
          <li>Mirantes da cidade - vista panorâmica</li>
          <li>Ruas do centro - momentos espontâneos</li>
          <li>Entrega das fotos em até 7 dias</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Lago Negro",
      "Rua Torta",
      "Rua Coberta",
      "Mirantes panorâmicos",
      "Centro histórico",
      "Jardins secretos",
      "Pontos pouco conhecidos"
    ],
    horarios: [
      "Manhã: 09:00h - 12:00h",
      "Tarde: 14:00h - 17:00h",
      "Pôr do sol: 17:00h - 20:00h",
      "Diariamente"
    ],
    saidas: [
      "Ponto de encontro combinado",
      "Não inclui transporte entre locais",
      "Cliente deve se deslocar entre pontos"
    ],
    informacoesImportantes: [
      "Fotógrafo profissional especializado",
      "20 fotos editadas inclusas",
      "Sessão para até 4 pessoas (grupos maiores consultar)",
      "Trajes: recomenda-se levar 2-3 mudas de roupa",
      "Equipamento profissional incluso",
      "Fotos entregues em álbum digital",
      "Não inclui maquiagem ou styling"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 19,
    nome: "Tour Fotográfico c/ Transporte",
    preco: 220.00,
    imagem: "/images/tour-fotografico-transporte.jpg",
    imagens: [
      "/images/tour-fotografico-transporte.jpg",
      "/images/tour-fotografico-2.jpeg",
      "/images/tour-fotografico-transporte-3.jpg",
      "/images/tour-fotografico-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte privativo", "Fotógrafo profissional", "Sessão em 8 locais", "30 fotos editadas", "Água e snacks"],
    avaliacao: 4.9,
    reviews: 65,
    descricao: "Experiência fotográfica completa! Com transporte incluído, visite os melhores pontos fotográficos de Gramado e região com conforto e privacidade. Fotógrafo profissional e roteiro personalizado para capturar suas melhores lembranças.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Tour Fotográfico Premium</h4>
        <ul>
          <li>Busca no hotel ou local combinado</li>
          <li>Lago Negro - fotos clássicas e românticas</li>
          <li>Mirante Vale do Quilombo - vista deslumbrante</li>
          <li>Catedral de Pedra - arquitetura imponente</li>
          <li>Rua Torta - momentos divertidos</li>
          <li>Parque Knorr - natureza e tranquilidade</li>
          <li>Centro histórico - ruas charmosas</li>
          <li>Pôr do sol em mirante exclusivo</li>
          <li>Retorno ao hotel</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Lago Negro",
      "Mirante Vale do Quilombo",
      "Catedral de Pedra de Canela",
      "Rua Torta",
      "Parque Knorr",
      "Centro histórico de Gramado",
      "Mirante exclusivo para pôr do sol",
      "Locais secretos indicados pelo fotógrafo"
    ],
    horarios: [
      "Manhã: 08:00h - 12:00h",
      "Tarde: 14:00h - 18:00h",
      "Pôr do sol: 16:00h - 20:00h",
      "Diariamente"
    ],
    saidas: [
      "Hotel em Gramado/Canela",
      "Local de sua preferência",
      "Transporte privativo incluso"
    ],
    informacoesImportantes: [
      "Transporte privativo durante todo o tour",
      "Fotógrafo profissional especializado",
      "30 fotos editadas em alta resolução",
      "Água mineral e snacks inclusos",
      "Roteiro personalizável",
      "Sessão para até 6 pessoas",
      "Fotos entregues em até 5 dias úteis"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 10 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 5-10 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 5 dias:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 8,
    nome: "Tour Vale dos Vinhedos",
    preco: 320.00,
    imagem: "/images/vale-vinhedos-tour.jpg",
    imagens: [
      "/images/vale-vinhedos-tour.jpg",
      "/images/vale-vinhedos-tour-2.jpeg",
      "/images/vale-vinhedos-tour-3.jpeg",
      "/images/vale-vinhedos-tour-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 8hs",
    inclui: ["Transporte ida e volta", "Visita a 2 vinícolas", "Degustações", "Guia especializado", "Água mineral"],
    avaliacao: 4.8,
    reviews: 143,
    descricao: "Explore o famoso Vale dos Vinhedos, região produtora dos melhores vinhos do Brasil. Conheça vinícolas tradicionais, aprenda sobre o processo de produção e deguste vinhos premiados em uma experiência enoturística completa.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Vale dos Vinhedos</h4>
        <ul>
          <li>08:00 - Saída de Gramado</li>
          <li>09:30 - Chegada ao Vale dos Vinhedos</li>
          <li>10:00 - Primeira vinícola: tour pelas instalações</li>
          <li>11:00 - Degustação guiada de vinhos</li>
          <li>12:30 - Almoço em restaurante típico (opcional)</li>
          <li>14:00 - Segunda vinícola: visita às caves</li>
          <li>15:00 - Degustação de vinhos especiais</li>
          <li>16:00 - Tempo livre para compras</li>
          <li>16:30 - Retorno para Gramado</li>
          <li>18:00 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Vale dos Vinhedos (paisagem protegida)",
      "Vinícola tradicional familiar",
      "Vinícola boutique premiada",
      "Caves de envelhecimento",
      "Loja de vinhos e produtos regionais",
      "Restaurante típico italiano"
    ],
    horarios: [
      "Saída: 08:00h",
      "Retorno: 18:00h",
      "Duração: 8-10 horas",
      "Terças, quintas e sábados"
    ],
    saidas: [
      "Gramado Centro: 08:00h",
      "Canela Centro: 08:15h",
      "Transporte coletivo confortável"
    ],
    informacoesImportantes: [
      "Visita a 2 vinícolas diferentes",
      "Degustações inclusas em ambas",
      "Guia com conhecimento enológico",
      "Documento com foto obrigatório para degustação",
      "Degustação alcoólica apenas para maiores de 18 anos",
      "Sucos disponíveis para menores e não bebedores",
      "Reserva com 48h de antecedência"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 9,
    nome: "Pé da Cascata c/ Transporte",
    preco: 110.00,
    imagem: "/images/caracol.jpg",
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte", "Ingresso", "Guia local", "Seguro"],
    avaliacao: 4.8,
    reviews: 267,
    descricao: "Testemunhe a majestosa Cascata do Caracol, uma das mais belas quedas d'água do Brasil! Caminhe por trilhas em meio à natureza exuberante, respire ar puro e capture fotos espetaculares. Uma conexão direta com a força e beleza da natureza serrana.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Cascata do Caracol</h4>
        <ul>
          <li>09:00 - Saída de Gramado</li>
          <li>09:30 - Chegada ao Parque do Caracol</li>
          <li>09:45 - Trilha principal até a cascata</li>
          <li>10:30 - Chegada ao mirante principal</li>
          <li>11:15 - Trilha secundária (opcional)</li>
          <li>12:00 - Elevador panorâmico (ingresso incluso)</li>
          <li>12:45 - Tempo livre no centro de visitantes</li>
          <li>13:30 - Retorno para Gramado</li>
          <li>14:00 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Cascata do Caracol (130m de altura)",
      "Mirante principal",
      "Trilhas ecológicas",
      "Elevador panorâmico",
      "Centro de visitantes",
      "Loja de souvenirs",
      "Café com vista"
    ],
    horarios: [
      "Manhã: 09:00h",
      "Tarde: 14:00h",
      "Duração: 4 horas",
      "Parque aberto 9h-17h"
    ],
    saidas: [
      "Gramado: 09:00h e 14:00h",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Calçados fechados obrigatórios",
      "Trilhas com degraus (cerca de 900 degraus)",
      "Não recomendado para pessoas com mobilidade reduzida",
      "Levar água e protetor solar",
      "Capacidade limitada do elevador",
      "Fotos permitidas em todos os locais"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 72h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Condições climáticas:</strong>
          <span>Em caso de chuva, pode ser remarcado</span>
        </div>
      </div>
    `
  },
  {
    id: 10,
    nome: "Tour Gran Reserva Casa Valduga",
    preco: {
      adulto: 280.00,
      premium: 350.00
    },
    imagem: "/images/casa-valduga-gran-reserva.jpg",
    imagens: [
      "/images/casa-valduga-gran-reserva.jpg",
      "/images/casa-valduga-gran-reserva-2.jpg",
      "/images/casa-valduga-gran-reserva-3.jpg",
      "/images/casa-valduga-gran-reserva-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 5hs",
    inclui: ["Transporte ida e volta", "Tour Gran Reserva", "Degustação premium", "Guia especializado", "Brinde exclusivo"],
    faixaEtaria: "Adulto: R$280 | Premium: R$350 (degustação especial)",
    avaliacao: 4.9,
    reviews: 112,
    descricao: "Uma experiência exclusiva na renomada Casa Valduga! Conheça os segredos dos vinhos Gran Reserva, visite caves históricos e participe de uma degustação premium com vinhos premiados. Para verdadeiros apreciadores de enologia.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Casa Valduga Gran Reserva</h4>
        <ul>
          <li>13:00 - Saída de Gramado</li>
          <li>14:30 - Chegada à Casa Valduga</li>
          <li>14:45 - Tour Gran Reserva (caves exclusivos)</li>
          <li>15:30 - Processo de produção dos vinhos premium</li>
          <li>16:00 - Degustação premium (5 vinhos selecionados)</li>
          <li>17:00 - Harmonização com queijos finos (opcional)</li>
          <li>17:45 - Tempo livre na loja exclusiva</li>
          <li>18:15 - Retorno para Gramado</li>
          <li>19:45 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Caves Gran Reserva (acesso exclusivo)",
      "Sala de barricas especiais",
      "Adegas históricas da família Valduga",
      "Sala de degustação premium",
      "Loja exclusiva de vinhos premiados",
      "Jardins e vinhedos especiais"
    ],
    horarios: [
      "Tarde: 13:00h (saída)",
      "Duração: 5 horas na vinícola",
      "Total: 6-7 horas com transporte",
      "Segundas, quartas e sextas"
    ],
    saidas: [
      "Gramado Centro: 13:00h",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Tour exclusivo Gran Reserva",
      "Degustação com vinhos premium",
      "Guia especializado da vinícola",
      "Brinde exclusivo para participantes",
      "Documento obrigatório para degustação",
      "Vestimenta casual elegante recomendada",
      "Reservas com 72h de antecedência"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 10 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 5-10 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 5 dias:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 11,
    nome: "Skyglass c/ Transporte",
    preco: 210.00,
    imagem: "/images/skyglass.jpg",
    imagens: [
      "/images/skyglass.jpg",
      "/images/skyglass-2.jpg",
      "/images/skyglass-3.jpg",
      "/images/skyglass-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte ida e volta", "Ingresso Skyglass", "Guia acompanhante", "Água", "Seguro"],
    avaliacao: 4.9,
    reviews: 156,
    descricao: "Uma experiência única e emocionante! Caminhe sobre o vidro a 60 metros de altura e desfrute de vistas panorâmicas deslumbrantes da Serra Gaúcha. Uma atração imperdível para quem busca adrenalina e belas paisagens.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Skyglass</h4>
        <ul>
          <li>13:00 - Saída de Gramado</li>
          <li>13:45 - Chegada ao Skyglass (Canela)</li>
          <li>14:00 - Briefing de segurança e orientações</li>
          <li>14:15 - Experiência Skyglass (caminhada sobre o vidro)</li>
          <li>15:00 - Área de fotos e mirantes adicionais</li>
          <li>15:30 - Café com vista (opcional)</li>
          <li>16:00 - Tempo livre na loja de souvenirs</li>
          <li>16:30 - Retorno para Gramado</li>
          <li>17:15 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Skyglass (passarela de vidro)",
      "Mirante panorâmico 360°",
      "Torre de observação",
      "Área de fotos profissionais",
      "Café com vista deslumbrante",
      "Loja de souvenirs exclusivos"
    ],
    horarios: [
      "Tarde: 13:00h (saída)",
      "Duração: 4-5 horas",
      "Todos os dias",
      "Melhor horário: 14h-16h"
    ],
    saidas: [
      "Gramado Centro: 13:00h",
      "Canela Centro: 13:15h",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Altura: 60 metros do solo",
      "Piso de vidro especial de segurança",
      "Não recomendado para pessoas com vertigem",
      "Calçados fechados obrigatórios",
      "Seguro acidentes incluso",
      "Fotos profissionais disponíveis (opcional)",
      "Acesso para cadeirantes até área de observação"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 72h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Condições climáticas:</strong>
          <span>Em caso de ventos fortes ou chuva, pode ser remarcado</span>
        </div>
      </div>
    `
  },
  {
    id: 12,
    nome: "Tour dos Parques",
    preco: 195.00,
    imagem: "/images/tour-parques.jpg",
    imagens: [
      "/images/tour-parques.jpg",
      "/images/tour-parques-2.jpg",
      "/images/snowland-4.jpg",
      "/images/tour-parques-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 6hs",
    inclui: ["Transporte", "Ingresso Mini Mundo", "Ingresso Mundo a Vapor", "Guia acompanhante", "Água"],
    avaliacao: 4.6,
    reviews: 89,
    descricao: "Conheça os parques mais famosos da região em um único passeio! Mini Mundo e Mundo a Vapor - duas atrações imperdíveis que encantam crianças e adultos. Uma jornada por miniaturas perfeitas e máquinas impressionantes.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Tour dos Parques</h4>
        <ul>
          <li>09:00 - Saída de Gramado</li>
          <li>09:15 - Chegada ao Mini Mundo</li>
          <li>09:30 - 11:30: Visita ao Mini Mundo (cidades em miniatura)</li>
          <li>11:45 - Deslocamento para Canela</li>
          <li>12:00 - Almoço (opcional, não incluso)</li>
          <li>13:00 - Chegada ao Mundo a Vapor</li>
          <li>13:15 - 15:15: Visita ao Mundo a Vapor (máquinas e ciência)</li>
          <li>15:30 - Tempo livre na loja de souvenirs</li>
          <li>16:00 - Retorno para Gramado</li>
          <li>16:15 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Mini Mundo (Gramado)",
      "Mundo a Vapor (Canela)",
      "Loja de miniaturas",
      "Área de demonstrações científicas",
      "Café temático"
    ],
    horarios: [
      "Manhã: 09:00h (saída)",
      "Duração: 6-7 horas",
      "Terças, quintas e sábados",
      "Agendar com 48h de antecedência"
    ],
    saidas: [
      "Gramado Centro: 09:00h",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Ingressos para ambos parques inclusos",
      "Guia acompanhante durante todo o passeio",
      "Água mineral fornecida",
      "Almoço não incluso (sugestões fornecidas)",
      "Parques acessíveis para cadeirantes",
      "Estacionamento gratuito nos locais",
      "Fotos permitidas em todas as áreas"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 5 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 2-5 dias antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 13,
    nome: "Tour Jolimont - Pisa da Uva",
    preco: 180.00,
    imagem: "/images/jolimont-pisa-uva.jpg",
    imagens: [
      "/images/jolimont-pisa-uva.jpg",
      "/images/jolimont-pisa-uva-2.jpg",
      "/images/jolimont-pisa-uva-3.jpg",
      "/images/jolimont-pisa-uva-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte ida e volta", "Atividade de pisa da uva", "Degustação de suco", "Guia especializado", "Certificado"],
    avaliacao: 4.7,
    reviews: 94,
    descricao: "Viva uma experiência tradicional e divertida na vinícola Jolimont! Participe da pisa da uva como antigamente, aprenda sobre o processo artesanal e leve para casa um certificado de participação. Diversão garantida para toda a família!",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Pisa da Uva Jolimont</h4>
        <ul>
          <li>10:00 - Saída de Gramado</li>
          <li>10:45 - Chegada à Vinícola Jolimont</li>
          <li>11:00 - Recepção e explicação sobre a tradição</li>
          <li>11:15 - Atividade de pisa da uva (participação)</li>
          <li>12:00 - Degustação de suco de uva artesanal</li>
          <li>12:30 - Tour pela vinícola e produção</li>
          <li>13:15 - Almoço típico (opcional, não incluso)</li>
          <li>14:00 - Entrega do certificado e tempo livre</li>
          <li>14:30 - Retorno para Gramado</li>
          <li>15:15 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Área da pisa da uva tradicional",
      "Vinícola Jolimont",
      "Sala de degustação",
      "Adegas de produção",
      "Loja de produtos artesanais",
      "Jardins da vinícola"
    ],
    horarios: [
      "Manhã: 10:00h (saída)",
      "Duração: 4-5 horas",
      "Fevereiro a Abril (temporada da uva)",
      "Sextas e sábados"
    ],
    saidas: [
      "Gramado Centro: 10:00h",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Atividade sazonal (conforme colheita da uva)",
      "Roupa que possa sujar recomendada",
      "Atividade participativa (opcional)",
      "Certificado de participação incluso",
      "Degustação de suco para todas as idades",
      "Traje casual e confortável",
      "Reserva com antecedência obrigatória"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 14,
    nome: "Tour Vale dos Vinhedos com Piquenique",
    preco: 380.00,
    imagem: "/images/vale-vinhedos-piquenique.jpg",
    imagens: [
      "/images/vale-vinhedos-piquenique.jpg",
      "/images/vale-vinhedos-piquenique-2.jpeg",
      "/images/vale-vinhedos-piquenique-3.jpg",
      "/images/vale-vinhedos-piquenique-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 7hs",
    inclui: ["Transporte ida e volta", "Piquenique gourmet", "Visita a vinícola", "Degustação de vinhos", "Guia especializado", "Cesta personalizada"],
    avaliacao: 4.9,
    reviews: 67,
    descricao: "Um passeio romântico e sofisticado pelo Vale dos Vinhedos! Desfrute de um piquenique gourmet entre os vinhedos, deguste vinhos premiados e viva momentos inesquecíveis em um dos cenários mais belos do Brasil. Perfeito para casais e ocasiões especiais.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Vale dos Vinhedos com Piquenique</h4>
        <ul>
          <li>10:00 - Saída de Gramado</li>
          <li>11:30 - Chegada ao Vale dos Vinhedos</li>
          <li>11:45 - Visita à vinícola selecionada</li>
          <li>12:30 - Degustação de vinhos no jardim</li>
          <li>13:30 - Piquenique gourmet entre os vinhedos</li>
          <li>15:00 - Caminhada pelos vinhedos (opcional)</li>
          <li>16:00 - Tempo livre para fotos e compras</li>
          <li>16:30 - Retorno para Gramado</li>
          <li>18:00 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Vale dos Vinhedos (paisagem deslumbrante)",
      "Vinícola boutique selecionada",
      "Jardins entre os vinhedos",
      "Local do piquenique gourmet",
      "Loja de vinhos e produtos especiais",
      "Mirantes naturais"
    ],
    horarios: [
      "Manhã: 10:00h (saída)",
      "Piquenique: 13:30h",
      "Duração: 7-8 horas",
      "Quartas, sextas e domingos"
    ],
    saidas: [
      "Gramado Centro: 10:00h",
      "Hotel mediante agendamento",
      "Transporte privativo ou compartilhado"
    ],
    informacoesImportantes: [
      "Piquenique gourmet incluso (queijos, frios, frutas, pães)",
      "Vinho ou suco incluso na cesta",
      "Toalha e acessórios fornecidos",
      "Grupos pequenos (até 8 pessoas)",
      "Reserva com 72h de antecedência obrigatória",
      "Em caso de chuva, piquenique em área coberta",
      "Traje casual elegante recomendado"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 10 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 5-10 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 5 dias:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 15,
    nome: "Tour de Vinícolas Jolimont",
    preco: 240.00,
    imagem: "/images/jolimont-pisa-uva-2.jpg",
    imagens: [
      "/images/jolimont-pisa-uva-2.jpg",
      "/images/vinicolas-jolimont-2.jpg",
      "/images/vinicolas-jolimont.jpg",
      "/images/vinicolas-jolimont-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 5hs",
    inclui: ["Transporte ida e volta", "Visita a 2 vinícolas da família Jolimont", "Degustações guiadas", "Guia especializado", "Água mineral"],
    avaliacao: 4.8,
    reviews: 112,
    descricao: "Conheça o legado da família Jolimont, uma das mais tradicionais produtoras de vinhos da Serra Gaúcha. Visite duas de suas vinícolas, aprenda sobre a história da família e deguste vinhos premiados em uma experiência autêntica e familiar.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Vinícolas Jolimont</h4>
        <ul>
          <li>13:00 - Saída de Gramado</li>
          <li>13:45 - Chegada à primeira vinícola Jolimont</li>
          <li>14:00 - Tour pela produção e história da família</li>
          <li>14:45 - Degustação guiada de vinhos</li>
          <li>15:30 - Deslocamento para segunda vinícola</li>
          <li>15:45 - Visita às caves e área de envelhecimento</li>
          <li>16:30 - Degustação de vinhos especiais</li>
          <li>17:15 - Tempo livre para compras</li>
          <li>17:45 - Retorno para Gramado</li>
          <li>18:30 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Vinícola Jolimont tradicional",
      "Vinícola Jolimont boutique",
      "Caves de envelhecimento",
      "Sala de degustação familiar",
      "Museu da família Jolimont",
      "Loja de vinhos e produtos artesanais"
    ],
    horarios: [
      "Tarde: 13:00h (saída)",
      "Duração: 5-6 horas",
      "Terças, quintas e sábados",
      "Agendar com 48h de antecedência"
    ],
    saidas: [
      "Gramado Centro: 13:00h",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Visita a 2 vinícolas da mesma família",
      "Degustações inclusas em ambas",
      "História da família Jolimont contada durante o tour",
      "Documento com foto obrigatório para degustação",
      "Degustação alcoólica apenas para maiores de 18 anos",
      "Sucos artesanais disponíveis para todos",
      "Reserva recomendada com antecedência"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 16,
    nome: "Combo dos 7 Museus",
    preco: 190.00,
    imagem: "/images/combo-7-museus.jpeg",
    imagens: [
      "/images/combo-7-museus.png",
      "/images/combo-7-museus-2.jpg",
      "/images/combo-7-museus-3.jpg",
      "/images/combo-7-museus-4.jpg"
    ],
    categoria: "passeios",
    duracao: "Aprox 6hs",
    inclui: ["Transporte entre museus", "Ingressos para 7 museus", "Roteiro guiado", "Mapa dos museus", "Água mineral"],
    avaliacao: 4.6,
    reviews: 134,
    descricao: "Uma jornada cultural pelos museus mais interessantes de Gramado! Conheça a história, arte, ciência e curiosidades em 7 museus temáticos diferentes. Perfeito para famílias, estudantes e amantes da cultura.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Combo 7 Museus</h4>
        <ul>
          <li>09:30 - Saída do ponto de encontro</li>
          <li>10:00 - Museu do Perfume (história e criação)</li>
          <li>11:00 - Harley Motor Show (motos e liberdade)</li>
          <li>12:00 - Hollywood Dream Cars (carros de cinema)</li>
          <li>13:00 - Almoço (opcional, não incluso)</li>
          <li>14:00 - Museu de Cera (celebridades em cera)</li>
          <li>15:00 - Super Carros (carros esportivos)</li>
          <li>16:00 - Museu Medieval (cavaleiros e princesas)</li>
          <li>17:00 - Museu do Chocolate (história e degustação)</li>
          <li>17:30 - Retorno ao ponto inicial</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Museu do Perfume",
      "Harley Motor Show",
      "Hollywood Dream Cars",
      "Museu de Cera",
      "Super Carros",
      "Museu Medieval",
      "Museu do Chocolate"
    ],
    horarios: [
      "Manhã: 09:30h (saída)",
      "Duração: 6-8 horas",
      "Segundas, quartas e sextas",
      "Tour completo com pausa para almoço"
    ],
    saidas: [
      "Gramado Centro: 09:30h",
      "Ponto único de encontro",
      "Transporte entre museus incluso"
    ],
    informacoesImportantes: [
      "Ingressos para 7 museus diferentes inclusos",
      "Transporte entre os museus incluso",
      "Roteiro otimizado para aproveitamento máximo",
      "Água mineral fornecida",
      "Almoço não incluso (sugestões fornecidas)",
      "Calçados confortáveis recomendados",
      "Fotos permitidas em todos os museus"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 5 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 2-5 dias antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 17,
    nome: "Alpen Park",
    preco: 160.00,
    imagem: "/images/alpen-park.jpg",
    categoria: "passeios",
    duracao: "Aprox 4hs",
    inclui: ["Transporte", "Ingresso", "Equipamentos de segurança", "Seguro"],
    avaliacao: 4.8,
    reviews: 189,
    descricao: "Adrenalina e diversão garantidas no Alpen Park! Desafie-se nas emocionantes tirolesas, explore trilhas de aventura e divirta-se em atrações radicais seguras. O parque perfeito para famílias aventureiras e amantes de esportes radicais.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Alpen Park</h4>
        <ul>
          <li>13:00 - Saída de Gramado</li>
          <li>13:20 - Chegada ao Alpen Park</li>
          <li>13:30 - Equipamentos de segurança</li>
          <li>14:00 - Tirolesa (3 circuitos diferentes)</li>
          <li>15:00 - Trilha de aventura</li>
          <li>16:00 - Atrações radicais (opcionais)</li>
          <li>16:45 - Tempo livre para fotos</li>
          <li>17:15 - Retorno para Gramado</li>
          <li>17:35 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Tirolesa (500m de extensão)",
      "Trilha de aventura",
      "Ponte pênsil",
      "Arvorismo",
      "Área de escalada",
      "Café com vista",
      "Loja de souvenirs"
    ],
    horarios: [
      "Tarde: 13:00h",
      "Duração: 4 horas",
      "Parque aberto 10h-18h"
    ],
    saidas: [
      "Gramado: ponto central",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Peso mínimo: 30kg | máximo: 120kg",
      "Altura mínima: 1,40m",
      "Não recomendado para grávidas",
      "Calçados fechados obrigatórios",
      "Equipamentos de segurança fornecidos",
      "Seguro acidentes incluso",
      "Instrutores qualificados"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 72h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 20,
    nome: "Rota Romântica - Gramado e Canela",
    preco: 145.00,
    imagem: "/images/rota-romantica.jpg",
    categoria: "passeios",
    duracao: "Aprox 5hs",
    inclui: ["Transporte", "Guia especializado", "Paradas estratégicas", "Água mineral"],
    avaliacao: 4.7,
    reviews: 203,
    descricao: "Descubra os cenários mais românticos da Serra Gaúcha! Passeie por Gramado e Canela, visitando mirantes deslumbrantes, jardins encantados e pontos históricos. Perfeito para casais e quem busca belas paisagens e momentos inesquecíveis.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Romântico</h4>
        <ul>
          <li>14:00 - Saída do ponto de encontro</li>
          <li>14:30 - Mirante do Vale do Quilombo</li>
          <li>15:15 - Parque do Caracol (vista externa)</li>
          <li>16:00 - Catedral de Pedra de Canela</li>
          <li>16:45 - Rua Coberta de Gramado</li>
          <li>17:30 - Lago Negro (pôr do sol)</li>
          <li>18:15 - Jantar romântico (opcional)</li>
          <li>19:00 - Retorno aos hotéis</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Mirante Vale do Quilombo",
      "Parque do Caracol (exterior)",
      "Catedral de Pedra de Canela",
      "Rua Coberta de Gramado",
      "Lago Negro",
      "Vale do Bode (vista panorâmica)",
      "Alameda das Hortênsias"
    ],
    horarios: [
      "Tarde: 14:00h",
      "Pôr do sol: 17:30h",
      "Duração: 5 horas",
      "Diariamente"
    ],
    saidas: [
      "Gramado Centro: 14:00h",
      "Hotéis centrais mediante agendamento"
    ],
    informacoesImportantes: [
      "Passeio ideal para casais",
      "Fotos românticas incluídas",
      "Guia especializado em roteiros românticos",
      "Água mineral fornecida",
      "Jantar opcional com reserva prévia",
      "Ponto de encontro definido na reserva"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 48h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-48h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 21,
    nome: "Parque da Ferradura",
    preco: 95.00,
    imagem: "/images/ferradura.jpg",
    categoria: "passeios",
    duracao: "Aprox 3hs",
    inclui: ["Transporte", "Ingresso", "Guia", "Água mineral"],
    avaliacao: 4.6,
    reviews: 154,
    descricao: "Aventure-se no Parque da Ferradura e descubra um dos mais belos cânions da região! Trilhas acessíveis, mirantes deslumbrantes e uma vista de tirar o fôlego da formação em formato de ferradura. Natureza pura para todas as idades.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Parque da Ferradura</h4>
        <ul>
          <li>10:00 - Saída de Gramado</li>
          <li>10:40 - Chegada ao Parque da Ferradura</li>
          <li>11:00 - Início da trilha principal</li>
          <li>11:45 - Mirante do Cânion</li>
          <li>12:30 - Trilha das Cascatas</li>
          <li>13:15 - Mirante da Ferradura (vista 360°)</li>
          <li>14:00 - Retorno para Gramado</li>
          <li>14:40 - Chegada em Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Cânion da Ferradura",
      "Mirante principal",
      "Trilha das Cascatas",
      "Mirante 360°",
      "Centro de visitantes",
      "Área de piquenique",
      "Loja de artesanato"
    ],
    horarios: [
      "Manhã: 10:00h",
      "Tarde: 15:00h",
      "Duração: 3 horas"
    ],
    saidas: [
      "Gramado: pontos centrais",
      "Transporte incluso"
    ],
    informacoesImportantes: [
      "Trilhas de baixa dificuldade",
      "Acessível para crianças e idosos",
      "Calçados esportivos recomendados",
      "Levar câmera fotográfica",
      "Água mineral fornecida",
      "Banheiros no local",
      "Estacionamento gratuito"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 48h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-48h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  }
],
  
  vinicolas: [
    {
      id: 20,
      nome: "Rota das Vinícolas - Premium",
      preco: 250.00,
      imagem: "/images/vinicolas-tour.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 8hs",
      inclui: ["Transporte", "Degustações em 3 vinícolas", "Guia especializado", "Água mineral"],
      avaliacao: 4.9,
      reviews: 189,
      descricao: "Um passeio sofisticado pelas melhores vinícolas da Serra Gaúcha! Degustação de vinhos premiados, visita a caves históricos e aprendizado sobre viticultura. Para quem busca conhecer a excelência dos vinhos brasileiros em um tour completo.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Vinícolas Premium</h4>
          <ul>
            <li>09:00 - Saída de Gramado</li>
            <li>10:30 - Vinícola 1: Tour e degustação</li>
            <li>12:00 - Almoço em restaurante regional</li>
            <li>13:30 - Vinícola 2: Caves e degustação premium</li>
            <li>15:00 - Vinícola 3: Harmonização e finalização</li>
            <li>16:30 - Retorno para Gramado</li>
            <li>18:00 - Chegada em Gramado</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Vinícola tradicional (tour completo)",
        "Vinícola boutique (produção artesanal)",
        "Vinícola premium (caves históricos)",
        "Restaurante regional",
        "Loja de vinhos especiais"
      ],
      horarios: [
        "Saída: 09:00h",
        "Retorno: 18:00h",
        "Duração: 8-9 horas",
        "Quartas, sextas e sábados"
      ],
      saidas: [
        "Gramado: ponto central",
        "Transporte em van executiva"
      ],
      informacoesImportantes: [
        "Degustação em 3 vinícolas diferentes",
        "Guia enólogo especializado",
        "Água mineral durante o passeio",
        "Documento com foto obrigatório",
        "Degustação alcoólica apenas para maiores",
        "Sucos disponíveis para não bebedores",
        "Grupos pequenos (até 12 pessoas)"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 7 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 3-7 dias antes:</strong>
            <span>Reembolso de 70%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 72h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 21,
      nome: "Tour Vinícolas Premium - Privativo",
      preco: 350.00,
      imagem: "/images/vinicolas-privativo.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 6hs",
      inclui: ["Veículo privativo", "Degustações selecionadas", "Confraternização", "Guia especializado"],
      avaliacao: 5.0,
      reviews: 67,
      descricao: "Experiência exclusiva e personalizada para verdadeiros apreciadores de vinho! Tour privativo pelas vinícolas mais conceituadas, com degustações especiais e atenção dedicada. Ideal para casais, grupos pequenos ou celebrações especiais.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Privativo Vinícolas</h4>
          <ul>
            <li>10:00 - Saída do hotel (horário flexível)</li>
            <li>11:00 - Vinícola selecionada (tour VIP)</li>
            <li>12:30 - Almoço harmonizado (opcional)</li>
            <li>14:00 - Segunda vinícola (degustação especial)</li>
            <li>15:30 - Terceira vinícola (encerramento)</li>
            <li>16:30 - Retorno ao hotel</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Vinícolas selecionadas conforme preferência",
        "Restaurantes gourmet (opcional)",
        "Lojas exclusivas de vinhos",
        "Jardins e áreas especiais"
      ],
      horarios: [
        "Horário flexível (10:00-17:00)",
        "Duração: 6-7 horas",
        "Agendamento personalizado"
      ],
      saidas: [
        "Hotel em Gramado/Canela",
        "Ponto de preferência do cliente",
        "Carro privativo executivo"
      ],
      informacoesImportantes: [
        "Roteiro totalmente personalizável",
        "Degustações premium incluídas",
        "Guia enólogo particular",
        "Água e snacks no veículo",
        "Wi-Fi disponível",
        "Reserva com antecedência mínima"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 10 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 5-10 dias antes:</strong>
            <span>Reembolso de 70%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 5 dias:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 22,
      nome: "Vale dos Vinhedos - Degustação Completa",
      preco: 280.00,
      imagem: "/images/vale-vinhedos-completo.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 7hs",
      inclui: ["Transporte", "4 degustações", "Almoço típico", "Guia especializado"],
      avaliacao: 4.8,
      reviews: 143,
      descricao: "Imersão total no universo dos vinhos! Percorra o famoso Vale dos Vinhedos, participe de degustações guiadas, aprenda sobre harmonização e saboreie um delicioso almoço típico da região. Uma jornada completa para os sentidos.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Vale dos Vinhedos</h4>
          <ul>
            <li>08:30 - Saída de Gramado</li>
            <li>10:00 - Primeira degustação (vinhos jovens)</li>
            <li>11:00 - Segunda degustação (vinhos envelhecidos)</li>
            <li>12:30 - Almoço típico italiano</li>
            <li>14:00 - Terceira degustação (espumantes)</li>
            <li>15:00 - Quarta degustação (vinhos especiais)</li>
            <li>16:00 - Retorno para Gramado</li>
            <li>17:30 - Chegada em Gramado</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Vinícola familiar tradicional",
        "Vinícola de produção média",
        "Restaurante típico italiano",
        "Vinícola de espumantes",
        "Loja de produtos regionais"
      ],
      horarios: [
        "Saída: 08:30h",
        "Retorno: 17:30h",
        "Duração: 7-8 horas",
        "Terças, quintas e sábados"
      ],
      saidas: [
        "Gramado: ponto central",
        "Transporte coletivo confortável"
      ],
      informacoesImportantes: [
        "4 degustações completas incluídas",
        "Almoço típico incluso",
        "Guia especializado em enologia",
        "Grupos de até 15 pessoas",
        "Degustação para maiores de 18 anos",
        "Sucos disponíveis para menores"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 5 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 2-5 dias antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 48h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 23,
      nome: "Casa Valduga Experience",
      preco: 195.00,
      imagem: "/images/casa-valduga.jpg",
      imagens: [
        "/images/casa-valduga.jpg",
        "/images/casa-valduga-2.jpg",
        "/images/casa-valduga-3.jpg",
        "/images/casa-valduga-4.jpg"
      ],
      categoria: "vinicolas",
      duracao: "Aprox 4hs",
      inclui: ["Transporte", "Tour pela vinícola", "Degustação especial", "Guia"],
      avaliacao: 4.9,
      reviews: 98,
      descricao: "Conheça a tradição e excelência da Casa Valduga, uma das mais premiadas vinícolas do Brasil. Tour pelos caves, aprendizado sobre produção artesanal e degustação de vinhos exclusivos. Uma experiência memorável para amantes de enologia.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Casa Valduga</h4>
          <ul>
            <li>13:00 - Saída de Gramado</li>
            <li>14:30 - Chegada à Casa Valduga</li>
            <li>14:45 - Tour pelos caves históricos</li>
            <li>15:30 - Processo de produção</li>
            <li>16:00 - Degustação premium</li>
            <li>16:45 - Tempo livre na loja</li>
            <li>17:15 - Retorno para Gramado</li>
            <li>18:45 - Chegada em Gramado</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Caves históricos da Casa Valduga",
        "Sala de produção",
        "Adegas de envelhecimento",
        "Sala de degustação premium",
        "Loja de vinhos premiados",
        "Jardins da vinícola"
      ],
      horarios: [
        "Tarde: 13:00h",
        "Duração: 4 horas na vinícola",
        "Total: 5-6 horas",
        "Segundas, quartas e sextas"
      ],
      saidas: [
        "Gramado: ponto central",
        "Transporte incluso"
      ],
      informacoesImportantes: [
        "Tour exclusivo na Casa Valduga",
        "Degustação de vinhos premiados",
        "Guia especializado da vinícola",
        "Área restrita para visitantes",
        "Reservas com antecedência",
        "Vestimenta casual elegante"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 7 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 3-7 dias antes:</strong>
            <span>Reembolso de 70%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 72h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    }
  ],
  
  transfers: [
    {
      id: 30,
      nome: "Transfer Aeroporto - Gramado",
      preco: 150.00,
      imagem: "/images/transfer.jpg",
      categoria: "transfers",
      duracao: "Aprox 3hs",
      inclui: ["Veículo privativo", "Motorista", "Assistência", "Bagagem"],
      avaliacao: 4.7,
      reviews: 312,
      descricao: "Comece sua viagem com conforto e segurança! Transfer privativo do aeroporto até seu hotel em Gramado. Motorista profissional, veículo confortável e assistência personalizada. Chegue relaxado para curtir suas férias!",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro do Transfer</h4>
          <ul>
            <li>Encontro no aeroporto (desembarque)</li>
            <li>Assistência com bagagens</li>
            <li>Viagem direta para Gramado</li>
            <li>Parada para descanso (opcional)</li>
            <li>Entrega no endereço solicitado</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Aeroporto Salgado Filho (POA)",
        "Rodovia Free Way",
        "Serra Gaúcha",
        "Centro de Gramado",
        "Hotel solicitado"
      ],
      horarios: [
        "Flexível conforme horário do voo",
        "24 horas por dia",
        "Tempo de viagem: 2-3 horas"
      ],
      saidas: [
        "Aeroporto Salgado Filho - Porto Alegre",
        "Portão de desembarque"
      ],
      informacoesImportantes: [
        "Aguardamos no desembarque com placa com nome",
        "Tempo de espera: 60 minutos após pouso",
        "Bagagem: 1 mala grande + 1 bagagem de mão por pessoa",
        "Trajeto: Aeroporto Salgado Filho (POA) → Gramado",
        "Pagamento direto ao motorista",
        "Tráfego intenso pode aumentar duração",
        "Parada para banheiro disponível"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 24h antes:</strong>
            <span>Sem multa</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 6-24h antes:</strong>
            <span>Taxa de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 6h:</strong>
            <span>Taxa de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Atraso do voo:</strong>
            <span>Monitoramos e ajustamos horário sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Voo cancelado:</strong>
            <span>Reagendamento sem custo adicional</span>
          </div>
        </div>
      `
    },
    {
      id: 31,
      nome: "Transfer Compartilhado - Aeroporto",
      preco: 80.00,
      imagem: "/images/transfer-compartilhado.jpg",
      categoria: "transfers",
      duracao: "Aprox 3hs",
      inclui: ["Van compartilhada", "Motorista", "Paradas estratégicas", "Ar condicionado"],
      avaliacao: 4.5,
      reviews: 189,
      descricao: "Transfer econômico e eficiente do aeroporto até Gramado. Viaje com outros turistas em uma van confortável, com paradas estratégicas nos principais hotéis. Opção inteligente para quem busca praticidade e bom custo-benefício.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Transfer Compartilhado</h4>
          <ul>
            <li>Encontro no ponto designado do aeroporto</li>
            <li>Espera por outros passageiros (máx 30 min)</li>
            <li>Viagem compartilhada para Gramado</li>
            <li>Paradas em hotéis centrais</li>
            <li>Entrega no endereço mais próximo</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Aeroporto Salgado Filho",
        "Posto de combustível (parada rápida)",
        "Hotéis centrais de Gramado",
        "Ponto final: Centro de Gramado"
      ],
      horarios: [
        "Saídas regulares: 09:00, 12:00, 15:00, 18:00, 21:00",
        "Flexível conforme disponibilidade"
      ],
      saidas: [
        "Aeroporto POA - Ponto de encontro transfer"
      ],
      informacoesImportantes: [
        "Van compartilhada com outros turistas",
        "Tempo de espera máximo: 30 minutos",
        "Bagagem limitada: 1 mala por pessoa",
        "Paradas em hotéis centrais apenas",
        "Reserva com antecedência necessária",
        "Pode haver espera por outros passageiros"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 32,
      nome: "Transfer Executivo - Carro Privativo",
      preco: 200.00,
      imagem: "/images/transfer-executivo.jpg",
      categoria: "transfers",
      duracao: "Aprox 3hs",
      inclui: ["Carro executivo", "Motorista bilíngue", "Água e snacks", "Wi-Fi", "Assistência VIP"],
      avaliacao: 4.9,
      reviews: 156,
      descricao: "Transfer VIP com máximo conforto e sofisticação! Carro executivo com motorista bilíngue, água mineral, snacks e atendimento personalizado. Perfeito para executivos, casais em lua de mel ou quem busca uma experiência premium.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Transfer Executivo</h4>
          <ul>
            <li>Encontro personalizado no aeroporto</li>
            <li>Assistência VIP com bagagens</li>
            <li>Viagem em carro executivo premium</li>
            <li>Serviço de bordo (água, snacks)</li>
            <li>Entrega direta no endereço exato</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Aeroporto Salgado Filho",
        "Trajeto personalizado",
        "Endereço exato solicitado"
      ],
      horarios: [
        "24 horas por dia",
        "Flexível conforme necessidade"
      ],
      saidas: [
        "Aeroporto POA ou endereço solicitado"
      ],
      informacoesImportantes: [
        "Motorista bilíngue (português/inglês)",
        "Carro executivo premium",
        "Wi-Fi gratuito durante o trajeto",
        "Água mineral e snacks inclusos",
        "Assistência personalizada",
        "Sem limite de espera (conforme voo)",
        "Pagamento facilitado"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 24h antes:</strong>
            <span>Sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 6-24h antes:</strong>
            <span>Taxa de 30%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 6h:</strong>
            <span>Taxa de 100%</span>
          </div>
        </div>
      `
    },
    {
      id: 33,
      nome: "Transfer Van Executiva - Grupos",
      preco: 280.00,
      imagem: "/images/transfer-van.jpg",
      categoria: "transfers",
      duracao: "Aprox 3hs",
      inclui: ["Van executiva", "Motorista", "Espaço para bagagens", "Ar condicionado", "Água"],
      avaliacao: 4.8,
      reviews: 94,
      descricao: "Solução perfeita para grupos e famílias! Van executiva espaçosa, ideal para até 12 pessoas com bagagens. Conforto, praticidade e economia para viajar todos juntos. Motorista experiente e ar condicionado garantidos.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Transfer para Grupos</h4>
          <ul>
            <li>Encontro no ponto combinado</li>
            <li>Carregamento de bagagens</li>
            <li>Viagem confortável para Gramado</li>
            <li>Entrega no endereço do grupo</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Local de encontro combinado",
        "Trajeto direto para Gramado",
        "Endereço de destino"
      ],
      horarios: [
        "Flexível conforme necessidade do grupo",
        "24 horas mediante reserva"
      ],
      saidas: [
        "Aeroporto POA ou local combinado"
      ],
      informacoesImportantes: [
        "Capacidade: até 12 passageiros",
        "Espaço amplo para bagagens",
        "Ar condicionado em todo veículo",
        "Água mineral inclusa",
        "Ideal para famílias grandes",
        "Reserva com antecedência"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Taxa de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Taxa de 100%</span>
          </div>
        </div>
      `
    },
    {
      id: 34,
      nome: "Transfer Spin - Econômico",
      preco: 120.00,
      imagem: "/images/transfer-spin.jpg",
      categoria: "transfers",
      duracao: "Aprox 3hs",
      inclui: ["Carro compacto", "Motorista", "1 mala grande + bagagem de mão", "Ar condicionado"],
      avaliacao: 4.6,
      reviews: 203,
      descricao: "Transfer econômico em carro compacto, ideal para até 3 passageiros. Prático, ágil e confortável para casais ou pequenos grupos. Melhor custo-benefício para quem viaja leve e busca praticidade.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Transfer Econômico</h4>
          <ul>
            <li>Encontro no aeroporto</li>
            <li>Viagem direta para Gramado</li>
            <li>Entrega no endereço solicitado</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Aeroporto Salgado Filho",
        "Trajeto mais rápido",
        "Endereço em Gramado"
      ],
      horarios: [
        "Flexível conforme voo",
        "Disponível 24h"
      ],
      saidas: [
        "Aeroporto POA"
      ],
      informacoesImportantes: [
        "Carro compacto (até 3 passageiros)",
        "Bagagem: 1 mala grande + bagagem de mão",
        "Ar condicionado",
        "Motorista profissional",
        "Preço fixo (sem taxas adicionais)",
        "Pagamento no destino"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 24h antes:</strong>
            <span>Sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 6-24h antes:</strong>
            <span>Taxa de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 6h:</strong>
            <span>Taxa de 100%</span>
          </div>
        </div>
      `
    }
  ],
  
  jantares: [
    {
      id: 40,
      nome: "Jantar Temático Alemão",
      preco: 180.00,
      imagem: "/images/jantar-alemao.jpg",
      categoria: "jantares",
      duracao: "Aprox 3hs",
      inclui: ["Jantar completo", "Bebidas (cerveja e refrigerante)", "Espetáculo folclórico", "Transporte ida e volta"],
      avaliacao: 4.8,
      reviews: 145,
      descricao: "Uma verdadeira festa alemã no coração da Serra Gaúcha! Saboreie pratos típicos como joelho de porco e salsichas artesanais, acompanhados de cerveja gelada e show folclórico ao vivo. Experiência cultural inesquecível!",
      roteiro: `
        <div class="section-content">
          <h4>Programação do Jantar Alemão</h4>
          <ul>
            <li>19:00 - Busca nos hotéis (centro de Gramado)</li>
            <li>19:30 - Chegada ao restaurante temático</li>
            <li>20:00 - Início do jantar (buffet alemão)</li>
            <li>21:00 - Show folclórico alemão</li>
            <li>22:00 - Danças típicas (participação do público)</li>
            <li>22:30 - Retorno para os hotéis</li>
            <li>23:00 - Chegada nos hotéis</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Restaurante temático alemão",
        "Salão de festas decorado",
        "Palco para apresentações",
        "Área de buffet"
      ],
      horarios: [
        "Busca: 19:00h",
        "Jantar: 20:00h - 22:00h",
        "Retorno: 22:30h",
        "Terças, quintas e sábados"
      ],
      saidas: [
        "Hotéis centrais de Gramado",
        "Ponto central mediante agendamento"
      ],
      informacoesImportantes: [
        "Jantar em buffet (comida típica alemã)",
        "Bebidas inclusas: cerveja e refrigerante",
        "Show folclórico ao vivo",
        "Transporte ida e volta incluso",
        "Reserva com 24h de antecedência",
        "Traje casual",
        "Capacidade limitada"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 41,
      nome: "Jantar Italiano com Cantoria",
      preco: 165.00,
      imagem: "/images/jantar-italiano.jpg",
      categoria: "jantares",
      duracao: "Aprox 2.5hs",
      inclui: ["Massas artesanais", "Vinho da casa", "Apresentação musical", "Transporte"],
      avaliacao: 4.7,
      reviews: 112,
      descricao: "Sinta o sabor da Itália em Gramado! Massas frescas, molhos artesanais, vinho italiano e apresentação musical ao vivo. Um jantar romântico e acolhedor que transporta você direto para a Toscana.",
      roteiro: `
        <div class="section-content">
          <h4>Programação Jantar Italiano</h4>
          <ul>
            <li>19:30 - Busca nos hotéis</li>
            <li>20:00 - Chegada ao restaurante italiano</li>
            <li>20:15 - Aperitivo e vinho de boas-vindas</li>
            <li>20:45 - Jantar (entrada, massa principal, sobremesa)</li>
            <li>21:30 - Apresentação musical italiana</li>
            <li>22:15 - Retorno para os hotéis</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Restaurante italiano autêntico",
        "Ambiente romântico",
        "Área do show musical"
      ],
      horarios: [
        "Busca: 19:30h",
        "Jantar: 20:00h - 22:00h",
        "Dias: Segunda, Quarta, Sexta, Domingo"
      ],
      saidas: [
        "Hotéis centrais",
        "Ponto de encontro central"
      ],
      informacoesImportantes: [
        "Menu fixo italiano",
        "Vinho da casa incluso (1/2 garrafa por pessoa)",
        "Show musical ao vivo",
        "Ambiente familiar e romântico",
        "Reserva obrigatória",
        "Traje casual elegante"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 24h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 12-24h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 12h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 42,
      nome: "Jantar Gaúcho - Churrasco Premium",
      preco: 195.00,
      imagem: "/images/jantar-gaucho.jpg",
      categoria: "jantares",
      duracao: "Aprox 3hs",
      inclui: ["Churrasco completo", "Bebidas", "Show folclórico", "Transporte"],
      avaliacao: 4.9,
      reviews: 178,
      descricao: "Autêntica tradição gaúcha em um jantar espetacular! Corte de carnes nobres, acompanhamentos típicos e show de danças tradicionais. Uma celebração da cultura do Rio Grande do Sul que vai encantar todos os sentidos.",
      roteiro: `
        <div class="section-content">
          <h4>Programação Jantar Gaúcho</h4>
          <ul>
            <li>19:00 - Transporte dos hotéis</li>
            <li>19:30 - Chegada ao galpão crioulo</li>
            <li>20:00 - Início do churrasco (rodizio de carnes)</li>
            <li>21:00 - Show de danças gaúchas</li>
            <li>22:00 - Demonstrações de laço e tradições</li>
            <li>22:30 - Retorno para os hotéis</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Galpão crioulo tradicional",
        "Churrasqueira a lenha",
        "Palco para apresentações",
        "Área de jantar típica"
      ],
      horarios: [
        "Busca: 19:00h",
        "Jantar: 20:00h - 22:00h",
        "Quartas, sextas e sábados"
      ],
      saidas: [
        "Hotéis de Gramado e Canela",
        "Transporte incluso"
      ],
      informacoesImportantes: [
        "Rodizio de carnes gaúchas",
        "Saladão e acompanhamentos típicos",
        "Bebidas inclusas (refrigerante, cerveja, suco)",
        "Show folclórico completo",
        "Ambiente familiar",
        "Traje casual"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 43,
      nome: "Jantar Fonduê",
      preco: 145.00,
      imagem: "/images/jantar-fondue.jpg",
      categoria: "jantares",
      duracao: "Aprox 2hs",
      inclui: ["Fonduê completo", "Vinho", "Ambiente climatizado", "Transporte"],
      avaliacao: 4.6,
      reviews: 89,
      descricao: "Experiência gastronômica interativa e divertida! Fondue de queijo, carne e chocolate em ambiente climatizado com vinho harmonizado. Perfeito para casais, famílias e grupos de amigos que buscam uma refeição diferente e saborosa.",
      roteiro: `
        <div class="section-content">
          <h4>Programação Jantar Fonduê</h4>
          <ul>
            <li>20:00 - Busca nos hotéis</li>
            <li>20:30 - Chegada ao restaurante</li>
            <li>20:45 - Fonduê de queijo (entrada)</li>
            <li>21:15 - Fonduê de carne (principal)</li>
            <li>21:45 - Fonduê de chocolate (sobremesa)</li>
            <li>22:15 - Retorno para os hotéis</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Restaurante especializado em fonduê",
        "Mesas climatizadas",
        "Área de preparação"
      ],
      horarios: [
        "Busca: 20:00h",
        "Jantar: 20:30h - 22:00h",
        "Todos os dias"
      ],
      saidas: [
        "Hotéis centrais",
        "Ponto de encontro"
      ],
      informacoesImportantes: [
        "Fonduê completo (3 etapas)",
        "Vinho incluso (1/2 garrafa por pessoa)",
        "Ambiente climatizado",
        "Instruções de preparo fornecidas",
        "Reserva com antecedência",
        "Traje casual"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 24h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 12-24h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 12h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 44,
      nome: "Jantar Medieval",
      preco: 220.00,
      imagem: "/images/jantar-medieval.jpg",
      categoria: "jantares",
      duracao: "Aprox 2hs",
      inclui: ["Banquete medieval", "Espetáculo teatral", "Bebidas", "Transporte"],
      avaliacao: 4.8,
      reviews: 134,
      descricao: "Viaje no tempo para a Era Medieval! Banquete com pratos típicos da época, apresentação teatral com cavaleiros, reis e princesas. Uma experiência única e divertida para toda a família - prepare-se para uma noite épica!",
      roteiro: `
        <div class="section-content">
          <h4>Programação Jantar Medieval</h4>
          <ul>
            <li>19:00 - Transporte dos hotéis</li>
            <li>19:30 - Chegada ao castelo medieval</li>
            <li>20:00 - Início do banquete</li>
            <li>21:00 - Espetáculo teatral medieval</li>
            <li>22:00 - Interação com personagens</li>
            <li>22:30 - Retorno para os hotéis</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Castelo medieval temático",
        "Salão do banquete",
        "Arena para espetáculos",
        "Área de fotos com personagens"
      ],
      horarios: [
        "Busca: 19:00h",
        "Jantar: 20:00h - 22:00h",
        "Sextas e sábados"
      ],
      saidas: [
        "Hotéis de Gramado",
        "Transporte incluso"
      ],
      informacoesImportantes: [
        "Banquete com pratos medievais",
        "Espetáculo com cavaleiros e princesas",
        "Bebidas inclusas (hidromel, suco, refrigerante)",
        "Traje medieval opcional (disponível no local)",
        "Fotos com personagens incluídas",
        "Reserva obrigatória"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 7 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 3-7 dias antes:</strong>
            <span>Reembolso de 70%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 72h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    }
  ],
  
  ingressos: [
    {
      id: 50,
      nome: "Ingresso Mundo a Vapor",
      preco: 80.00,
      imagem: "/images/mundo-vapor.jpg",
      imagens: [
      "/images/mundo-vapor.jpg",
      "/images/tour-parques-2.jpg",
      "/images/mundo-vapor-3.png",
      "/images/mundo-vapor-4.jpg"
    ],
      categoria: "ingressos",
      duracao: "Aprox 2hs a 3hs",
      inclui: ["Ingresso", "Atrações interativas", "Demonstrações", "Guia interno"],
      avaliacao: 4.6,
      reviews: 98,
      descricao: "Mergulhe no fascinante mundo da energia a vapor! Exposições interativas, réplicas gigantes de máquinas a vapor e demonstrações impressionantes. Uma atração educativa e divertida que encanta crianças e adultos com a magia da física aplicada.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Mundo a Vapor</h4>
          <ul>
            <li>Entrada no parque temático</li>
            <li>Visita às máquinas a vapor em funcionamento</li>
            <li>Demonstrações interativas</li>
            <li>Área de experiências científicas</li>
            <li>Exposição de miniaturas</li>
            <li>Loja de souvenirs</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Máquinas a vapor gigantes",
        "Área de demonstrações",
        "Experiências científicas",
        "Exposição de miniaturas",
        "Cinema 4D",
        "Loja temática"
      ],
      horarios: [
        "Aberto: 09:00h - 17:30h",
        "Última entrada: 16:30h",
        "Funcionamento: todos os dias"
      ],
      saidas: [
        "Parque Mundo a Vapor - Canela",
        "Endereço: Rua Édipo Félix, 100 - Canela/RS"
      ],
      informacoesImportantes: [
        "Ingresso válido para o dia escolhido",
        "Atrações interativas para todas as idades",
        "Estacionamento gratuito",
        "Acessível para cadeirantes",
        "Banheiros no local",
        "Área de alimentação disponível",
        "Fotos permitidas"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 7 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 3-7 dias antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 72h:</strong>
            <span>Sem reembolso</span>
          </div>
          <div class="policy-item">
            <strong>Ingresso não utilizado:</strong>
            <span>Válido por 6 meses para reagendamento</span>
          </div>
        </div>
      `
    },
    {
      id: 51,
      nome: "Ingresso Mini Mundo",
      preco: 75.00,
      imagem: "/images/mini-mundo.jpg",
      imagens: [
      "/images/mini-mundo.jpg",
      "/images/mini-mundo-4.jpg",
      "/images/mini-mundo-2.webp",
      "/images/mini-mundo-3.jpeg"
    ],
      categoria: "ingressos",
      duracao: "Aprox 2hs",
      inclui: ["Ingresso", "Visita livre", "Mapa do parque", "Fotos"],
      avaliacao: 4.7,
      reviews: 156,
      descricao: "Encante-se com o parque das miniaturas mais famoso do Brasil! Cidades, monumentos e paisagens em escala reduzida com detalhes impressionantes. Uma viagem pelo mundo em miniatura que fascina todas as idades.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Mini Mundo</h4>
          <ul>
            <li>Entrada no parque</li>
            <li>Circuito de miniaturas (cidades brasileiras)</li>
            <li>Área internacional (monumentos mundiais)</li>
            <li>Exposição de trens em miniatura</li>
            <li>Área de descanso e fotos</li>
            <li>Loja de miniaturas</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Miniaturas de cidades brasileiras",
        "Monumentos internacionais",
        "Trens em miniatura",
        "Área de descanso",
        "Mirantes para fotos",
        "Loja de souvenirs"
      ],
      horarios: [
        "Aberto: 09:30h - 17:00h",
        "Entrada até: 16:00h",
        "Todos os dias"
      ],
      saidas: [
        "Mini Mundo - Gramado",
        "Endereço: Rua Horácio Cardoso, 291 - Gramado/RS"
      ],
      informacoesImportantes: [
        "Ingresso por pessoa",
        "Crianças até 5 anos não pagam",
        "Estacionamento pago no local",
        "Acesso para cadeirantes",
        "Tempo médio de visita: 2 horas",
        "Área coberta em caso de chuva",
        "Fotos permitidas em todas as áreas"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 3 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-72h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 52,
      nome: "Ingresso Harley Motor Show",
      preco: 65.00,
      imagem: "/images/harley show.jpg",
      imagens: [
      "/images/harley show.jpg",
      "/images/harley-show-3.jpg",
      "/images/harley-show-2.jpg",
      "/images/harley-show-4.jpg"
    ],
      categoria: "ingressos",
      duracao: "Aprox 1.5hs",
      inclui: ["Ingresso", "Exposição interativa", "Guia virtual", "Fotos"],
      avaliacao: 4.5,
      reviews: 87,
      descricao: "Para os apaixonados por motos e liberdade! Exposição das lendárias Harley-Davidson, história da marca e experiências interativas. Uma atração imperdível para motociclistas e admiradores do universo sobre duas rodas.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Harley Motor Show</h4>
          <ul>
            <li>Entrada no museu</li>
            <li>Exposição de Harley-Davidson históricas</li>
            <li>Área interativa com simuladores</li>
            <li>História da marca (vídeos e fotos)</li>
            <li>Área de fotos com motos</li>
            <li>Loja temática</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Exposição de motos Harley",
        "Área de simuladores",
        "Sala de história da marca",
        "Área de fotos",
        "Loja de produtos Harley"
      ],
      horarios: [
        "Aberto: 10:00h - 18:00h",
        "Última entrada: 17:00h",
        "Todos os dias"
      ],
      saidas: [
        "Harley Motor Show - Gramado",
        "Endereço: Av. das Hortênsias, 4111 - Gramado/RS"
      ],
      informacoesImportantes: [
        "Ingresso individual",
        "Simuladores disponíveis por ordem de chegada",
        "Fotos permitidas (sem flash)",
        "Acessível para cadeirantes",
        "Estacionamento gratuito",
        "Não é permitido tocar nas motos em exposição"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
    id: 53,
    nome: "Ingresso Snowland + Terra Mágica Florybal c/ Transporte",
    preco: 220.00,
    imagem: "/images/snowland-4.jpg",
    imagens: [
      "/images/snowland-3.jpg",
      "/images/florybal-3.jpeg",
      "/images/snowland-2.jpg",
      "/images/snowland-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 6hs",
    inclui: ["Ingressos para ambos", "Transporte entre parques", "Equipamentos básicos", "Seguro"],
    avaliacao: 4.8,
    
    reviews: 112,
    descricao: "Combo perfeito de aventura e diversão! Experiencie a neve no Snowland durante o dia e a magia da Terra Mágica Florybal à tarde. O pacote ideal para quem quer aproveitar ao máximo os parques mais emocionantes da região.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Combo Parques</h4>
        <ul>
          <li>09:00 - Saída para Snowland</li>
          <li>10:00 - 13:00: Snowland (neve e atrações)</li>
          <li>13:30 - Transporte para Terra Mágica Florybal</li>
          <li>14:00 - 17:00: Terra Mágica Florybal (atrações e diversão)</li>
          <li>17:30 - Retorno para Gramado</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Snowland (neve e atrações)",
      "Terra Mágica Florybal (atrações e diversão)",
      "Transporte entre parques"
    ],
    horarios: [
      "Saída: 09:00h",
      "Snowland: 10:00h - 13:00h",
      "Terra Mágica Florybal: 14:00h - 17:00h",
      "Retorno: 18:00h"
    ],
    saidas: [
      "Gramado Centro",
      "Transporte incluso no combo"
    ],
    "informacoesImportantes": [
      "Combo com dois ingressos",
      "Transporte entre parques incluso",
      "Equipamentos básicos fornecidos",
      "Seguro acidentes incluso",
      "Almoço não incluso",
      "Reserva com antecedência",
      "Vestimenta adequada para ambos"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
   },
    {
      id: 54,
      nome: "Ingresso Hollywood Dream Cars",
      preco: 70.00,
      imagem: "/images/dream-cars.jpg",
      imagens: [
      "/images/dream-cars.jpg",
      "/images/dream-cars-3.jpg",
      "/images/dream-cars-2.jpg",
      "/images/dream-cars-4.jpg"
    ],
      categoria: "ingressos",
      duracao: "Aprox 1.5hs",
      inclui: ["Ingresso", "Tour guiado", "Áudio-guia", "Fotos"],
      avaliacao: 4.6,
      reviews: 76,
      descricao: "Encontro com as lendas do cinema e da velocidade! Coleção de carros clássicos e modernos que estrelaram filmes de Hollywood. Uma atração obrigatória para cinéfilos e entusiastas de automóveis.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Dream Cars</h4>
          <ul>
            <li>Entrada no museu</li>
            <li>Exposição de carros de cinema</li>
            <li>Área de carros clássicos</li>
            <li>Carros futuristas e conceituais</li>
            <li>Área de fotos interativas</li>
            <li>Loja temática</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Carros de filmes de Hollywood",
        "Carros clássicos históricos",
        "Carros conceituais",
        "Área de fotos 360°",
        "Cinema sobre automóveis",
        "Loja de colecionáveis"
      ],
      horarios: [
        "Aberto: 10:00h - 19:00h",
        "Última entrada: 18:00h",
        "Todos os dias"
      ],
      saidas: [
        "Hollywood Dream Cars - Gramado",
        "Endereço: Av. das Hortênsias, 3500 - Gramado/RS"
      ],
      informacoesImportantes: [
        "Áudio-guia disponível (português/inglês)",
        "Fotos permitidas (sem flash)",
        "Acesso para cadeirantes",
        "Estacionamento gratuito",
        "Visita guiada em horários específicos",
        "Não tocar nos veículos"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 3 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-72h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },

    {
    id: 55,
    nome: "Ingresso Super Carros",
    preco: 85.00,
    imagem: "/images/super-carros.jpg",
    imagens: [
      "/images/super-carros.jpg",
      "/images/super-carros-3.jpg",
      "/images/super-carros-2.jpg",
      "/images/super-carros-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 2hs",
    inclui: ["Ingresso", "Exposição de supercarros", "Área interativa", "Fotos", "Guia virtual"],
    avaliacao: 4.8,
    reviews: 134,
    descricao: "Admire os carros mais rápidos e luxuosos do mundo! Exposição de supercarros esportivos, hipercarros e veículos de alto desempenho. Uma experiência imperdível para os amantes de velocidade e engenharia automotiva.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Super Carros</h4>
        <ul>
          <li>Entrada na exposição</li>
          <li>Área de supercarros esportivos</li>
          <li>Seção de hipercarros (Bugatti, Lamborghini, Ferrari)</li>
          <li>Simuladores de corrida</li>
          <li>Área de fotos com os carros</li>
          <li>Loja temática</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Supercarros esportivos",
      "Hipercarros exclusivos",
      "Simuladores de F1",
      "Área de realidade virtual",
      "Fotos profissionais",
      "Loja de colecionáveis"
    ],
    horarios: [
      "Aberto: 10:00h - 20:00h",
      "Última entrada: 19:00h",
      "Todos os dias"
    ],
    saidas: [
      "Super Carros - Gramado",
      "Endereço: Rua dos Super Carros, 500 - Gramado/RS"
    ],
    informacoesImportantes: [
      "Ingresso individual",
      "Simuladores disponíveis por tempo limitado",
      "Fotos permitidas (sem tocar nos veículos)",
      "Acesso para cadeirantes",
      "Estacionamento gratuito",
      "Visitas guiadas a cada hora"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 48h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-48h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 56,
    nome: "Ingresso Museu de Cera",
    preco: 60.00,
    imagem: "/images/museu-cera.jpg",
    imagens: [
      "/images/museu-cera.jpg",
      "/images/museu-cera-3.jpg",
      "/images/museu-cera-2.jpg",
      "/images/museu-cera-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 1.5hs",
    inclui: ["Ingresso", "Tour pelo museu", "Fotos com personalidades", "Áudio-guia"],
    avaliacao: 4.4,
    reviews: 89,
    descricao: "Encontre-se com as maiores celebridades do mundo! Figuras em cera incrivelmente realistas de artistas, esportistas, políticos e personalidades históricas. Uma experiência divertida e fotogênica para toda a família.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Museu de Cera</h4>
        <ul>
          <li>Entrada no museu</li>
          <li>Seção de celebridades internacionais</li>
          <li>Área de personalidades brasileiras</li>
          <li>Figuras históricas e políticas</li>
          <li>Estrelas do cinema e música</li>
          <li>Área de fotos interativas</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Celebridades internacionais",
      "Personalidades brasileiras",
      "Figuras históricas",
      "Estrelas do esporte",
      "Área de fotos 360°",
      "Loja de souvenirs"
    ],
    horarios: [
      "Aberto: 09:00h - 18:00h",
      "Última entrada: 17:00h",
      "Todos os dias"
    ],
    saidas: [
      "Museu de Cera - Gramado",
      "Endereço: Av. das Hortênsias, 2600 - Gramado/RS"
    ],
    informacoesImportantes: [
      "Fotos permitidas e estimuladas",
      "Não tocar nas figuras de cera",
      "Áudio-guia disponível",
      "Acesso para cadeirantes",
      "Estacionamento pago próximo",
      "Visitas guiadas disponíveis"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 3 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
      </div>
    `
  },
  {
    id: 57,
    nome: "Ingresso Roda Gigante de Gramado",
    preco: 45.00,
    imagem: "/images/roda-gigante-3.jpg",
    imagens: [
      "/images/roda-gigante-3.jpg",
      "/images/roda-gigante-2.jpg",
      "/images/roda-gigante.jpeg",
      "/images/roda-gigante-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 30min",
    inclui: ["1 volta na roda gigante", "Vista panorâmica", "Fotos", "Seguro"],
    avaliacao: 4.7,
    reviews: 203,
    descricao: "A maior roda gigante da região! Suba a 50 metros de altura e tenha uma vista panorâmica deslumbrante de Gramado e dos vales ao redor. Uma experiência romântica ao pôr do sol ou mágica à noite com as luzes da cidade.",
    roteiro: `
      <div class="section-content">
        <h4>Experiência Roda Gigante</h4>
        <ul>
          <li>Aquisição do ingresso</li>
          <li>Acesso à fila prioritária</li>
          <li>Subida na roda gigante (1 volta completa)</li>
          <li>Tempo para fotos no topo</li>
          <li>Descida e área de observação</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Roda gigante 50 metros",
      "Vista panorâmica de Gramado",
      "Mirante fotográfico",
      "Iluminação noturna especial"
    ],
    horarios: [
      "Funcionamento: 14:00h - 23:00h",
      "Melhor horário: pôr do sol (17:30-18:30)",
      "Todos os dias"
    ],
    saidas: [
      "Roda Gigante de Gramado",
      "Endereço: Lago Joaquina Rita Bier - Centro, Gramado/RS"
    ],
    informacoesImportantes: [
      "Ingresso por pessoa",
      "Crianças até 2 anos não pagam",
      "Segurança máxima (cabines fechadas)",
      "Acesso para cadeirantes",
      "Operação mesmo com chuva leve",
      "Fotos permitidas",
      "Não recomendado para quem tem vertigem"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 24h antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Reembolso de 50% (se não utilizado)</span>
        </div>
        <div class="policy-item">
          <strong>Em caso de mau tempo:</strong>
          <span>Reagendamento gratuito</span>
        </div>
      </div>
    `
  },
  {
    id: 58,
    nome: "Ingresso Parque Mundo Lugano",
    preco: 90.00,
    imagem: "/images/mundo-lugano.webp",
    imagens: [
      "/images/mundo-lugano.webp",
      "/images/mundo-lugano-3.jpg",
      "/images/mundo-lugano-2.webp",
      "/images/mundo-lugano-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 3-4hs",
    inclui: ["Ingresso", "Atrações do parque", "Mapa interativo", "Shows", "Área de jogos"],
    avaliacao: 4.6,
    reviews: 145,
    descricao: "Um parque temático incrível com atrações para todas as idades! Inspirado na Suíça, o Mundo Lugano oferece montanhas-russas, atrações aquáticas, shows ao vivo e uma vila suíça encantadora. Diversão garantida para a família toda.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Mundo Lugano</h4>
        <ul>
          <li>Entrada no parque temático</li>
          <li>Montanha-russa Alpina</li>
          <li>Atrações aquáticas (verão)</li>
          <li>Vila Suíça (lojas e restaurantes)</li>
          <li>Show ao vivo no anfiteatro</li>
          <li>Área de jogos e brinquedos</li>
          <li>Trenzinho pelo parque</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Montanha-russa Alpina",
      "Atrações aquáticas",
      "Vila Suíça temática",
      "Anfiteatro com shows",
      "Área de jogos infantis",
      "Trenzinho panorâmico",
      "Restaurantes temáticos"
    ],
    horarios: [
      "Aberto: 10:00h - 19:00h",
      "Atrações: 10:30h - 18:30h",
      "Shows: 14:00h e 17:00h",
      "Fechado às terças-feiras"
    ],
    saidas: [
      "Parque Mundo Lugano",
      "Endereço: Estrada do Caracol, 3500 - Canela/RS"
    ],
    informacoesImportantes: [
      "Ingresso dá acesso a todas as atrações",
      "Algumas atrações têm altura mínima",
      "Traje de banho para atrações aquáticas",
      "Estacionamento gratuito",
      "Acesso para cadeirantes",
      "Guarda-volumes disponível",
      "Área de alimentação no local"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 72h:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Em caso de chuva:</strong>
          <span>Reagendamento gratuito</span>
        </div>
      </div>
    `
  },
  {
    id: 59,
    nome: "Ingresso Alpen Park",
    preco: 120.00,
    imagem: "/images/alpen-park.jpg",
    imagens: [
      "/images/combo-parques.jpg",
      "/images/alpen-park.jpg",
      "/images/aventura.jpg",
      "/images/combo-parques.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 4hs",
    inclui: ["Ingresso", "3 atividades radicais", "Equipamentos", "Instrutor", "Seguro"],
    avaliacao: 4.9,
    reviews: 187,
    descricao: "Aventura radical nas alturas! O Alpen Park oferece atividades emocionantes como tirolesa, arvorismo, montanha-russa e bungee trampolim. Para os aventureiros que buscam adrenalina com segurança e vistas espetaculares.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Alpen Park</h4>
        <ul>
          <li>Check-in e briefing de segurança</li>
          <li>Tirolesa (maior da América Latina)</li>
          <li>Arvorismo (trilhas em diferentes níveis)</li>
          <li>Montanha-russa na montanha</li>
          <li>Bungee trampolim</li>
          <li>Área de descanso e fotos</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Tirolesa gigante",
      "Trilhas de arvorismo",
      "Montanha-russa alpina",
      "Bungee trampolim",
      "Mirante panorâmico",
      "Área de fotos"
    ],
    horarios: [
      "Aberto: 09:00h - 18:00h",
      "Última entrada: 16:00h",
      "Atividades até: 17:30h",
      "Todos os dias"
    ],
    saidas: [
      "Alpen Park - Gramado",
      "Endereço: Estrada Linha 28 de Setembro, 3085 - Gramado/RS"
    ],
    informacoesImportantes: [
      "Idade mínima: 7 anos",
      "Peso mínimo/máximo para algumas atrações",
      "Equipamentos de segurança fornecidos",
      "Roupas e calçados adequados",
      "Instrutores capacitados",
      "Seguro acidentes incluso",
      "Reservas recomendadas"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 48h-7 dias:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Reembolso de 30%</span>
        </div>
        <div class="policy-item">
          <strong>Mau tempo:</strong>
          <span>Reagendamento ou reembolso total</span>
        </div>
      </div>
    `
  },
  {
    id: 60,
    nome: "Ingresso Vale dos Dinossauros",
    preco: 55.00,
    imagem: "/images/vale-dinossauros.webp",
    imagens: [
      "/images/vale-dinossauros-1.jpg",
      "/images/vale-dinossauros-3.jpg",
      "/images/vale-dinossauros-2.jpeg",
      "/images/vale-dinossauros-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 2hs",
    inclui: ["Ingresso", "Trilha educativa", "Áudio-guia", "Área interativa", "Fotos"],
    avaliacao: 4.5,
    reviews: 92,
    descricao: "Viaje no tempo para a era dos dinossauros! Trilha educativa com réplicas em tamanho real dos maiores dinossauros, áreas interativas e exposição paleontológica. Uma aventura pré-histórica que encanta crianças e adultos.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Vale dos Dinossauros</h4>
        <ul>
          <li>Entrada no parque</li>
          <li>Trilha dos dinossauros (réplicas em tamanho real)</li>
          <li>Área de escavação paleontológica (interativa)</li>
          <li>Museu de fósseis</li>
          <li>Cinema 3D (sessões a cada hora)</li>
          <li>Loja temática de dinossauros</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Réplicas de dinossauros em tamanho real",
      "Área de escavação interativa",
      "Museu de fósseis",
      "Cinema 3D pré-histórico",
      "Trilha educativa",
      "Loja de souvenirs"
    ],
    horarios: [
      "Aberto: 09:30h - 17:30h",
      "Última entrada: 16:30h",
      "Sessões 3D: 10:00h, 12:00h, 14:00h, 16:00h",
      "Todos os dias"
    ],
    saidas: [
      "Vale dos Dinossauros - Canela",
      "Endereço: RS-466, Km 2 - Canela/RS"
    ],
    informacoesImportantes: [
      "Trilha ao ar livre (proteção solar recomendada)",
      "Apropriado para todas as idades",
      "Áudio-guia educativo",
      "Acesso para cadeirantes parcial",
      "Estacionamento gratuito",
      "Área de piquenique disponível",
      "Fotos permitidas em toda área"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 3 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Reembolso de 30%</span>
        </div>
        <div class="policy-item">
          <strong>Chuva forte:</strong>
          <span>Reagendamento gratuito</span>
        </div>
      </div>
    `
  },

   {
    id: 61,
    nome: "Ingresso Space Park NASA",
    preco: 95.00,
    imagem: "/images/space-park-nasa.jpg",
    imagens: [
      "/images/space-park-nasa-1.jpg",
      "/images/space-park-nasa-3.webp",
      "/images/space-park-nasa-2.jpg",
      "/images/space-park-nasa-4.png"
    ],
    categoria: "ingressos",
    duracao: "Aprox 3hs",
    inclui: ["Ingresso", "Simuladores espaciais", "Tour interativo", "Experiências científicas", "Áudio-guia"],
    avaliacao: 4.8,
    reviews: 178,
    descricao: "Explore o universo no único parque temático da NASA fora dos EUA! Simuladores de gravidade zero, missões espaciais interativas, réplicas de foguetes e estações espaciais. Uma jornada educativa e emocionante pelo cosmos.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Space Park NASA</h4>
        <ul>
          <li>Entrada no complexo espacial</li>
          <li>Simulador de lançamento de foguete</li>
          <li>Experiência de gravidade zero</li>
          <li>Tour pela réplica da Estação Espacial Internacional</li>
          <li>Missão Marte (simulador interativo)</li>
          <li>Planetário digital 360°</li>
          <li>Área de experimentos científicos</li>
          <li>Loja oficial NASA</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Simulador de lançamento",
      "Experiência de gravidade zero",
      "Réplica da ISS",
      "Missão Marte interativa",
      "Planetário digital",
      "Exposição de trajes espaciais",
      "Laboratório de experimentos",
      "Loja NASA"
    ],
    horarios: [
      "Aberto: 10:00h - 19:00h",
      "Última entrada: 17:30h",
      "Sessões planetário: 11:00h, 14:00h, 16:00h, 18:00h",
      "Todos os dias"
    ],
    saidas: [
      "Space Park NASA - Canela",
      "Endereço: Estrada do Caracol, 2800 - Canela/RS"
    ],
    informacoesImportantes: [
      "Idade mínima para simuladores: 8 anos",
      "Reserva de horários para experiências específicas",
      "Áudio-guia em português, inglês e espanhol",
      "Acesso completo para cadeirantes",
      "Estacionamento gratuito",
      "Altura mínima para algumas atrações: 1.20m",
      "Fotos permitidas (exceto no planetário)",
      "Recomendado reservar com antecedência"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 70%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h antes:</strong>
          <span>Reembolso de 50%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Sem reembolso</span>
        </div>
        <div class="policy-item">
          <strong>Para experiências reservadas:</strong>
          <span>Reagendamento gratuito até 48h antes</span>
        </div>
      </div>
    `
  },
  {
    id: 62,
    nome: "Ingresso NBA Park",
    preco: 250.00,
    imagem: "/images/nba-park-3.jpg",
    imagens: [
      "/images/nba-park-3.jpg",
      "/images/nba-park.jpeg",
      "/images/nba-park-2.jpg",
      "/images/nba-park-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 2.5hs",
    inclui: ["Ingresso", "Área de jogos", "Simuladores", "Competições", "Atividades interativas"],
    avaliacao: 4.7,
    reviews: 156,
    descricao: "Viva a emoção da NBA! Único parque temático oficial da NBA fora dos EUA. Quadras interativas, simuladores de arremesso, competições, área de vídeos 360° e encontro com lendas do basquete (holográficas). Perfeito para fãs de esportes.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro NBA Park</h4>
        <ul>
          <li>Entrada no parque temático</li>
          <li>Quadra principal (arremessos e jogos)</li>
          <li>Simulador de enterradas (slam dunk)</li>
          <li>Desafio de arremesso de 3 pontos</li>
          <li>Área de realidade virtual NBA</li>
          <li>Exposição de camisas e troféus</li>
          <li>Encontro holográfico com estrelas NBA</li>
          <li>Loja oficial NBA Store</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Quadra principal NBA",
      "Simulador de enterradas",
      "Desafio de 3 pontos",
      "Reality virtual NBA 360°",
      "Exposição histórica",
      "Hologramas de jogadores",
      "Área de competições",
      "NBA Store oficial"
    ],
    horarios: [
      "Aberto: 11:00h - 21:00h",
      "Última entrada: 20:00h",
      "Competições: 14:00h, 16:00h, 18:00h",
      "Todos os dias"
    ],
    saidas: [
      "NBA Park - Gramado",
      "Endereço: Av. das Hortênsias, 4500 - Gramado/RS"
    ],
    informacoesImportantes: [
      "Recomendado uso de tênis esportivo",
      "Atividades para todas as idades",
      "Competições com prêmios diários",
      "Fotos permitidas em todas as áreas",
      "Vestiários disponíveis",
      "Loja com produtos exclusivos",
      "Área de alimentação temática",
      "Acesso para cadeirantes"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 5 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 48h-5 dias:</strong>
          <span>Reembolso de 60%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 48h:</strong>
          <span>Reembolso de 30%</span>
        </div>
        <div class="policy-item">
          <strong>Ingresso não utilizado:</strong>
          <span>Válido para reagendamento em 30 dias</span>
        </div>
      </div>
    `
  },
  {
    id: 63,
    nome: "Ingresso Exceed Park",
    preco: 110.00,
    imagem: "/images/exceed-park.jpg",
    imagens: [
      "/images/exceed-park.jpg",
      "/images/exceed-park-3.jpeg",
      "/images/exceed-park-2.webp",
      "/images/sexceed-park-4.jpg"
    ],
    categoria: "ingressos",
    duracao: "Aprox 4hs",
    inclui: ["Ingresso", "Cartão de crédito para jogos", "3 atrações eletrônicas", "Simulador de F1", "Bônus de boas-vindas"],
    avaliacao: 4.6,
    reviews: 192,
    descricao: "O maior parque de jogos eletrônicos da região! Exceed Park oferece simuladores de F1 em movimento real, jogos de última geração, realidade virtual, kart elétrico e muito mais. Diversão garantida para gamers e famílias.",
    roteiro: `
      <div class="section-content">
        <h4>Roteiro Exceed Park</h4>
        <ul>
          <li>Check-in e recebimento do cartão de crédito</li>
          <li>Simulador de F1 (com movimento real)</li>
          <li>Área de realidade virtual premium</li>
          <li>Kart elétrico indoor</li>
          <li>Salão de jogos eletrônicos (100+ jogos)</li>
          <li>Bowling eletrônico</li>
          <li>Laser tag (opcional)</li>
          <li>Resgate de prêmios por pontos</li>
        </ul>
      </div>
    `,
    pontosVisita: [
      "Simulador F1 com movimento",
      "Realidade virtual premium",
      "Kart elétrico indoor",
      "Salão de jogos (100+ máquinas)",
      "Bowling eletrônico",
      "Laser tag arena",
      "Área de prêmios",
      "Food court gamer"
    ],
    horarios: [
      "Aberto: 12:00h - 23:00h",
      "Segunda a quinta: 12:00h - 22:00h",
      "Sexta e sábado: 12:00h - 00:00h",
      "Domingo: 12:00h - 21:00h"
    ],
    saidas: [
      "Exceed Park - Gramado",
      "Endereço: Rua dos Jogos, 1500 - Centro, Gramado/RS"
    ],
    informacoesImportantes: [
      "Cartão de crédito com R$50 incluído",
      "Pontos acumuláveis para prêmios",
      "Idade mínima para kart: 12 anos (1.50m)",
      "Reserva recomendada para simuladores",
      "Wi-Fi gratuito",
      "Área de alimentação no local",
      "Eventos especiais aos finais de semana",
      "Acesso para cadeirantes"
    ],
    politicasCancelamento: `
      <div class="cancellation-policy">
        <div class="policy-item">
          <strong>Cancelamento até 7 dias antes:</strong>
          <span>Reembolso de 100%</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 3-7 dias antes:</strong>
          <span>Reembolso de 80% (cartão não ativado)</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento entre 24-72h:</strong>
          <span>Reembolso de 50% (cartão não ativado)</span>
        </div>
        <div class="policy-item">
          <strong>Cancelamento com menos de 24h:</strong>
          <span>Reagendamento gratuito (válido 3 meses)</span>
        </div>
        <div class="policy-item">
          <strong>Cartão já ativado:</strong>
          <span>Sem reembolso, válido por 6 meses</span>
        </div>
      </div>
    `
  },
 
  ],
  
  natalLuz: [
    {
      id: 60,
      nome: "Pacote Natal Luz Completo",
      preco: 300.00,
      imagem: "/images/natal-luz.jpg",
      categoria: "natal-luz",
      duracao: "1 dia",
      inclui: ["Ingressos shows", "Tour luminoso", "Jantar temático", "Transporte", "Guia"],
      avaliacao: 4.9,
      reviews: 278,
      descricao: "Viva a magia do Natal o ano todo em Gramado! Pacote completo com os melhores espetáculos, tour pelas luzes encantadoras e jantar temático natalino. A experiência definitiva do Natal mais famoso do Brasil.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Natal Luz Completo</h4>
          <ul>
            <li>17:00 - Encontro no ponto central</li>
            <li>17:30 - Tour das luzes (principais pontos iluminados)</li>
            <li>19:00 - Espetáculo Natal Luz (Palácio dos Festivais)</li>
            <li>20:30 - Jantar natalino temático</li>
            <li>22:00 - Passeio noturno pelas decorações</li>
            <li>23:00 - Retorno para os hotéis</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Palácio dos Festivais",
        "Ruas iluminadas do centro",
        "Lago Negro decorado",
        "Praça Major Nicoletti",
        "Restaurante temático natalino",
        "Mirantes noturnos"
      ],
      horarios: [
        "Início: 17:00h",
        "Duração: 6 horas",
        "Período: Março a Janeiro",
        "Diariamente (exceto terças)"
      ],
      saidas: [
        "Ponto central de Gramado",
        "Transporte incluso"
      ],
      informacoesImportantes: [
        "Ingresso para espetáculo incluso",
        "Jantar temático natalino",
        "Guia especializado em Natal Luz",
        "Transporte durante todo o passeio",
        "Agasalho recomendado (noite fria)",
        "Reserva com antecedência obrigatória"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 15 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 7-15 dias antes:</strong>
            <span>Reembolso de 70%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 3-7 dias antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 72h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 61,
      nome: "Tour das Luzes - Natal Luz",
      preco: 120.00,
      imagem: "/images/tour-luzes.jpg",
      categoria: "natal-luz",
      duracao: "Aprox 3hs",
      inclui: ["Transporte", "Guia especializado", "Paradas fotográficas", "Água"],
      avaliacao: 4.8,
      reviews: 189,
      descricao: "Embarque em um passeio mágico pelas ruas iluminadas de Gramado! Conheça as decorações mais famosas, tire fotos incríveis e descubra histórias por trás das luzes que transformam a cidade em um verdadeiro conto de fadas.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Tour das Luzes</h4>
          <ul>
            <li>20:00 - Encontro no ponto central</li>
            <li>20:15 - Início do tour luminoso</li>
            <li>20:45 - Lago Negro iluminado</li>
            <li>21:15 - Centro histórico decorado</li>
            <li>21:45 - Rua Coberta e Palácio</li>
            <li>22:15 - Mirantes noturnos</li>
            <li>22:45 - Retorno ao ponto inicial</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Lago Negro iluminado",
        "Palácio dos Festivais",
        "Rua Coberta decorada",
        "Praça Major Nicoletti",
        "Mirantes noturnos",
        "Hotéis temáticos"
      ],
      horarios: [
        "Noturno: 20:00h",
        "Duração: 3 horas",
        "Todos os dias"
      ],
      saidas: [
        "Ponto central de Gramado",
        "Transporte incluso"
      ],
      informacoesImportantes: [
        "Guia especializado em decorações natalinas",
        "Paradas estratégicas para fotos",
        "Água mineral inclusa",
        "Agasalho necessário",
        "Câmera fotográfica recomendada",
        "Grupos pequenos (até 15 pessoas)"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 62,
      nome: "Espetáculo Natal Luz + Jantar",
      preco: 180.00,
      imagem: "/images/espetaculo-natal.jpg",
      categoria: "natal-luz",
      duracao: "Aprox 4hs",
      inclui: ["Ingresso espetáculo", "Jantar", "Transporte hotel", "Guia"],
      avaliacao: 4.7,
      reviews: 145,
      descricao: "Noite perfeita de magia natalina! Assista ao emocionante espetáculo oficial do Natal Luz e complete a experiência com um delicioso jantar temático. Tudo organizado para sua máxima comodidade e encantamento.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro Espetáculo + Jantar</h4>
          <ul>
            <li>18:30 - Busca no hotel</li>
            <li>19:00 - Jantar temático natalino</li>
            <li>20:30 - Espetáculo Natal Luz</li>
            <li>22:00 - Retorno para o hotel</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Restaurante temático",
        "Palácio dos Festivais",
        "Área do espetáculo"
      ],
      horarios: [
        "Busca: 18:30h",
        "Jantar: 19:00h",
        "Espetáculo: 20:30h",
        "Dias: conforme programação oficial"
      ],
      saidas: [
        "Hotéis de Gramado",
        "Transporte incluso"
      ],
      informacoesImportantes: [
        "Ingresso para espetáculo incluso",
        "Jantar temático completo",
        "Transporte ida e volta",
        "Lugar marcado no espetáculo",
        "Reserva com antecedência",
        "Traje casual"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 7 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 3-7 dias antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 72h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    },
    {
      id: 63,
      nome: "Natal Luz VIP - Experiência Premium",
      preco: 450.00,
      imagem: "/images/natal-vip.jpg",
      categoria: "natal-luz",
      duracao: "Aprox 5hs",
      inclui: ["Lugar VIP nos shows", "Jantar gourmet", "Brindes exclusivos", "Transporte privativo", "Guia VIP"],
      avaliacao: 5.0,
      reviews: 67,
      descricao: "Viva o Natal Luz como nunca antes! Experiência VIP com lugares privilegiados nos espetáculos, jantar gourmet em restaurante selecionado e brindes exclusivos. Para quem busca o máximo em conforto e exclusividade.",
      roteiro: `
        <div class="section-content">
          <h4>Roteiro VIP Natal Luz</h4>
          <ul>
            <li>18:00 - Busca privativa no hotel</li>
            <li>18:30 - Jantar gourmet em restaurante selecionado</li>
            <li>20:15 - Acesso VIP ao espetáculo (fila preferencial)</li>
            <li>20:30 - Espetáculo (lugares na primeira fila)</li>
            <li>22:00 - Tour VIP pelas luzes (acesso exclusivo)</li>
            <li>23:00 - Retorno privativo ao hotel</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Restaurante gourmet selecionado",
        "Palácio dos Festivais (área VIP)",
        "Pontos exclusivos de observação",
        "Áreas restritas decoradas"
      ],
      horarios: [
        "Início: 18:00h",
        "Duração: 5 horas",
        "Grupos pequenos (até 6 pessoas)"
      ],
      saidas: [
        "Hotel em Gramado",
        "Transporte privativo VIP"
      ],
      informacoesImportantes: [
        "Lugares na primeira fila do espetáculo",
        "Jantar gourmet com menu especial",
        "Brindes exclusivos do Natal Luz",
        "Guia VIP dedicado",
        "Transporte privativo de luxo",
        "Reserva com antecedência mínima"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 21 dias antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 14-21 dias antes:</strong>
            <span>Reembolso de 80%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 7-14 dias antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 7 dias:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    }
  ],
  
  transportePasseios: [
    {
      id: 70,
      nome: "Carro Executivo - Passeios Personalizados",
      preco: {
        "4 horas": 350.00,
        "8 horas": 600.00,
        "12 horas": 850.00
      },
      imagem: "/images/carro-executivo-passeios.jpg",
      categoria: "transporte-passeios",
      duracao: "Flexível",
      inclui: ["Motorista particular", "Combustível", "Estacionamentos", "Água mineral", "Wi-Fi"],
      avaliacao: 4.9,
      reviews: 134,
      descricao: "Liberdade total para explorar a Serra Gaúcha! Carro executivo com motorista particular para criar seu próprio roteiro. Visite os lugares que você escolher, no seu ritmo, com máximo conforto e privacidade.",
      roteiro: `
        <div class="section-content">
          <h4>Como funciona o transporte personalizado</h4>
          <ul>
            <li>Defina seu roteiro personalizado</li>
            <li>Motorista busca no local combinado</li>
            <li>Visite atrações no seu ritmo</li>
            <li>Paradas conforme sua preferência</li>
            <li>Retorno ao local de origem</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Atrações de sua escolha",
        "Restaurantes selecionados",
        "Pontos turísticos personalizados",
        "Compras em locais específicos"
      ],
      horarios: [
        "Flexível conforme contratação",
        "4h, 8h ou 12h de serviço",
        "Disponível 24h com reserva"
      ],
      saidas: [
        "Local de sua preferência em Gramado/Canela",
        "Flexível conforme necessidade"
      ],
      informacoesImportantes: [
        "Motorista profissional bilíngue",
        "Carro executivo com ar condicionado",
        "Wi-Fi gratuito durante o trajeto",
        "Água mineral inclusa",
        "Combustível e estacionamentos inclusos",
        "Roteiro totalmente personalizável",
        "Pagamento ao final do serviço"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Taxa de 30%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Taxa de 100%</span>
          </div>
        </div>
      `
    },
    {
      id: 71,
      nome: "Van Executiva - Grupos 12 pessoas",
      preco: {
        "4 horas": 480.00,
        "8 horas": 800.00,
        "12 horas": 1100.00
      },
      imagem: "/images/van-grupos.jpg",
      categoria: "transporte-passeios",
      duracao: "Flexível",
      inclui: ["Motorista", "Ar condicionado", "Espaço amplo", "Bagageiro", "Água"],
      avaliacao: 4.8,
      reviews: 89,
      descricao: "Solução perfeita para grupos grandes! Van executiva com capacidade para 12 pessoas, espaço para bagagens e ar condicionado. Viaje todos juntos com conforto e economia, criando memórias em grupo.",
      roteiro: `
        <div class="section-content">
          <h4>Funcionamento Van para Grupos</h4>
          <ul>
            <li>Busca do grupo no local combinado</li>
            <li>Transporte para atrações desejadas</li>
            <li>Espera durante as visitas</li>
            <li>Retorno ao ponto de origem</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Atrações escolhidas pelo grupo",
        "Restaurantes com capacidade para grupos",
        "Compras em locais apropriados"
      ],
      horarios: [
        "Flexível conforme necessidade do grupo",
        "Períodos de 4h, 8h ou 12h"
      ],
      saidas: [
        "Local combinado com o grupo",
        "Hotéis, pousadas ou endereço específico"
      ],
      informacoesImportantes: [
        "Capacidade: 12 passageiros + motorista",
        "Ar condicionado em todo veículo",
        "Espaço amplo para bagagens",
        "Água mineral inclusa",
        "Motorista experiente com grupos",
        "Ideal para famílias grandes"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 72h antes:</strong>
            <span>Sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-72h antes:</strong>
            <span>Taxa de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Taxa de 100%</span>
          </div>
        </div>
      `
    },
    {
      id: 72,
      nome: "Carro Spin - Econômico",
      preco: {
        "4 horas": 250.00,
        "8 horas": 400.00
      },
      imagem: "/images/carro-spin.jpg",
      categoria: "transporte-passeios",
      duracao: "Flexível",
      inclui: ["Motorista", "Ar condicionado", "Wi-Fi", "Água"],
      avaliacao: 4.6,
      reviews: 167,
      descricao: "Opção econômica e prática para pequenos grupos! Carro compacto com motorista, ideal para até 3 passageiros. Wi-Fi disponível e ar condicionado para seu conforto. Explore Gramado e região sem gastar muito.",
      roteiro: `
        <div class="section-content">
          <h4>Funcionamento Carro Econômico</h4>
          <ul>
            <li>Busca no local combinado</li>
            <li>Transporte para locais desejados</li>
            <li>Espera durante visitas rápidas</li>
            <li>Retorno ao ponto de origem</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Atrações centrais",
        "Restaurantes próximos",
        "Compras no centro"
      ],
      horarios: [
        "Períodos de 4h ou 8h",
        "Horário flexível"
      ],
      saidas: [
        "Local em Gramado",
        "Centro ou proximidades"
      ],
      informacoesImportantes: [
        "Capacidade: 3 passageiros",
        "Ar condicionado",
        "Wi-Fi disponível",
        "Água mineral inclusa",
        "Econômico e prático",
        "Ideal para casais ou pequenos grupos"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 24h antes:</strong>
            <span>Sem custo</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 12-24h antes:</strong>
            <span>Taxa de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 12h:</strong>
            <span>Taxa de 100%</span>
          </div>
        </div>
      `
    },
    {
      id: 73,
      nome: "Transfer Compartilhado - Passeios",
      preco: 95.00,
      imagem: "/images/compartilhado-passeios.jpg",
      categoria: "transporte-passeios",
      duracao: "Varia por passeio",
      inclui: ["Transporte coletivo", "Motorista/guia", "Pontos de encontro", "Seguro"],
      avaliacao: 4.5,
      reviews: 203,
      descricao: "Explore as atrações da região com outros viajantes! Transfer compartilhado para os principais passeios, com pontos de encontro convenientes. Economize enquanto conhece novas pessoas e vive experiências incríveis.",
      roteiro: `
        <div class="section-content">
          <h4>Funcionamento Compartilhado</h4>
          <ul>
            <li>Encontro no ponto designado</li>
            <li>Viagem compartilhada para atração</li>
            <li>Tempo livre na atração</li>
            <li>Retorno compartilhado</li>
          </ul>
        </div>
      `,
      pontosVisita: [
        "Principais atrações da região",
        "Pontos turísticos populares"
      ],
      horarios: [
        "Conforme programação de cada passeio",
        "Saídas em horários fixos"
      ],
      saidas: [
        "Pontos de encontro centrais em Gramado",
        "Locais definidos para cada passeio"
      ],
      informacoesImportantes: [
        "Transporte compartilhado com outros turistas",
        "Pontos de encontro pré-definidos",
        "Horários fixos de saída",
        "Economia no transporte",
        "Oportunidade de socializar",
        "Ideal para viajantes individuais"
      ],
      politicasCancelamento: `
        <div class="cancellation-policy">
          <div class="policy-item">
            <strong>Cancelamento até 48h antes:</strong>
            <span>Reembolso de 100%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento entre 24-48h antes:</strong>
            <span>Reembolso de 50%</span>
          </div>
          <div class="policy-item">
            <strong>Cancelamento com menos de 24h:</strong>
            <span>Sem reembolso</span>
          </div>
        </div>
      `
    }
  ]
};

export const todosProdutos = [
  ...produtos.passeios,
  ...produtos.vinicolas,
  ...produtos.transfers,
  ...produtos.jantares,
  ...produtos.ingressos,
  ...produtos.natalLuz,
  ...produtos.transportePasseios
];