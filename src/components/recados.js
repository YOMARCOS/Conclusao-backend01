const recados = [
  // Recados para Maria (Brasil)
  {
    titulo: "Carnaval Brasileiro",
    descricao: "Descubra a energia contagiante e as cores vibrantes do Carnaval brasileiro.",
    idRecado: 1,
    idUser: 1
  },
  {
    titulo: "Feijoada Tradicional",
    descricao: "Experimente a feijoada, um prato icônico da culinária brasileira, composto por feijão-preto e carne.",
    idRecado: 2,
    idUser: 1
  },
  {
    titulo: "Samba e Ritmos Brasileiros",
    descricao: "Conheça os ritmos musicais envolventes do Brasil, como samba, bossa nova e forró.",
    idRecado: 3,
    idUser: 1
  },
  {
    titulo: "Futebol e Paixão",
    descricao: "Explore a paixão do Brasil pelo futebol, um esporte que une pessoas de todas as idades.",
    idRecado: 4,
    idUser: 1
  },
  {
    titulo: "Belezas Naturais",
    descricao: "Descubra as incríveis paisagens do Brasil, incluindo praias deslumbrantes e florestas tropicais.",
    idRecado: 5,
    idUser: 1
  },
  {
    titulo: "Arte e Cultura",
    descricao: "Explore a rica cena artística do Brasil, incluindo a arquitetura colonial e a arte indígena.",
    idRecado: 6,
    idUser: 1
  },
  {
    titulo: "Gastronomia Variada",
    descricao: "Aprecie a diversidade da culinária brasileira, com pratos regionais como acarajé, tapioca e moqueca.",
    idRecado: 7,
    idUser: 1
  },
  // Recados para Satoshi (Japão)
  {
    titulo: "Cerimônia do Chá",
    descricao: "Explore a cerimônia do chá japonesa, um ritual que envolve preparar e servir chá verde matcha.",
    idRecado: 1,
    idUser: 2
  },
  {
    titulo: "Origami",
    descricao: "Aprenda a dobrar papel de forma criativa, uma tradição japonesa que cria figuras diversas.",
    idRecado: 2,
    idUser: 2
  },
  {
    titulo: "Ikebana: A Arte dos Arranjos Florais",
    descricao: "Descubra a arte japonesa de arranjar flores de maneira equilibrada e esteticamente agradável.",
    idRecado: 3,
    idUser: 2
  },
  {
    titulo: "Artes Marciais e Disciplina",
    descricao: "Explore as artes marciais japonesas, como o judô e o karatê, que enfatizam a disciplina e a autodefesa.",
    idRecado: 4,
    idUser: 2
  },
  {
    titulo: "Tradições Festivas",
    descricao: "Conheça festivais tradicionais do Japão, como o Hanami (apreciação das flores de cerejeira) e Tanabata (Festival das Estrelas).",
    idRecado: 5,
    idUser: 2
  },
  {
    titulo: "Tecnologia e Inovação",
    descricao: "Explore a influência do Japão na tecnologia e inovação global, desde eletrônicos até robótica.",
    idRecado: 6,
    idUser: 2
  },
  {
    titulo: "Gastronomia Distinta",
    descricao: "Aprecie pratos japoneses renomados, como sushi, tempurá e ramen, que são uma celebração da harmonia entre sabor e apresentação.",
    idRecado: 7,
    idUser: 2
  },
  // Recados para Luis (México)
  {
    titulo: "Festivais Coloridos",
    descricao: "Descubra a alegria dos festivais mexicanos, como o Dia de los Muertos e o Carnaval.",
    idRecado: 1,
    idUser: 3
  },
  {
    titulo: "Gastronomia Apimentada",
    descricao: "Aprecie a rica culinária mexicana, famosa por pratos como tacos, guacamole e mole.",
    idRecado: 2,
    idUser: 3
  },
  {
    titulo: "Artesanato e Cores Vivas",
    descricao: "Explore o artesanato tradicional mexicano, como cerâmica, tecelagem e alebrijes.",
    idRecado: 3,
    idUser: 3
  },
  {
    titulo: "Música Mariachi",
    descricao: "Conheça a música mariachi, uma tradição musical que representa a cultura mexicana.",
    idRecado: 4,
    idUser: 3
  },
  {
    titulo: "Dança Folclórica",
    descricao: "Aprenda sobre a dança folclórica mexicana, como a dança dos vassouras e a jarabe tapatío.",
    idRecado: 5,
    idUser: 3
  },
  {
    titulo: "Sítios Arqueológicos",
    descricao: "Explore sítios arqueológicos impressionantes no México, como as pirâmides de Teotihuacán e Chichén Itzá.",
    idRecado: 6,
    idUser: 3
  },
  {
    titulo: "Costumes Coloridos",
    descricao: "No México, as pessoas frequentemente se cumprimentam com beijos no rosto e são conhecidas por suas roupas coloridas e alegres.",
    idRecado: 7,
    idUser: 3
  },
  // Recados para Elena (Rússia)
  {
    titulo: "Arquitetura Icônica",
    descricao: "Explore a rica arquitetura russa, incluindo a Catedral de São Basílio e o Palácio de Inverno.",
    idRecado: 1,
    idUser: 4
  },
  {
    titulo: "Dança Tradicional",
    descricao: "Aprenda sobre a elegante dança russa, como o balé clássico e a dança folclórica.",
    idRecado: 2,
    idUser: 4
  },
  {
    titulo: "Contos de Fadas Russos",
    descricao: "Descubra contos de fadas e lendas russas, que muitas vezes têm elementos mágicos e místicos.",
    idRecado: 3,
    idUser: 4
  },
  {
    titulo: "Vodca e Brindes",
    descricao: "Conheça a importância da vodca na cultura russa, frequentemente acompanhada por brindes calorosos.",
    idRecado: 4,
    idUser: 4
  },
  {
    titulo: "Invernos Rigorosos",
    descricao: "Saiba como os invernos frios da Rússia moldaram a vida cotidiana e as tradições do país.",
    idRecado: 5,
    idUser: 4
  },
  {
    titulo: "Gastronomia Russa",
    descricao: "Explore pratos russos como borsch, pelmeni e blini, que são apreciados em toda a nação.",
    idRecado: 6,
    idUser: 4
  },
  {
    titulo: "Tradições Religiosas",
    descricao: "Na Rússia, a Páscoa é uma celebração importante, marcada por práticas religiosas e ovos pintados à mão.",
    idRecado: 7,
    idUser: 4
  },
  // Recados para Léa (França)
  {
    titulo: "Gastronomia Francesa",
    descricao: "Explore a renomada culinária francesa, incluindo queijos, croissants e pratos refinados.",
    idRecado: 1,
    idUser: 5
  },
  {
    titulo: "Arte e Moda",
    descricao: "Descubra o papel influente da França na arte, moda e design global.",
    idRecado: 2,
    idUser: 5
  },
  {
    titulo: "Paisagens Encantadoras",
    descricao: "Aprecie as belas paisagens da França, incluindo campos de lavanda e castelos majestosos.",
    idRecado: 3,
    idUser: 5
  },
  {
    titulo: "Vida em Cafés",
    descricao: "Explore a tradição de passar o tempo em cafés charmosos, uma parte essencial da cultura francesa.",
    idRecado: 4,
    idUser: 5
  },
  {
    titulo: "Literatura e Filosofia",
    descricao: "Aprenda sobre os grandes escritores e filósofos franceses que moldaram o pensamento moderno.",
    idRecado: 5,
    idUser: 5
  },
  {
    titulo: "Vinho e Cultura Vinícola",
    descricao: "Conheça as regiões vinícolas da França e a apreciação do vinho como parte da cultura.",
    idRecado: 6,
    idUser: 5
  },
  {
    titulo: "Eventos Culturais",
    descricao: "Na França, eventos culturais como o Festival de Cannes e a Fête de la Musique são celebrações populares.",
    idRecado: 7,
    idUser: 5
  }
];

export default recados;
