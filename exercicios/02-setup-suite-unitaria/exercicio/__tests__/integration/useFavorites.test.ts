// __tests__/integration/useFavorites.test.ts
//
// PRÁTICA (não pontua) — aquecimento do Bloco 2.
// `renderHook` roda um hook no ambiente React SEM renderizar tela.
// Aqui o hook é `useFavorites` (fina camada sobre o store de favoritos).
//
// Setup já pronto abaixo. Complete os it.todo:
//   const { result } = renderHook(() => useFavorites());
//   act(() => { result.current.toggle(42); });     // muta estado → dentro de act()
//   expect(result.current.isFavorite(42)).toBe(true);

import { renderHook, act } from '@testing-library/react-native';
import { useFavorites } from '@/hooks/useFavorites';
import { useFavoritesStore } from '@/store/favoritesStore';

// Store é singleton — zere entre testes pra não vazar estado.
beforeEach(() => useFavoritesStore.setState({ ids: [] }));

describe('useFavorites (renderHook)', () => {
  it.todo('começa sem favoritos (count === 0)');

  it.todo('toggle adiciona e depois remove — count volta a 0');

  it.todo('isFavorite reflete o estado após add(id)');
});
