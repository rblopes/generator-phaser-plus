export default class <%- name %> extends Phaser.Plugins.BasePlugin {
  /**
   *  My custom global plugin.
   *
   *  @constructor
   *  @param {Phaser.Plugins.PluginManager} manager - Phaser plugin manager.
   */
  constructor(manager) {
    super(manager);

    /**
     *  The event emitter of the Phaser game instance this plugin is bound to.
     *
     *  @type {Phaser.Events}
     */
    this.events = this.game.events;
  }

  /**
   *  Called up on plugin initialization. Used to configure the plugin and
   *  allocate resources.
   *
   *  @protected
   */
  init() {
    //  The events this plugin can listen to.
    // this.events.on('pause', this.pause, this);
    // this.events.on('resume', this.resume, this);
    // this.events.on('resize', this.resize, this);
    // this.events.on('prestep', this.preStep, this);
    // this.events.on('step', this.step, this);
    // this.events.on('poststep', this.postStep, this);
    // this.events.on('prerender', this.preRender, this);
    // this.events.on('postrender', this.postRender, this);
    // this.events.on('blur', this.blur, this);
    // this.events.on('focus', this.focus, this);
    // this.events.on('hidden', this.hidden, this);
    // this.events.on('visible', this.visible, this);

    //  NOTE: At the very least, provide a `destroy` callback to free up the
    //  resources used by this plugin.
    this.events.once('destroy', this.destroy, this);
  }

  /**
   *  Called by the plugin manager when the plugin is requested to be
   *  initialized.
   *
   *  @protected
   */
  start() {
  }

  /**
   *  Called by the plugin manager when the user requests to stop this plugin.
   *
   *  @protected
   */
  stop() {
  }

  /**
   *  Called when the game is pausing.
   *
   *  @private
   */
  pause() {
  }

  /**
   *  Called when the game resumes from a paused state.
   *
   *  @private
   */
  resume() {
  }

  /**
   *  Called when the user request to resize the game canvas.
   *
   *  @private
   *  @param {number} width - The new width of the game, in pixels.
   *  @param {number} height - The new height of the game, in pixels.
   */
  resize(/* width, height */) {
  }

  /**
   *  Called when the game engine cycles its update step - pre-processing
   *  step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  preStep(/* t, dt */) {
  }

  /**
   *  Called when the game engine cycles its update step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  step(/* t, dt */) {
  }

  /**
   *  Called when the game engine cycles its update step - post-processing
   *  step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  postStep(/* t, dt */) {
  }

  /**
   *  Called when the game engine cycles its rendering process - pre-processing step.
   *
   *  @private
   *  @param {(Phaser.Renderer.Canvas.CanvasRenderer|Phaser.Renderer.WebGL.WebGLRenderer)} renderer - The current rendering engine in use.
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  preRender(/* renderer, t, dt */) {
  }

  /**
   *  Called when the game engine cycles its rendering process - post-processing step.
   *
   *  @private
   *  @param {(Phaser.Renderer.Canvas.CanvasRenderer|Phaser.Renderer.WebGL.WebGLRenderer)} renderer - The current rendering engine in use.
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  postRender(/* renderer, t, dt */) {
  }

  /**
   *  Called when the game canvas loses focus (e.g.: the user clicked an
   *  element outside the game canvas).
   *
   *  @private
   */
  blur() {
  }

  /**
   *  Called when the game canvas gain focus.
   *
   *  @private
   */
  focus() {
  }

  /**
   *  Called when the game loses visibility (e.g.: the user switched to
   *  another browser tab.)
   *
   *  @private
   */
  hidden() {
  }

  /**
   *  Called when the game gains visibility.
   *
   *  @private
   */
  visible() {
  }

  /**
   *  Called when a scene is destroyed by the scene manager. All allocated
   *  resources should be cleaned up here.
   *
   *  @private
   */
  destroy() {
    this.game = null;
    this.events = null;
    this.pluginManager = null;
  }
}
