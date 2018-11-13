import Enzyme from 'enzyme';
import  Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

console.log(shallow(<Card />));