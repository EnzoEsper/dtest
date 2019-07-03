import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import DataDisplayer from './DataDisplayer';

import DataRetriever from './DataRetriever';
jest.mock('./DataRetriever');

Enzyme.configure({adapter: new EnzymeAdapter()});

describe('Pruebas Data Displayer', () => {

  beforeEach(() => {
    DataRetriever.mockClear();
  });

  it('Deberia mostrar el dato una vez recuperado', () => {

    DataRetriever.mockImplementation(() => {
      
      return {
        Retrieve: (callback) => callback("tituloFalso")
      }

    });

    const wrapper = mount(<DataDisplayer />);
    console.log(wrapper.debug());
    expect(wrapper.text()).toContain("tituloFalso");

  });

  it('Deberia mostrar el dato una vez recuperado', () => {

    DataRetriever.mockImplementation(() => {
      
      return {
        Retrieve: () => {}
      }

    });

    const wrapper = mount(<DataDisplayer />);
    console.log(wrapper.debug());
    expect(wrapper.text()).toContain("Data not Available");

  })

})