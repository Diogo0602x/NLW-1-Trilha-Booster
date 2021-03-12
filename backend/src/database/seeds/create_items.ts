import Knex from 'knex';

export async function seed(Knex: Knex) {
  await Knex('items').insert([
    { title: 'Lâmpadas', image: 'lampadas.svg' },
    { title: 'Pilha e Baterias', image: 'baterias.svg' },
    { title: 'Papéis e papelão', image: 'papeis-papelao.svg' },
    { title: 'Resíduos Eletronicos', image: 'eletronicos.svg' },
    { title: 'Resíduos Organicos', image: 'organicos.svg' },
    { title: 'Óleo de Cozinha', image: 'oleo.svg' },
  ]);
}