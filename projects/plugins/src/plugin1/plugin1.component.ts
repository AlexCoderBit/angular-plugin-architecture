import { Component } from '@angular/core';
import { store } from 'shared';

import { pluginActionTest } from './plugin1.actions';

@Component({
  selector: 'app-plugin-1',
  templateUrl: './plugin1.component.html'
})
export class Plugin1Component {
  // constructor(private ngRedux: NgRedux<any>) {}
  actionPayload = { message: 'Action was fired from plugin1' };

  // debugger;
  fireAction() {
    store.dispatch(pluginActionTest(this.actionPayload));
  }
}
