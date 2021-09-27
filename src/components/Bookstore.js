import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Books from './Books';
import Categories from './Categories';
import NotFound from './NotFound';

const Bookstore = () => (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );

export default Bookstore;
