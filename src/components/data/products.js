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
      reviews: 156
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
      reviews: 230
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
      reviews: 124
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
      reviews: 87
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
      reviews: 95
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
      reviews: 78
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
      reviews: 112
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
      reviews: 203
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
      reviews: 267
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
      reviews: 154
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
      reviews: 189
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
      reviews: 189
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
      reviews: 67
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
      reviews: 143
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
      reviews: 98
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
      reviews: 312
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
      reviews: 189
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
      reviews: 156
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
      reviews: 94
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
      reviews: 203
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
      reviews: 145
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
      reviews: 112
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
      reviews: 178
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
      reviews: 89
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
      reviews: 134
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
      reviews: 98
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
      reviews: 156
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
      reviews: 87
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
      reviews: 112
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
      reviews: 76
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
      reviews: 278
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
      reviews: 189
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
      reviews: 145
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
      reviews: 67
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
      reviews: 134
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
      reviews: 89
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
      reviews: 167
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