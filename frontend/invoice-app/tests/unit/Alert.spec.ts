import { shallowMount } from '@vue/test-utils';
import Alert from '@/components/Alert.vue';

describe('Alert.vue', () => {
  it('renders and dismissies itself', (done) => {
    const message = 'new message';
    const id = 1;
    const timeout = 10;
    let fromCb: number;
    const wrapper = shallowMount(Alert, {
      propsData: { message, id, timeout },
    });

    wrapper.vm.$on('done', (cbId: number) => {
      fromCb = cbId;
    });

    setTimeout(() => {
      expect(fromCb).toEqual(1);
      done();
    }, timeout);
  });
});
