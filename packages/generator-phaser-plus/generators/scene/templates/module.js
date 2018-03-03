export default class <%- name %> extends Phaser.Scene {
  /**
   * My custom scene.
   *
   * @extends Phaser.Scene
   */
  constructor() {
    super({key: '<%- name %>'});
  }
<% if (methods.includes('init')) { -%>

  /**
   * Called when a scene is initialized.
   *
   * @protected
   * @param {object} data Initialization parameters.
   */
  init(/* data = {} */) {
  }
<% } -%>
<% if (methods.includes('preload')) { -%>

  /**
   * Called when a scene is initialized. Main purpose is to declare game
   * assets to be loaded by the asset manager.
   *
   * @protected
   */
  preload() {
  }
<% } -%>
<% if (methods.includes('create')) { -%>

  /**
   * Called when a scene is initialized. Method responsible for setting up the
   * game objects on the screen.
   *
   * @protected
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
   * @protected
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
   *
   * @protected
   */
  shutdown() {
  }
<% } -%>
<% if (methods.includes('destroy')) { -%>

  /**
   * Called when a scene is about to be destroyed (i.e.: removed from scene
   * manager). All allocated resources should be freed up here.
   *
   * @protected
   */
  destroy() {
  }
<% } -%>
}
