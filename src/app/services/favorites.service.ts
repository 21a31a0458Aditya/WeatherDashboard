import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private storageKey = 'favoriteCities';

  constructor() {}

  getFavorites(): string[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  addFavorite(city: string): void {
    let favorites = this.getFavorites();
    if (!favorites.includes(city)) {
      favorites.push(city);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(city: string): void {
    let favorites = this.getFavorites().filter(c => c !== city);
    localStorage.setItem(this.storageKey, JSON.stringify(favorites));
  }
}
