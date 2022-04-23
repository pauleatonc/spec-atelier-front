import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import Button from 'components/buttons/Button';
import { VARIANTS_BUTTON } from 'config/constants/button-variants';
import { Root, Label, Section, Actions, EditorStyles } from './Editor.styles';

/** The Editor's component */
const Editor = (props) => {
  const {
    actions,
    initialValue,
    label,
    placeholder,
    onCancel,
    onSubmit,
  } = props;
  const [editor, setEditor] = useState();
  const [value, setValue] = useState(initialValue);
  const handleCancel = () => onCancel();
  const handleChange = () => setValue(editor.getData());
  const handleInit = (editorInstance) => setEditor(editorInstance);
  const handleSubmit = () => onSubmit(editor.getData());
  const canSubmit = value !== '';

  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Section>
        <EditorStyles />
        <CKEditor
          config={{
            heading: {
              options: [
                { model: 'heading5', view: 'h5', title: 'Muy pequeño 9 pts' },
                {
                  converterPriority: 'highest',
                  model: 'paragraph',
                  title: 'Pequeño 12 pts',
                },
                { model: 'heading2', view: 'h2', title: 'Mediano 14 pts' },
                { model: 'heading1', view: 'h1', title: 'Grande 18 pts' },
              ],
            },
            language: 'es',
            placeholder,
            toolbar: ['heading', '|', 'bold', '|', 'italic'],
          }}
          data={initialValue}
          editor={InlineEditor}
          onChange={handleChange}
          onInit={handleInit}
        />
      </Section>
      {actions && (
        <Actions>
          <Button size="sm" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button
            disabled={!canSubmit}
            margin="0 0 0 8px"
            size="sm"
            variant={canSubmit ? VARIANTS_BUTTON.PRIMARY : VARIANTS_BUTTON.GRAY}
            onClick={handleSubmit}
          >
            Guardar
          </Button>
        </Actions>
      )}
    </Root>
  );
};

Editor.defaultProps = {
  actions: false,
  initialValue: '',
  label: '',
  placeholder: '',
};
Editor.propTypes = {
  actions: PropTypes.bool,
  initialValue: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Editor;
