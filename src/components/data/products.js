export const produtos = {
  passeios: [
    {
      id: 1,
      nome: "Tour pela Cidade de Gramado",
      descricao: "Passeio completo pelos principais pontos turísticos de Gramado",
      preco: 120.00,
      imagem: "/images/gramado-tour.jpg",
      categoria: "passeios",
      duracao: "4 horas",
      inclui: ["Guia turístico", "Transporte", "Ingressos para atrações"],
      avaliacao: 4.8,
      reviews: 156
    },
    {
      id: 2,
      nome: "Parque Snowland",
      descricao: "Primeiro parque de neve indoor da América Latina",
      preco: 180.00,
      imagem: "/images/snowland.jpg",
      categoria: "passeios",
      duracao: "6 horas",
      inclui: ["Ingresso", "Equipamentos", "Acompanhante"],
      avaliacao: 4.9,
      reviews: 230
    },
    {
      id: 3,
      nome: "Lago Negro",
      descricao: "Passeio pelo cartão postal mais famoso de Gramado",
      preco: 80.00,
      imagem: "/images/lago-negro.jpg",
      categoria: "passeios",
      duracao: "2 horas",
      inclui: ["Transporte", "Guia local"],
      avaliacao: 4.7,
      reviews: 189
    },
    {
      id: 4,
      nome: "Trem Maria Fumaça e Vale dos Vinhedos - Saída Coletiva",
      descricao: "Passeio combinado ao Vale dos Vinhedos com experiência no Trem Maria Fumaça",
      preco: 425.00,
      imagem: "/images/trem-vale-vinhedos.jpg",
      categoria: "passeios",
      duracao: "8 horas",
      inclui: ["Transporte coletivo", "Ingresso Trem Maria Fumaça", "Visita a vinícolas"],
      notas: "Menores de 6 anos não pagam",
      avaliacao: 4.8,
      reviews: 124
    },
    {
      id: 5,
      nome: "Olivas de Gramado",
      descricao: "Visita à Olivicultura com degustação de azeites e produtos coloniais",
      preco: {
        adulto: 259.00,
        senior: 189.00,
        jovem: 189.00
      },
      imagem: "/images/olivas-gramado.jpg",
      categoria: "passeios",
      duracao: "3 horas",
      inclui: ["Transporte", "Ingresso", "Degustação"],
      faixaEtaria: "Adultos 17-59: R$259 | 60+: R$189 | Jovens 12-16: R$189",
      avaliacao: 4.6,
      reviews: 87
    },
    {
      id: 6,
      nome: "Vale dos Vinhedos e Trem Maria Fumaça",
      descricao: "Tour premium ao Vale dos Vinhedos e Trem Maria Fumaça em transporte executivo",
      preco: {
        adulto: 599.00,
        crianca: 459.00
      },
      imagem: "/images/vale-vinhedos-executivo.jpg",
      categoria: "passeios",
      duracao: "9 horas",
      inclui: ["Carro executivo privativo", "Motorista", "Ingressos", "Degustações"],
      faixaEtaria: "Adultos: R$599 | Crianças 6-10: R$459 | Menores 6 não pagam",
      avaliacao: 4.9,
      reviews: 95
    },
    {
      id: 7,
      nome: "Vale dos Vinhedos Premium e Trem Maria Fumaça",
      descricao: "Experiência premium com vinícolas selecionadas e passeio de trem histórico",
      preco: {
        adulto: 589.00,
        jovem: 399.00
      },
      imagem: "/images/vale-vinhedos-premium.jpg",
      categoria: "passeios",
      duracao: "8 horas",
      inclui: ["Transporte executivo", "Degustações premium", "Ingresso trem", "Guia especializado"],
      faixaEtaria: "Adultos: R$589 | Jovens: R$399 | Crianças até 6 não pagam",
      avaliacao: 4.9,
      reviews: 78
    },
    {
      id: 8,
      nome: "Trem Maria Fumaça e Vinícola Casa Valduga",
      descricao: "Passeio cultural e enogastronômico combinando história e vinhos premiados",
      preco: {
        adulto: 799.00,
        crianca: 399.00
      },
      imagem: "/images/trem-valduga.jpg",
      categoria: "passeios",
      duracao: "7 horas",
      inclui: ["Transporte", "Ingresso trem", "Tour na Casa Valduga", "Degustação premium"],
      faixaEtaria: "Maiores 11 anos: R$799 | Crianças 6-10: R$399",
      avaliacao: 4.9,
      reviews: 112
    },
    {
      id: 9,
      nome: "Rota Romântica - Gramado e Canela",
      descricao: "Passeio pelos pontos mais charmosos das duas cidades",
      preco: 145.00,
      imagem: "/images/rota-romantica.jpg",
      categoria: "passeios",
      duracao: "5 horas",
      inclui: ["Transporte", "Guia", "Paradas estratégicas"],
      avaliacao: 4.7,
      reviews: 203
    },
    {
      id: 10,
      nome: "Cascata do Caracol",
      descricao: "Visita à majestosa cascata de 131 metros em Canela",
      preco: 110.00,
      imagem: "/images/caracol.jpg",
      categoria: "passeios",
      duracao: "3 horas",
      inclui: ["Transporte", "Ingresso", "Guia local"],
      avaliacao: 4.8,
      reviews: 267
    },
    {
      id: 11,
      nome: "Parque da Ferradura",
      descricao: "Mirante com vista panorâmica do cânion e cascatas",
      preco: 95.00,
      imagem: "/images/ferradura.jpg",
      categoria: "passeios",
      duracao: "3 horas",
      inclui: ["Transporte", "Ingresso", "Guia"],
      avaliacao: 4.6,
      reviews: 154
    },
    {
      id: 12,
      nome: "Alpen Park",
      descricao: "Parque de aventuras com tirolesa, montanha russa e arvorismo",
      preco: 160.00,
      imagem: "/images/alpen-park.jpg",
      categoria: "passeios",
      duracao: "4 horas",
      inclui: ["Transporte", "Ingresso", "Equipamentos"],
      avaliacao: 4.8,
      reviews: 189
    }
  ],
  
  vinicolas: [
    {
      id: 20,
      nome: "Rota das Vinícolas - Premium",
      descricao: "Tour por 3 vinícolas com degustação de vinhos premiados",
      preco: 250.00,
      imagem: "/images/vinicolas-tour.jpg",
      categoria: "vinicolas",
      duracao: "8 horas",
      inclui: ["Transporte", "Degustações", "Guia especializado"],
      avaliacao: 4.9,
      reviews: 189
    },
    {
      id: 21,
      nome: "Tour Vinícolas Premium - Privativo",
      descricao: "Passeio exclusivo às melhores vinícolas da região com degustação gourmet",
      preco: 350.00,
      imagem: "/images/vinicolas-privativo.jpg",
      categoria: "vinicolas",
      duracao: "6 horas",
      inclui: ["Veículo privativo", "Degustações selecionadas", "Confraternização"],
      avaliacao: 5.0,
      reviews: 67
    },
    {
      id: 22,
      nome: "Vale dos Vinhedos - Degustação Completa",
      descricao: "Imersão no mundo dos vinhos com visita a 4 vinícolas tradicionais",
      preco: 280.00,
      imagem: "/images/vale-vinhedos-completo.jpg",
      categoria: "vinicolas",
      duracao: "7 horas",
      inclui: ["Transporte", "4 degustações", "Almoço típico"],
      avaliacao: 4.8,
      reviews: 143
    },
    {
      id: 23,
      nome: "Casa Valduga Experience",
      descricao: "Visita exclusiva à tradicional Casa Valduga com degustação premium",
      preco: 195.00,
      imagem: "/images/casa-valduga.jpg",
      categoria: "vinicolas",
      duracao: "3 horas",
      inclui: ["Transporte", "Tour pela vinícola", "Degustação especial"],
      avaliacao: 4.9,
      reviews: 98
    }
  ],
  
  transfers: [
    {
      id: 30,
      nome: "Transfer Aeroporto - Gramado",
      descricao: "Transfer privativo do aeroporto para seu hotel em Gramado",
      preco: 150.00,
      imagem: "/images/transfer.jpg",
      categoria: "transfers",
      duracao: "1 hora",
      inclui: ["Veículo privativo", "Motorista", "Assistência"],
      avaliacao: 4.7,
      reviews: 312
    },
    {
      id: 31,
      nome: "Transfer Compartilhado - Aeroporto",
      descricao: "Transfer econômico compartilhado do aeroporto para Gramado/Canela",
      preco: 80.00,
      imagem: "/images/transfer-compartilhado.jpg",
      categoria: "transfers",
      duracao: "1-1.5 horas",
      inclui: ["Van compartilhada", "Motorista", "Paradas estratégicas"],
      avaliacao: 4.5,
      reviews: 189
    },
    {
      id: 32,
      nome: "Transfer Executivo - Carro Privativo",
      descricao: "Transfer em carro executivo com motorista particular",
      preco: 200.00,
      imagem: "/images/transfer-executivo.jpg",
      categoria: "transfers",
      duracao: "1 hora",
      inclui: ["Carro executivo", "Motorista bilíngue", "Água e snacks"],
      avaliacao: 4.9,
      reviews: 156
    },
    {
      id: 33,
      nome: "Transfer Van Executiva - Grupos",
      descricao: "Transfer em van executiva para grupos de até 12 pessoas",
      preco: 280.00,
      imagem: "/images/transfer-van.jpg",
      categoria: "transfers",
      duracao: "1 hora",
      inclui: ["Van executiva", "Motorista", "Espaço para bagagens"],
      avaliacao: 4.8,
      reviews: 94
    },
    {
      id: 34,
      nome: "Transfer Spin - Econômico",
      descricao: "Transfer econômico em carro compacto para até 4 passageiros",
      preco: 120.00,
      imagem: "/images/transfer-spin.jpg",
      categoria: "transfers",
      duracao: "1 hora",
      inclui: ["Carro compacto", "Motorista", "1 mala grande + bagagem de mão"],
      avaliacao: 4.6,
      reviews: 203
    }
  ],
  
  jantares: [
    {
      id: 40,
      nome: "Jantar Temático Alemão",
      descricao: "Jantar com música ao vivo e danças típicas alemãs",
      preco: 180.00,
      imagem: "/images/jantar-alemao.jpg",
      categoria: "jantares",
      duracao: "3 horas",
      inclui: ["Jantar completo", "Bebidas", "Espetáculo"],
      avaliacao: 4.8,
      reviews: 145
    },
    {
      id: 41,
      nome: "Jantar Italiano com Cantoria",
      descricao: "Jantar típico italiano com cantores líricos ao vivo",
      preco: 165.00,
      imagem: "/images/jantar-italiano.jpg",
      categoria: "jantares",
      duracao: "2.5 horas",
      inclui: ["Massas artesanais", "Vinho da casa", "Apresentação musical"],
      avaliacao: 4.7,
      reviews: 112
    },
    {
      id: 42,
      nome: "Jantar Gaúcho - Churrasco Premium",
      descricao: "Autêntico churrasco gaúcho com show de tradições",
      preco: 195.00,
      imagem: "/images/jantar-gaucho.jpg",
      categoria: "jantares",
      duracao: "3 horas",
      inclui: ["Churrasco completo", "Bebidas", "Show folclórico"],
      avaliacao: 4.9,
      reviews: 178
    },
    {
      id: 43,
      nome: "Jantar Fonduê",
      descricao: "Jantar romântico com fonduê de queijo e chocolate",
      preco: 145.00,
      imagem: "/images/jantar-fondue.jpg",
      categoria: "jantares",
      duracao: "2 horas",
      inclui: ["Fonduê completo", "Vinho", "Ambiente climatizado"],
      avaliacao: 4.6,
      reviews: 89
    },
    {
      id: 44,
      nome: "Jantar Medieval",
      descricao: "Experiência única em castelo com comidas típicas medievais",
      preco: 220.00,
      imagem: "/images/jantar-medieval.jpg",
      categoria: "jantares",
      duracao: "4 horas",
      inclui: ["Banquete medieval", "Espetáculo", "Bebidas"],
      avaliacao: 4.8,
      reviews: 134
    }
  ],
  
  ingressos: [
    {
      id: 50,
      nome: "Ingresso Mundo a Vapor",
      descricao: "Conheça o parque temático que mostra a força do vapor",
      preco: 80.00,
      imagem: "/images/mundo-vapor.jpg",
      categoria: "ingressos",
      duracao: "2-3 horas",
      inclui: ["Ingresso", "Atrações"],
      avaliacao: 4.6,
      reviews: 98
    },
    {
      id: 51,
      nome: "Ingresso Mini Mundo",
      descricao: "Maior parque em miniatura da América Latina em Gramado",
      preco: 75.00,
      imagem: "/images/mini-mundo.jpg",
      categoria: "ingressos",
      duracao: "2 horas",
      inclui: ["Ingresso", "Visita livre"],
      avaliacao: 4.7,
      reviews: 156
    },
    {
      id: 52,
      nome: "Ingresso Harley Motor Show",
      descricao: "Museu interativo com motos Harley Davidson",
      preco: 65.00,
      imagem: "/images/harley show.jpg",
      categoria: "ingressos",
      duracao: "1.5 horas",
      inclui: ["Ingresso", "Exposição interativa"],
      avaliacao: 4.5,
      reviews: 87
    },
    {
      id: 53,
      nome: "Ingresso Snowland + Alpen Park",
      descricao: "Combo dos dois parques de aventura",
      preco: 220.00,
      imagem: "/images/combo-parques.jpg",
      categoria: "ingressos",
      duracao: "6 horas",
      inclui: ["Ingressos para ambos", "Transporte entre parques"],
      avaliacao: 4.8,
      reviews: 112
    },
    {
      id: 54,
      nome: "Ingresso Hollywood Dream Cars",
      descricao: "Museu de carros clássicos do cinema",
      preco: 70.00,
      imagem: "/images/dream-cars.jpg",
      categoria: "ingressos",
      duracao: "1.5 horas",
      inclui: ["Ingresso", "Tour guiado"],
      avaliacao: 4.6,
      reviews: 76
    }
  ],
  
  natalLuz: [
    {
      id: 60,
      nome: "Pacote Natal Luz Completo",
      descricao: "Experiência completa do Natal Luz de Gramado",
      preco: 300.00,
      imagem: "/images/natal-luz.jpg",
      categoria: "natal-luz",
      duracao: "1 dia",
      inclui: ["Ingressos shows", "Tour luminoso", "Jantar temático"],
      avaliacao: 4.9,
      reviews: 278
    },
    {
      id: 61,
      nome: "Tour das Luzes - Natal Luz",
      descricao: "Passeio noturno para ver todas as decorações natalinas",
      preco: 120.00,
      imagem: "/images/tour-luzes.jpg",
      categoria: "natal-luz",
      duracao: "3 horas",
      inclui: ["Transporte", "Guia especializado", "Paradas fotográficas"],
      avaliacao: 4.8,
      reviews: 189
    },
    {
      id: 62,
      nome: "Espetáculo Natal Luz + Jantar",
      descricao: "Ingresso para o espetáculo oficial + jantar temático",
      preco: 180.00,
      imagem: "/images/espetaculo-natal.jpg",
      categoria: "natal-luz",
      duracao: "4 horas",
      inclui: ["Ingresso espetáculo", "Jantar", "Transporte hotel"],
      avaliacao: 4.7,
      reviews: 145
    },
    {
      id: 63,
      nome: "Natal Luz VIP - Experiência Premium",
      descricao: "Experiência exclusiva com lugares preferenciais e extras",
      preco: 450.00,
      imagem: "/images/natal-vip.jpg",
      categoria: "natal-luz",
      duracao: "5 horas",
      inclui: ["Lugar VIP nos shows", "Jantar gourmet", "Brindes exclusivos"],
      avaliacao: 5.0,
      reviews: 67
    }
  ],
  
  transportePasseios: [
    {
      id: 70,
      nome: "Carro Executivo - Passeios Personalizados",
      descricao: "Carro executivo com motorista para passeios personalizados",
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
      reviews: 134
    },
    {
      id: 71,
      nome: "Van Executiva - Grupos 12 pessoas",
      descricao: "Van executiva para grupos familiares ou de amigos",
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
      reviews: 89
    },
    {
      id: 72,
      nome: "Carro Spin - Econômico",
      descricao: "Carro compacto para passeios econômicos",
      preco: {
        "4 horas": 250.00,
        "8 horas": 400.00
      },
      imagem: "/images/carro-spin.jpg",
      categoria: "transporte-passeios",
      duracao: "Flexível",
      inclui: ["Motorista", "Ar condicionado", "Wi-Fi"],
      avaliacao: 4.6,
      reviews: 167
    },
    {
      id: 73,
      nome: "Transfer Compartilhado - Passeios",
      descricao: "Transporte compartilhado para passeios populares",
      preco: 95.00,
      imagem: "/images/compartilhado-passeios.jpg",
      categoria: "transporte-passeios",
      duracao: "Varia por passeio",
      inclui: ["Transporte coletivo", "Motorista/guia", "Pontos de encontro"],
      avaliacao: 4.5,
      reviews: 203
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