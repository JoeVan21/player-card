import { html } from 'lit';
import '../src/player-card.js';

export default {
  title: 'PlayerCard',
  component: 'player-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <player-card
      style="--player-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </player-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
