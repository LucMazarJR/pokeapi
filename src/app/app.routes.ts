import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Pokemon } from './pokemon/pokemon';

export const routes: Routes = [
	{
		path: '',
		component: Layout,
		children: [
			{
				path: '',
				component: Pokemon,
			},
		],
	},
];
