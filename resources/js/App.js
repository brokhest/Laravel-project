import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import FcomponentMain from './FcomponentMain';

import Cosplay from './Cosplay'
import Catalog from './Catalog'
import Product from './Product'
import Basket from './Basket'
import Formalization from './Formalization'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}))
const cardss = [
  { title: 'Аниместафф', price: 1500 },
  { title: 'Дакимакуры', price: 1994 },
  { title: 'Атрибутика', price: 2000 },
  { title: 'Косплей', price: 3000 },
  { title: 'Товар 1', price: 4000 },
  { title: 'Товар 2', price: 5000 },
  { title: 'Товар 3', price: 6000 },
  { title: 'Товар 4', price: 7000 },
  { title: 'Аниместафф', price: 8000 },
  { title: 'Дакимакуры', price: 9000 },
  { title: 'Атрибутика', price: 10000 },
  { title: 'Косплей', price: 11000 },
  { title: 'Косплей', price: 12000 },
];

function App() {

  const classes = useStyles();

  return (
    <div className={classes.grow}>

      <Router>
        <FcomponentMain />
        <Switch>
          {cardss.map((card) => (
            <Route path={"/Product/" + card.title}>
              <Product cardess={card} />
            </Route>
          ))}

          <Route path="/Basket">
            <Basket />
          </Route>
          <Route path="/Formalization">
            <Formalization />
          </Route>
          <Route path="/">
            <Cosplay />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
