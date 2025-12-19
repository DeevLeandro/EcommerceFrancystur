export const produtos = {
  passeios: [
    {
      id: 1,
      nome: "Tour pela Cidade de Gramado",
      preco: 120.00,
      imagem: "/images/gramado-tour.jpg",
      categoria: "passeios",
      duracao: "Aprox 4h",
      inclui: ["Guia turístico", "Transporte", "Ingressos para atrações"],
      avaliacao: 4.8,
      reviews: 156,
      descricao: "Descubra os encantos da Suíça brasileira em um tour completo pela charmosa Gramado! Visite as principais atrações, ruas pitorescas e pontos turísticos mais fotografados. Uma experiência perfeita para quem deseja conhecer a essência desta cidade mágica."
    },
    {
      id: 2,
      nome: "Parque Snowland",
      preco: 180.00,
      imagem: "/images/snowland.jpg",
      categoria: "passeios",
      duracao: "Aprox 6h",
      inclui: ["Ingresso", "Equipamentos", "Acompanhante"],
      avaliacao: 4.9,
      reviews: 230,
      descricao: "Viva a magia da neve no maior parque indoor da América Latina! Esquie, ande de trenó e divirta-se em atrações geladas durante o ano todo. Uma experiência invernal autêntica no coração do Brasil - perfeita para famílias e aventureiros!"
    },
    {
      id: 4,
      nome: "Trem Maria Fumaça e Vale dos Vinhedos - Saída Coletiva",
      preco: 425.00,
      imagem: "/images/trem-vale-vinhedos.jpg",
      categoria: "passeios",
      duracao: "Aprox 12h",
      inclui: ["Transporte coletivo", "Ingresso Trem Maria Fumaça", "Visita a vinícolas"],
      notas: "Menores de 6 anos não pagam",
      avaliacao: 4.8,
      reviews: 124,
      descricao: "Uma viagem no tempo a bordo do histórico Trem Maria Fumaça, seguida por uma experiência sensorial no Vale dos Vinhedos! Combine a nostalgia das locomotivas a vapor com a sofisticação dos vinhos premiados da região. Uma jornada única pela história e cultura gaúcha."
    },
    {
      id: 5,
      nome: "Olivas de Gramado",
      preco: {
        adulto: 259.00,
        senior: 189.00,
        jovem: 189.00
      },
      imagem: "/images/olivas-gramado.jpg",
      categoria: "passeios",
      duracao: "Aprox 3h",
      inclui: ["Transporte", "Ingresso", "Degustação"],
      faixaEtaria: "Adultos 17-59: R$259 | 60+: R$189 | Jovens 12-16: R$189",
      avaliacao: 4.6,
      reviews: 87,
      descricao: "Uma imersão gastronômica no universo das azeitonas e azeites! Conheça o processo artesanal de produção, aprenda sobre os diferentes tipos de azeite e participe de uma degustação exclusiva. Perfeito para foodies e amantes da culinária mediterrânea."
    },
    {
      id: 6,
      nome: "Vale dos Vinhedos e Trem Maria Fumaça",
      preco: {
        adulto: 599.00,
        crianca: 459.00
      },
      imagem: "/images/vale-vinhedos-executivo.jpg",
      categoria: "passeios",
      duracao: "Aprox 11h",
      inclui: ["Carro executivo privativo", "Motorista", "Ingressos", "Degustações"],
      faixaEtaria: "Adultos: R$599 | Crianças 6-10: R$459 | Menores 6 não pagam",
      avaliacao: 4.9,
      reviews: 95,
      descricao: "Experiência VIP que combina luxo, história e enologia! Viaje com exclusividade em carro executivo, reviva o romantismo do Trem Maria Fumaça e descubra os segredos do Vale dos Vinhedos. Degustações premium e atenção personalizada incluídas."
    },
    {
      id: 7,
      nome: "Vale dos Vinhedos Premium e Trem Maria Fumaça",
      preco: {
        adulto: 589.00,
        jovem: 399.00
      },
      imagem: "/images/vale-vinhedos-premium.jpg",
      categoria: "passeios",
      duracao: "Aprox 11h",
      inclui: ["Transporte executivo", "Degustações premium", "Ingresso trem", "Guia especializado"],
      faixaEtaria: "Adultos: R$589 | Jovens: R$399 | Crianças até 6 não pagam",
      avaliacao: 4.9,
      reviews: 78,
      descricao: "O mais completo roteiro enoturístico da região! Viaje no tempo no Trem Maria Fumaça e mergulhe na excelência dos vinhos premium do Vale dos Vinhedos. Degustações selecionadas, guia especializado e transporte confortável - tudo pensado para sua experiência perfeita."
    },
    {
      id: 8,
      nome: "Trem Maria Fumaça e Vinícola Casa Valduga",
      preco: {
        adulto: 799.00,
        crianca: 399.00
      },
      imagem: "/images/trem-valduga.jpg",
      categoria: "passeios",
      duracao: "Aprox 11h",
      inclui: ["Transporte", "Ingresso trem", "Tour na Casa Valduga", "Degustação premium"],
      faixaEtaria: "Maiores 11 anos: R$799 | Crianças 6-10: R$399",
      avaliacao: 4.9,
      reviews: 112,
      descricao: "Uma experiência íntima e exclusiva! Combine a viagem histórica no Trem Maria Fumaça com uma visita privativa à renomada Casa Valduga. Conheça os caves subterrâneos, aprenda com enólogos especializados e saboreie vinhos premiados em degustação reservada."
    },
    {
      id: 9,
      nome: "Rota Romântica - Gramado e Canela",
      preco: 145.00,
      imagem: "/images/rota-romantica.jpg",
      categoria: "passeios",
      duracao: "Aprox 5h",
      inclui: ["Transporte", "Guia", "Paradas estratégicas"],
      avaliacao: 4.7,
      reviews: 203,
      descricao: "Descubra os cenários mais românticos da Serra Gaúcha! Passeie por Gramado e Canela, visitando mirantes deslumbrantes, jardins encantados e pontos históricos. Perfeito para casais e quem busca belas paisagens e momentos inesquecíveis."
    },
    {
      id: 10,
      nome: "Cascata do Caracol",
      preco: 110.00,
      imagem: "/images/caracol.jpg",
      categoria: "passeios",
      duracao: "Aprox 3h",
      inclui: ["Transporte", "Ingresso", "Guia local"],
      avaliacao: 4.8,
      reviews: 267,
      descricao: "Testemunhe a majestosa Cascata do Caracol, uma das mais belas quedas d'água do Brasil! Caminhe por trilhas em meio à natureza exuberante, respire ar puro e capture fotos espetaculares. Uma conexão direta com a força e beleza da natureza serrana."
    },
    {
      id: 11,
      nome: "Parque da Ferradura",
      preco: 95.00,
      imagem: "/images/ferradura.jpg",
      categoria: "passeios",
      duracao: "Aprox 3h",
      inclui: ["Transporte", "Ingresso", "Guia"],
      avaliacao: 4.6,
      reviews: 154,
      descricao: "Aventure-se no Parque da Ferradura e descubra um dos mais belos cânions da região! Trilhas acessíveis, mirantes deslumbrantes e uma vista de tirar o fôlego da formação em formato de ferradura. Natureza pura para todas as idades."
    },
    {
      id: 12,
      nome: "Alpen Park",
      preco: 160.00,
      imagem: "/images/alpen-park.jpg",
      categoria: "passeios",
      duracao: "Aprox 4h",
      inclui: ["Transporte", "Ingresso", "Equipamentos"],
      avaliacao: 4.8,
      reviews: 189,
      descricao: "Adrenalina e diversão garantidas no Alpen Park! Desafie-se nas emocionantes tirolesas, explore trilhas de aventura e divirta-se em atrações radicais seguras. O parque perfeito para famílias aventureiras e amantes de esportes radicais."
    }
  ],
  
  vinicolas: [
    {
      id: 20,
      nome: "Rota das Vinícolas - Premium",
      preco: 250.00,
      imagem: "/images/vinicolas-tour.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 8h",
      inclui: ["Transporte", "Degustações", "Guia especializado"],
      avaliacao: 4.9,
      reviews: 189,
      descricao: "Um passeio sofisticado pelas melhores vinícolas da Serra Gaúcha! Degustação de vinhos premiados, visita a caves históricos e aprendizado sobre viticultura. Para quem busca conhecer a excelência dos vinhos brasileiros em um tour completo."
    },
    {
      id: 21,
      nome: "Tour Vinícolas Premium - Privativo",
      preco: 350.00,
      imagem: "/images/vinicolas-privativo.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 6h",
      inclui: ["Veículo privativo", "Degustações selecionadas", "Confraternização"],
      avaliacao: 5.0,
      reviews: 67,
      descricao: "Experiência exclusiva e personalizada para verdadeiros apreciadores de vinho! Tour privativo pelas vinícolas mais conceituadas, com degustações especiais e atenção dedicada. Ideal para casais, grupos pequenos ou celebrações especiais."
    },
    {
      id: 22,
      nome: "Vale dos Vinhedos - Degustação Completa",
      preco: 280.00,
      imagem: "/images/vale-vinhedos-completo.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 7h",
      inclui: ["Transporte", "4 degustações", "Almoço típico"],
      avaliacao: 4.8,
      reviews: 143,
      descricao: "Imersão total no universo dos vinhos! Percorra o famoso Vale dos Vinhedos, participe de degustações guiadas, aprenda sobre harmonização e saboreie um delicioso almoço típico da região. Uma jornada completa para os sentidos."
    },
    {
      id: 23,
      nome: "Casa Valduga Experience",
      preco: 195.00,
      imagem: "/images/casa-valduga.jpg",
      categoria: "vinicolas",
      duracao: "Aprox 3h",
      inclui: ["Transporte", "Tour pela vinícola", "Degustação especial"],
      avaliacao: 4.9,
      reviews: 98,
      descricao: "Conheça a tradição e excelência da Casa Valduga, uma das mais premiadas vinícolas do Brasil. Tour pelos caves, aprendizado sobre produção artesanal e degustação de vinhos exclusivos. Uma experiência memorável para amantes de enologia."
    }
  ],
  
  transfers: [
    {
      id: 30,
      nome: "Transfer Aeroporto - Gramado",
      preco: 150.00,
      imagem: "/images/transfer.jpg",
      categoria: "transfers",
      duracao: "Aprox 3h",
      inclui: ["Veículo privativo", "Motorista", "Assistência"],
      avaliacao: 4.7,
      reviews: 312,
      descricao: "Comece sua viagem com conforto e segurança! Transfer privativo do aeroporto até seu hotel em Gramado. Motorista profissional, veículo confortável e assistência personalizada. Chegue relaxado para curtir suas férias!"
    },
    {
      id: 31,
      nome: "Transfer Compartilhado - Aeroporto",
      preco: 80.00,
      imagem: "/images/transfer-compartilhado.jpg",
      categoria: "transfers",
      duracao: "Aprox 3h",
      inclui: ["Van compartilhada", "Motorista", "Paradas estratégicas"],
      avaliacao: 4.5,
      reviews: 189,
      descricao: "Transfer econômico e eficiente do aeroporto até Gramado. Viaje com outros turistas em uma van confortável, com paradas estratégicas nos principais hotéis. Opção inteligente para quem busca praticidade e bom custo-benefício."
    },
    {
      id: 32,
      nome: "Transfer Executivo - Carro Privativo",
      preco: 200.00,
      imagem: "/images/transfer-executivo.jpg",
      categoria: "transfers",
      duracao: "Aprox 3h",
      inclui: ["Carro executivo", "Motorista bilíngue", "Água e snacks"],
      avaliacao: 4.9,
      reviews: 156,
      descricao: "Transfer VIP com máximo conforto e sofisticação! Carro executivo com motorista bilíngue, água mineral, snacks e atendimento personalizado. Perfeito para executivos, casais em lua de mel ou quem busca uma experiência premium."
    },
    {
      id: 33,
      nome: "Transfer Van Executiva - Grupos",
      preco: 280.00,
      imagem: "/images/transfer-van.jpg",
      categoria: "transfers",
      duracao: "Aprox 2h",
      inclui: ["Van executiva", "Motorista", "Espaço para bagagens"],
      avaliacao: 4.8,
      reviews: 94,
      descricao: "Solução perfeita para grupos e famílias! Van executiva espaçosa, ideal para até 12 pessoas com bagagens. Conforto, praticidade e economia para viajar todos juntos. Motorista experiente e ar condicionado garantidos."
    },
    {
      id: 34,
      nome: "Transfer Spin - Econômico",
      preco: 120.00,
      imagem: "/images/transfer-spin.jpg",
      categoria: "transfers",
      duracao: "Aprox 2h",
      inclui: ["Carro compacto", "Motorista", "1 mala grande + bagagem de mão"],
      avaliacao: 4.6,
      reviews: 203,
      descricao: "Transfer econômico em carro compacto, ideal para até 3 passageiros. Prático, ágil e confortável para casais ou pequenos grupos. Melhor custo-benefício para quem viaja leve e busca praticidade."
    }
  ],
  
  jantares: [
    {
      id: 40,
      nome: "Jantar Temático Alemão",
      preco: 180.00,
      imagem: "/images/jantar-alemao.jpg",
      categoria: "jantares",
      duracao: "Aprox 3h",
      inclui: ["Jantar completo", "Bebidas", "Espetáculo"],
      avaliacao: 4.8,
      reviews: 145,
      descricao: "Uma verdadeira festa alemã no coração da Serra Gaúcha! Saboreie pratos típicos como joelho de porco e salsichas artesanais, acompanhados de cerveja gelada e show folclórico ao vivo. Experiência cultural inesquecível!"
    },
    {
      id: 41,
      nome: "Jantar Italiano com Cantoria",
      preco: 165.00,
      imagem: "/images/jantar-italiano.jpg",
      categoria: "jantares",
      duracao: "Aprox 2.5h",
      inclui: ["Massas artesanais", "Vinho da casa", "Apresentação musical"],
      avaliacao: 4.7,
      reviews: 112,
      descricao: "Sinta o sabor da Itália em Gramado! Massas frescas, molhos artesanais, vinho italiano e apresentação musical ao vivo. Um jantar romântico e acolhedor que transporta você direto para a Toscana."
    },
    {
      id: 42,
      nome: "Jantar Gaúcho - Churrasco Premium",
      preco: 195.00,
      imagem: "/images/jantar-gaucho.jpg",
      categoria: "jantares",
      duracao: "Aprox 3h",
      inclui: ["Churrasco completo", "Bebidas", "Show folclórico"],
      avaliacao: 4.9,
      reviews: 178,
      descricao: "Autêntica tradição gaúcha em um jantar espetacular! Corte de carnes nobres, acompanhamentos típicos e show de danças tradicionais. Uma celebração da cultura do Rio Grande do Sul que vai encantar todos os sentidos."
    },
    {
      id: 43,
      nome: "Jantar Fonduê",
      preco: 145.00,
      imagem: "/images/jantar-fondue.jpg",
      categoria: "jantares",
      duracao: "Aprox 2h",
      inclui: ["Fonduê completo", "Vinho", "Ambiente climatizado"],
      avaliacao: 4.6,
      reviews: 89,
      descricao: "Experiência gastronômica interativa e divertida! Fondue de queijo, carne e chocolate em ambiente climatizado com vinho harmonizado. Perfeito para casais, famílias e grupos de amigos que buscam uma refeição diferente e saborosa."
    },
    {
      id: 44,
      nome: "Jantar Medieval",
      preco: 220.00,
      imagem: "/images/jantar-medieval.jpg",
      categoria: "jantares",
      duracao: "Aprox 2h",
      inclui: ["Banquete medieval", "Espetáculo", "Bebidas"],
      avaliacao: 4.8,
      reviews: 134,
      descricao: "Viaje no tempo para a Era Medieval! Banquete com pratos típicos da época, apresentação teatral com cavaleiros, reis e princesas. Uma experiência única e divertida para toda a família - prepare-se para uma noite épica!"
    }
  ],
  
  ingressos: [
    {
      id: 50,
      nome: "Ingresso Mundo a Vapor",
      preco: 80.00,
      imagem: "/images/mundo-vapor.jpg",
      categoria: "ingressos",
      duracao: "Aprox 2h a 3h",
      inclui: ["Ingresso", "Atrações"],
      avaliacao: 4.6,
      reviews: 98,
      descricao: "Mergulhe no fascinante mundo da energia a vapor! Exposições interativas, réplicas gigantes de máquinas a vapor e demonstrações impressionantes. Uma atração educativa e divertida que encanta crianças e adultos com a magia da física aplicada."
    },
    {
      id: 51,
      nome: "Ingresso Mini Mundo",
      preco: 75.00,
      imagem: "/images/mini-mundo.jpg",
      categoria: "ingressos",
      duracao: "Aprox 2h",
      inclui: ["Ingresso", "Visita livre"],
      avaliacao: 4.7,
      reviews: 156,
      descricao: "Encante-se com o parque das miniaturas mais famoso do Brasil! Cidades, monumentos e paisagens em escala reduzida com detalhes impressionantes. Uma viagem pelo mundo em miniatura que fascina todas as idades."
    },
    {
      id: 52,
      nome: "Ingresso Harley Motor Show",
      preco: 65.00,
      imagem: "/images/harley show.jpg",
      categoria: "ingressos",
      duracao: "Aprox 1.5h",
      inclui: ["Ingresso", "Exposição interativa"],
      avaliacao: 4.5,
      reviews: 87,
      descricao: "Para os apaixonados por motos e liberdade! Exposição das lendárias Harley-Davidson, história da marca e experiências interativas. Uma atração imperdível para motociclistas e admiradores do universo sobre duas rodas."
    },
    {
      id: 53,
      nome: "Ingresso Snowland + Alpen Park",
      preco: 220.00,
      imagem: "/images/combo-parques.jpg",
      categoria: "ingressos",
      duracao: "Aprox 6h",
      inclui: ["Ingressos para ambos", "Transporte entre parques"],
      avaliacao: 4.8,
      reviews: 112,
      descricao: "Combo perfeito de aventura e diversão! Experiencie a neve no Snowland durante o dia e a adrenalina do Alpen Park à tarde. O pacote ideal para quem quer aproveitar ao máximo os parques mais emocionantes da região."
    },
    {
      id: 54,
      nome: "Ingresso Hollywood Dream Cars",
      preco: 70.00,
      imagem: "/images/dream-cars.jpg",
      categoria: "ingressos",
      duracao: "Aprox 1.5h",
      inclui: ["Ingresso", "Tour guiado"],
      avaliacao: 4.6,
      reviews: 76,
      descricao: "Encontro com as lendas do cinema e da velocidade! Coleção de carros clássicos e modernos que estrelaram filmes de Hollywood. Uma atração obrigatória para cinéfilos e entusiastas de automóveis."
    }
  ],
  
  natalLuz: [
    {
      id: 60,
      nome: "Pacote Natal Luz Completo",
      preco: 300.00,
      imagem: "/images/natal-luz.jpg",
      categoria: "natal-luz",
      duracao: "1 dia",
      inclui: ["Ingressos shows", "Tour luminoso", "Jantar temático"],
      avaliacao: 4.9,
      reviews: 278,
      descricao: "Viva a magia do Natal o ano todo em Gramado! Pacote completo com os melhores espetáculos, tour pelas luzes encantadoras e jantar temático natalino. A experiência definitiva do Natal mais famoso do Brasil."
    },
    {
      id: 61,
      nome: "Tour das Luzes - Natal Luz",
      preco: 120.00,
      imagem: "/images/tour-luzes.jpg",
      categoria: "natal-luz",
      duracao: "Aprox 3h",
      inclui: ["Transporte", "Guia especializado", "Paradas fotográficas"],
      avaliacao: 4.8,
      reviews: 189,
      descricao: "Embarque em um passeio mágico pelas ruas iluminadas de Gramado! Conheça as decorações mais famosas, tire fotos incríveis e descubra histórias por trás das luzes que transformam a cidade em um verdadeiro conto de fadas."
    },
    {
      id: 62,
      nome: "Espetáculo Natal Luz + Jantar",
      preco: 180.00,
      imagem: "/images/espetaculo-natal.jpg",
      categoria: "natal-luz",
      duracao: "Aprox 4h",
      inclui: ["Ingresso espetáculo", "Jantar", "Transporte hotel"],
      avaliacao: 4.7,
      reviews: 145,
      descricao: "Noite perfeita de magia natalina! Assista ao emocionante espetáculo oficial do Natal Luz e complete a experiência com um delicioso jantar temático. Tudo organizado para sua máxima comodidade e encantamento."
    },
    {
      id: 63,
      nome: "Natal Luz VIP - Experiência Premium",
      preco: 450.00,
      imagem: "/images/natal-vip.jpg",
      categoria: "natal-luz",
      duracao: "Aprox 5h",
      inclui: ["Lugar VIP nos shows", "Jantar gourmet", "Brindes exclusivos"],
      avaliacao: 5.0,
      reviews: 67,
      descricao: "Viva o Natal Luz como nunca antes! Experiência VIP com lugares privilegiados nos espetáculos, jantar gourmet em restaurante selecionado e brindes exclusivos. Para quem busca o máximo em conforto e exclusividade."
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
      inclui: ["Motorista particular", "Combustível", "Estacionamentos"],
      avaliacao: 4.9,
      reviews: 134,
      descricao: "Liberdade total para explorar a Serra Gaúcha! Carro executivo com motorista particular para criar seu próprio roteiro. Visite os lugares que você escolher, no seu ritmo, com máximo conforto e privacidade."
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
      inclui: ["Motorista", "Ar condicionado", "Espaço amplo"],
      avaliacao: 4.8,
      reviews: 89,
      descricao: "Solução perfeita para grupos grandes! Van executiva com capacidade para 12 pessoas, espaço para bagagens e ar condicionado. Viaje todos juntos com conforto e economia, criando memórias em grupo."
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
      inclui: ["Motorista", "Ar condicionado", "Wi-Fi"],
      avaliacao: 4.6,
      reviews: 167,
      descricao: "Opção econômica e prática para pequenos grupos! Carro compacto com motorista, ideal para até 3 passageiros. Wi-Fi disponível e ar condicionado para seu conforto. Explore Gramado e região sem gastar muito."
    },
    {
      id: 73,
      nome: "Transfer Compartilhado - Passeios",
      preco: 95.00,
      imagem: "/images/compartilhado-passeios.jpg",
      categoria: "transporte-passeios",
      duracao: "Varia por passeio",
      inclui: ["Transporte coletivo", "Motorista/guia", "Pontos de encontro"],
      avaliacao: 4.5,
      reviews: 203,
      descricao: "Explore as atrações da região com outros viajantes! Transfer compartilhado para os principais passeios, com pontos de encontro convenientes. Economize enquanto conhece novas pessoas e vive experiências incríveis."
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