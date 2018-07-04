import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Document.scss';

import { terminateAllEdits } from '../../actions/editables';
import { getMappedLayout } from '../../layouts';

const zoomify = (value, factor) => ((value * 100) * (factor / 100)) / 100;

class Document extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.layout.id !== prevProps.layout.id) {
      const exisingClassName = this.docEl.className;
      this.docEl.className = exisingClassName + ' animate';

      requestAnimationFrame(() => {
        this.docEl.className = exisingClassName + ' animate collapsed';

        setTimeout(() => {
          requestAnimationFrame(() => {
            this.docEl.className = exisingClassName + ' animate collapsed collapsed-opposite';

            setTimeout(() => {
              requestAnimationFrame(() => {
                this.docEl.className = exisingClassName;
              });
            }, 300);
          });
        }, 300);
      })

    }
  }

  render() {
    const {layout, elements, cv,
      isAnyEditableActive, terminateAllEdits, document} = this.props;

    return (
      <div className="document-wrapper">
        <div onClick={() => terminateAllEdits()} className={'overlay' + ( isAnyEditableActive ? ' overlay-enabled' : '' )}></div>
        <div className={'document' + ( document.editModeEnabled ? ' document-edit-mode' : '' )}
             ref={el => this.docEl = el}
             style={{
              width: zoomify(50, document.zoom) + '%',
              paddingBottom: zoomify(69.65, document.zoom) + '%'
             }}>
          <div className="document-inner" style={{
            fontSize: zoomify(1, document.zoom) + 'em',
            lineHeight: zoomify(1, document.zoom) + 'em'
          }}>
            { getMappedLayout(layout) }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  layout: state.present.layout,
  document: state.present.document,
  isAnyEditableActive: Object.entries(state.present.editables)
    .filter(([index, editable]) => editable.enabled).length > 0
})

const mapDispatchToProps = (dispatch) => ({
  terminateAllEdits: () => dispatch(terminateAllEdits())
});

export default connect(mapStateToProps, mapDispatchToProps)(Document);
