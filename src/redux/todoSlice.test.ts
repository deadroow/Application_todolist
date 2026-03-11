import reducer, { addTodo } from './todoSlice';
import { TODO } from '../utils/types';

describe('todoSlice', () => {
  it('should handle a todo being added to an empty list', () => {
    const previousState = { ids: [], entities: {} };
    
    // On crée un objet qui respecte strictement ton interface TODO
    const newTodo: TODO = { 
      id: 1, 
      text: 'Test SonarCloud'
      // Si l'erreur persiste sur 'completed', c'est que le champ s'appelle autrement
    };
    
    const state = reducer(previousState, addTodo(newTodo));

    expect(state.ids).toContain(1);
    expect(state.entities[1]).toEqual(newTodo);
  });
});