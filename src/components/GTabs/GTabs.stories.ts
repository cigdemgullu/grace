// @ts-nocheck
import { storiesOf } from '@storybook/vue';
import { withKnobs, object, text, boolean } from '@storybook/addon-knobs';
import GTabs from './GTabs.vue';
import GBox from '../GBox/GBox.vue';

const stories = storiesOf('GTabs', module);
stories.addDecorator(withKnobs);

stories
  .addParameters({ component: GTabs })
  .add('base', () => ({
    components: { GTabs, GBox },
    props: {
      tabs: {
        default: object('Tabs', [{
          type: 'all',
          label: 'tümü',
          totalElements: 12,
        }, {
          type: 'academy',
          label: 'akademi',
          totalElements: 486,
        }]),
      },
      type: {
        default: text('Type', 'all'),
      },
      showCount: {
        default: boolean('Show Count', false),
      },
    },
    methods: {
      handleTabClick (type) {
        this.type = type;
      },
    },
    template: `
      <GBox class="g-p-10 g-bg-bg-grey-100">
        <GTabs
          :tabs="tabs"
          :type="type"
          :showCount="showCount"
          @handleTabClick="handleTabClick"
        />
      </GBox>`,
  }))
  .add('new tab', () => ({
    components: { GTabs, GBox },
    props: {
      tabs: {
        default: object('Tabs', [{
          type: 'all',
          label: 'tümü',
        }, {
          type: 'academy',
          label: 'akademi',
          isNew:{
            color: 'white',
            text: 'YENİ',
            bgColor: 'red-500',
          }
        }]),
      },
      type: {
        default: text('Type', 'all'),
      },
      showCount: {
        default: boolean('Show Count', false),
      },
    },
    methods: {
      handleTabClick (type) {
        this.type = type;
      },
    },
    template: `
      <GBox class="g-p-10 g-bg-bg-grey-100">
      <GTabs
        :tabs="tabs"
        :type="type"
        :showCount="showCount"
        @handleTabClick="handleTabClick"
      />
      </GBox>`,
  }))
  .add('fluid', () => ({
    components: { GTabs },
    props: {
      tabs: {
        default: object('Tabs', [{
          type: 'all',
          label: 'tümü',
          totalElements: 11231232,
        }, {
          type: 'academy',
          label: 'akademi',
          totalElements: 0,
          tooltipText: 'selam',
        }]),
      },
      type: {
        default: text('Type', 'all'),
      },
      showCount: {
        default: boolean('Show Count', true),
      },
      fluid: {
        default: boolean('Fluid', true),
      },
    },
    methods: {
      handleTabClick (type) {
        this.type = type;
      },
    },
    template: `
      <GTabs
        :fluid="fluid"
        :tabs="tabs"
        :type="type"
        :showCount="showCount"
        @handleTabClick="handleTabClick"
      >
      <template slot="totalElementText">SORU</template>
</GTabs>`,
  }));
