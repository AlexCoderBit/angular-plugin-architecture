import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//redux start
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { createLogger } from 'redux-logger';

interface appState {}

const middlewares = [createLogger()];

export const store: Store<appState> = createStore(
  () => ({
    storeOnInit: null
  }),
  composeWithDevTools(applyMiddleware(...middlewares))
);
