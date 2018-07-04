import { moveToCloset } from './cv';

export const SET_LAYOUT = 'setLayout';

const setLayout = (layoutConfig) => ({
  type: SET_LAYOUT,
  layoutConfig
});

export const migrateToNewLayout = (newLayout) => (dispatch, getState) => {
  const currentLayout = getState().present.layout,
        cv = getState().present.cv,
        thrownOutComponents = [];

  newLayout.zones.map((zone, idx) => {
    const componentsCanStay = [];

    cv.filter(component => component.zoneId === zone.id).forEach(component => {
      if (zone.accepts.indexOf(component.id) === -1) {
        thrownOutComponents.push(component.uniqueId);
      } else {
        componentsCanStay.push(component);
      }
    });

    if (componentsCanStay.length > zone.max) {
      componentsCanStay.slice(zone.max).forEach(component => thrownOutComponents.push(component.uniqueId));
    }
  })

  if (thrownOutComponents.length > 0) {
    const confirmResult = window.confirm('Zmiana tematu na ten, który chcesz wybrać, \
może spowodować że niektóre komponenty stworzone przez Ciebie spadną \
do tzw. szuflady i będziesz musiał je przeciągnąć na dokument jeszcze raz.\n \
\n \
Spowodowane jest to trochę innym układem docelowego tematu.\n \
\n \
Czy napewno chcesz kontynuować?');

    if (confirmResult) {
      dispatch(moveToCloset(thrownOutComponents));
    } else {
      return
    }
  }

  dispatch(setLayout(newLayout));
}
