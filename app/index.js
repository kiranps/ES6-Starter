import {component} from './component';
import style from './main.css';

var app = document.createElement('div');

document.body.appendChild(app);
app.appendChild(component());
