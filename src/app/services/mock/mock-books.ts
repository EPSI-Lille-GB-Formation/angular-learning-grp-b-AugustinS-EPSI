import { Book } from "../Entity/book";

export const BOOKS: Book[] = [
  {
    id: 1,
    title: 'Harry Potter à l\'école des sorciers',
    resume: 'Premier tome de la série Harry Potter, écrit par J.K. Rowling...',
    image: 'chemin/vers/image-harry-potter-a-l-ecole-des-sorciers.jpg',
    createdAt: new Date('2024-01-01T00:00:00Z'),
    updatedAt: new Date('2024-01-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 2,
    title: 'Le Seigneur des anneaux : La Communauté de l\'Anneau',
    resume: 'Premier tome de la trilogie Le Seigneur des anneaux, écrit par J.R.R. Tolkien...',
    image: 'chemin/vers/image-le-seigneur-des-anneaux-la-communaute-de-l-anneau.jpg',
    createdAt: new Date('2024-02-01T00:00:00Z'),
    updatedAt: new Date('2024-02-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 3,
    title: 'La Constitution des États-Unis',
    resume: 'Document fondateur des États-Unis...',
    image: 'chemin/vers/image-constitution-des-etats-unis.jpg',
    createdAt: new Date('2024-03-01T00:00:00Z'),
    updatedAt: new Date('2024-03-01T00:00:00Z'),
    categoryId: 2,
    authorId: 2,
  },
  {
    id: 4,
    title: 'L\'Encyclopédie',
    resume: 'Encyclopédie française du XVIIIe siècle...',
    image: 'chemin/vers/image-encyclopedie.jpg',
    createdAt: new Date('2024-04-01T00:00:00Z'),
    updatedAt: new Date('2024-04-01T00:00:00Z'),
    categoryId: 3,
    authorId: 1,
  },
  {
    id: 5,
    title: 'Le Guide du voyageur galactique',
    resume: 'Premier tome de la série de science-fiction écrite par Douglas Adams...',
    image: 'chemin/vers/image-le-guide-du-voyageur-galactique.jpg',
    createdAt: new Date('2024-05-01T00:00:00Z'),
    updatedAt: new Date('2024-05-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 6,
    title: 'Le Grand Larousse illustré',
    resume: 'Encyclopédie française contemporaine...',
    image: 'chemin/vers/image-le-grand-larousse-illustre.jpg',
    createdAt: new Date('2024-06-01T00:00:00Z'),
    updatedAt: new Date('2024-06-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 7,
    title: 'La Déclaration des droits de l\'homme et du citoyen',
    resume: 'Document fondateur de la Révolution française...',
    image: 'chemin/vers/image-declaration-des-droits-de-l-homme-et-du-citoyen.jpg',
    createdAt: new Date('2024-07-01T00:00:00Z'),
    updatedAt: new Date('2024-07-01T00:00:00Z'),
    categoryId: 4,
    authorId: 2,
  },
  {
    id: 8,
    title: 'Le Petit Larousse illustré',
    resume: 'Dictionnaire français contemporain...',
    image: 'chemin/vers/image-le-petit-larousse-illustre.jpg',
    createdAt: new Date('2024-08-01T00:00:00Z'),
    updatedAt: new Date('2024-08-01T00:00:00Z'),
    categoryId: 5,
    authorId: 1,
  },
  {
    id: 9,
    title: 'Le Manifeste du parti communiste',
    resume: 'Ouvrage politique écrit par Karl Marx et Friedrich Engels...',
    image: 'chemin/vers/image-manifeste-du-parti-communiste.jpg',
    createdAt: new Date('2024-09-01T00:00:00Z'),
    updatedAt: new Date('2024-09-01T00:00:00Z'),
    categoryId: 5,
    authorId: 2,
  },
  {
    id: 10,
    title: 'La Bible',
    resume: 'Texte religieux fondamental du christianisme...',
    image: 'chemin/vers/image-la-bible.jpg',
    createdAt: new Date('2024-10-01T00:00:00Z'),
    updatedAt: new Date('2024-10-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 11,
    title: 'Le Diagnostic and Statistical Manual of Mental Disorders',
    resume: 'Ouvrage de référence pour les professionnels de la santé mentale...',
    image: 'chemin/vers/image-diagnostic-and-statistical-manual-of-mental-disorders.jpg',
    createdAt: new Date('2024-11-01T00:00:00Z'),
    updatedAt: new Date('2024-11-01T00:00:00Z'),
    categoryId: 6,
    authorId: 2,
  },
  {
    id: 12,
    title: 'Les Aventures de Tintin : Le Lotus bleu',
    resume: 'Album de bande dessinée de la série Les Aventures de Tintin...',
    image: 'chemin/vers/image-les-aventures-de-tintin-le-lotus-bleu.jpg',
    createdAt: new Date('2024-12-01T00:00:00Z'),
    updatedAt: new Date('2024-12-01T00:00:00Z'),
    categoryId: 1,
    authorId: 1,
  },
  {
    id: 13,
    title: 'Encyclopædia Britannica',
    resume: 'Encyclopédie anglophone de référence...',
    image: 'chemin/vers/image-encyclopaedia-britannica.jpg',
    createdAt: new Date('2025-01-01T00:00:00Z'),
    updatedAt: new Date('2025-01-01T00:00:00Z'),
    categoryId: 1,
    authorId: 2,
  },
  {
    id: 14,
    title: 'Atlas mondial',
    resume: 'Ouvrage cartographique présentant des cartes géographiques du monde entier...',
    image: 'chemin/vers/image-atlas-mondial.jpg',
    createdAt: new Date('2025-02-01T00:00:00Z'),
    updatedAt: new Date('2025-02-01T00:00:00Z'),
    categoryId: 5,
    authorId: 2,
  },
  {
    id: 15,
    title: 'Encyclopédie médicale Larousse',
    resume: 'Ouvrage de référence sur la médecine et les sciences médicales...',
    image: 'chemin/vers/image-encyclopedie-medicale-larousse.jpg',
    createdAt: new Date('2025-03-01T00:00:00Z'),
    updatedAt: new Date('2025-03-01T00:00:00Z'),
    categoryId: 5,
    authorId: 2,
  }
];