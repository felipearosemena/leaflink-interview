import { shallowMount, mount } from '@vue/test-utils';
import Autocomplete from '@/components/Autocomplete.vue';

describe('Autocomplete.vue', () => {
  it('renders with props', () => {
    const props = {
      value: 'value',
      id: 1,
      options: [1, 2, 3],
    };
    const wrapper = shallowMount(Autocomplete, {
      propsData: props,
    });
  });

  it('calls change from both input and options', (done) => {
    let changeVal;
    const fn = jest.fn((value: string) => {
      changeVal = value;
    });
    const props = {
      value: 'value',
      id: 1,
    };
    const wrapper = shallowMount(Autocomplete, {
      propsData: props,
    });
    wrapper.vm.$on('change', fn);

    wrapper.find('input').setValue('value-2');
    wrapper.find('input').trigger('change');
    expect(fn).toHaveBeenCalled();
    expect(changeVal).toEqual('value-2');
    wrapper.find('input').trigger('blur');
    setTimeout(done, 200); // wait till input blur has been called
  });

  it('handles keydown on main wrapper', () => {
    const fn = jest.fn();
    const wrapper = shallowMount(Autocomplete, {
      propsData: {
        options: [1, 2, 3],
      },
    });
    const vm = (wrapper.vm as any);

    wrapper.find('input').trigger('keydown.up');
    expect(vm.highlightedIndex).toEqual(2);

    wrapper.find('input').trigger('keydown.down');
    wrapper.find('input').trigger('keydown.down');
    expect(vm.highlightedIndex).toEqual(1);

    wrapper.find('input').trigger('keydown.up');
    expect(vm.highlightedIndex).toEqual(0);
  });

  it('handles selecting options', () => {
    const fn = jest.fn();
    const wrapper = mount(Autocomplete, {
      propsData: {
        options: [1, 2, 3],
      },
    });
    const vm = (wrapper.vm as any);
    vm.focused = true;
    vm.$on('change', fn);

    wrapper.find('.option').trigger('click');
    // console.log(vm.$el.querySelector('div'))
    expect(fn).toHaveBeenCalled();

    wrapper.find('input').trigger('keydown.enter');
    expect(fn).toHaveBeenCalledTimes(2);
  });
});
