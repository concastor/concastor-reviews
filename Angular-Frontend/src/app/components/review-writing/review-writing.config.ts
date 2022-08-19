import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Marker from '@editorjs/marker';

export const editorjsConfig = {
  /**
   * Id of Element that should contain the Editor
   */
  holderId: 'editorjs',

  /**
   * Available Tools list.
   * Pass Tool's class or Settings object for each Tool you want to use
   */
  tools: {
    header: {
      class: Header,
      inlineToolbar: true,
    },
    // ...
  },

  placeholder: 'Write or preferably paste a review..',

  /**
   * Previously saved data that should be rendered
   */
  // data: {}
};
