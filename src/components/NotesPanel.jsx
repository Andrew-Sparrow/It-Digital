import React from 'react';
import styled from 'styled-components';
// import { StyledNoteItem } from './NoteItem';
import { NoteItem } from './NoteItem';


const StyledNotesPanel = styled.section`
  background-color: #5e6569;

  min-height: 300px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }

  @media ${ props => props.theme.media.desktop } {
    width: 400px;
  }

  @media ${ props => props.theme.media.tablet } {
    width: 100%;
  }

  @media ${ props => props.theme.media.phone } {
    width: 100%;
  }
`;

const notes = [
  {
    id: 1,
    title: 'Maxime voluptate excepturi architecto suscipit possimus ut dolorem fugit beatae.',
    time: 'Wed Nov 23 2022 07:49:10 GMT+0500',
    text: 'Accusantium non tenetur delectus. Quo perferendis et modi. Omnis sit aut voluptatem voluptatem nihil.'
  },
  {
    id: 2,
    title: 'Quia saepe sed at nemo fugit officia minima.',
    time: 'Mon Apr 17 2023 12:01:28 GMT+0500',
    text: 'Facere ut nulla quia fuga praesentium eaque accusantium qui. Aliquid magnam corporis consectetur reprehenderit modi qui. Corporis autem autem voluptates. Illo sed odit dolor accusantium repudiandae quis. Quia tenetur veniam qui possimus deleniti quis dolor aut unde. Aliquid rerum maiores natus perferendis. Exercitationem id architecto et sit ea assumenda natus cumque. Mollitia minima enim quo ratione qui eaque. Repellat aut repellat quia et et consequatur occaecati consequuntur iure. Vel officiis dolor possimus nobis. Et minima beatae iusto. Et sit rerum nulla eos eligendi voluptatem dolorum quia. Voluptatem aliquam inventore hic consectetur non et debitis eaque et. Quisquam et magni. Doloribus ut eos non et magni corrupti consequatur velit dicta.'
  },
];


const NotesPanel = (props) => {
  return (
    <StyledNotesPanel {...props}>{
      notes.map((item) => <NoteItem {...item} key={item.id} />)
    }</StyledNotesPanel>
  )
};

export { NotesPanel };
