import type { Schema, Attribute } from '@strapi/strapi';

export interface MoleculesFormField extends Schema.Component {
  collectionName: 'components_molecules_form_fields';
  info: {
    displayName: 'FormField';
  };
  attributes: {
    type: Attribute.String;
    name: Attribute.String;
    placeholder: Attribute.String;
  };
}

export interface MoleculesButton extends Schema.Component {
  collectionName: 'components_molecules_buttons';
  info: {
    displayName: 'button';
  };
  attributes: {
    content: Attribute.String;
    titleTag: Attribute.String;
    class: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'molecules.form-field': MoleculesFormField;
      'molecules.button': MoleculesButton;
    }
  }
}
