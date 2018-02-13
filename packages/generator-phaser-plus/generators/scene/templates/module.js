export default class <%- name %> extends Phaser.Scene {
  /**
   * My custom scene.
   *
   * @extends Phaser.Scene
   * @param {object} [config={}] - The scene configuration parameters.
   */
  constructor(config = {}) {
    super(Object.assign({key: '<%- name %>'}, config));
  }
<% if (methods.includes('init')) { -%>

  /**
   * Called when a scene is initialized.
   *
   * @param {object} data Initialization parameters.
   */
  init(/* data = {} */) {
  }
<% } -%>
<% if (methods.includes('preload')) { -%>

  /**
   * Called when a scene is initialized. Main purpose is to declare game
   * assets to be loaded by the asset manager.
   */
  preload() {
  }
<% } -%>
<% if (methods.includes('create')) { -%>

  /**
   * Called when a scene is initialized. Method responsible for setting up the
   * game objects on the screen.
   *
   * @param {object} data Initialization parameters.
   */
  create(/* data = {} */) {
  }
<% } -%>
<% if (methods.includes('update')) { -%>

  /**
   * Called when a scene is updated. Updates to logic, physics and game
   * objects are handled here.
   *
   * @param {number} t Current internal clock time.
   * @param {number} dt Time elapsed since last update.
   */
  update(/* t, dt */) {
  }
<% } -%>
<% if (methods.includes('render')) { -%>

  /**
   * Called after a scene is rendered. Handles rendenring post processing.
   */
  render() {
  }
<% } -%>
<% if (methods.includes('shutdown')) { -%>

  /**
   * Called when a scene is about to shut down.
   */
  shutdown() {
  }
<% } -%>
<% if (methods.includes('destroy')) { -%>

  /**
   * Called when a scene is about to be destroyed (i.e.: removed from scene
   * manager). All allocated resources should be freed up here.
   */
  destroy() {
  }
<% } -%>
}
