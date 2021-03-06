import { types } from "../../types/types";

describe('Pruebas con nuestros tipos', () => {

    test('debe de tener estos tipos', () => {

        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] REmove Error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Notes] New note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdate: '[Notes] Update note',
            notesFileUrl: '[Notes] Update Image Url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        })
    })
});