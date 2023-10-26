import {player as reducer, playerSlice, play} from '../../src/store/slices/player'
// test('reducers', () => {
//     let state;
//     state = reducers({ player: { course: { id: 1, modules: [{ id: 1, title: 'Iniciando com React', lessons: [{ id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' }, { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' }, { id: 'D83-55LUdKE', title: 'Componente: Header', duration: '06:33' }, { id: 'W_ATsETujaY', title: 'Componente: Sidebar', duration: '09:12' }, { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' }, { id: '8KBq2vhwbac', title: 'Form de comentários', duration: '11:34' }] }, { id: 2, title: 'Estrutura da aplicação', lessons: [{ id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' }, { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' }, { id: 'h5JA3wfuW1k', title: 'Interações no JSX', duration: '06:33' }, { id: '1G0vSTqWELg', title: 'Utilizando estado', duration: '09:12' }] }] }, currentModuleIndex: 0, currentLessonIndex: 0, isLoading: false } }, { type: 'player/load/fulfilled', payload: { id: 1, modules: [{ id: 1, title: 'Iniciando com React', lessons: [{ id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' }, { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' }, { id: 'D83-55LUdKE', title: 'Componente: Header', duration: '06:33' }, { id: 'W_ATsETujaY', title: 'Componente: Sidebar', duration: '09:12' }, { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' }, { id: '8KBq2vhwbac', title: 'Form de comentários', duration: '11:34' }] }, { id: 2, title: 'Estrutura da aplicação', lessons: [{ id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' }, { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' }, { id: 'h5JA3wfuW1k', title: 'Interações no JSX', duration: '06:33' }, { id: '1G0vSTqWELg', title: 'Utilizando estado', duration: '09:12' }] }] }, meta: { requestId: 'mM9UMJz8QSEnhEUeYZmh1', requestStatus: 'fulfilled' } });
//     expect(state).toEqual({ player: { course: { id: 1, modules: [{ id: 1, title: 'Iniciando com React', lessons: [{ id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' }, { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' }, { id: 'D83-55LUdKE', title: 'Componente: Header', duration: '06:33' }, { id: 'W_ATsETujaY', title: 'Componente: Sidebar', duration: '09:12' }, { id: 'Pj8dPeameYo', title: 'CSS Global', duration: '03:23' }, { id: '8KBq2vhwbac', title: 'Form de comentários', duration: '11:34' }] }, { id: 2, title: 'Estrutura da aplicação', lessons: [{ id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' }, { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' }, { id: 'h5JA3wfuW1k', title: 'Interações no JSX', duration: '06:33' }, { id: '1G0vSTqWELg', title: 'Utilizando estado', duration: '09:12' }] }] }, currentModuleIndex: 0, currentLessonIndex: 0, isLoading: false } });
// });

describe('player slice', () => {
    it('Should be able to play', () => {
        const initialState = playerSlice.getInitialState()
        const state = reducer(initialState, play([1,2]))

        // expect(state.currentModuleIndex).to.equal(1)
    })
})