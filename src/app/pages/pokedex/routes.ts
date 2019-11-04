import { Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';

export const pokedexRoutes: Routes = [
	{
		path: 'pokedex',
		component: PokedexComponent
	},
	{
		path: '',
		redirectTo: '/pokedex',
		pathMatch: 'full'	
	}
]