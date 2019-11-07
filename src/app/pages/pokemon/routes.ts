import { Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NavigationGuard } from 'src/app/shared/guard/navigation.guard';

export const pokemonRoutes: Routes = [
	{
		path: 'pokemon',
		component: PokemonComponent,
		canActivate: [NavigationGuard]
	}
]