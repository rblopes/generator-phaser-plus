export default class <%- name %> {
  /**
   *  Register this plugin in Phaser plugin manager, so it can be added to
   *  scenes.
   *
   *  @static
   *  @param {Phaser.Scene.Systems} sys - A reference to the scene system.
   */
  static register(sys) {
    sys.plugins.constructor.register('<%- name %>', this, '<%- id %>');
    sys.plugins.installGlobal(sys, ['<%- name %>']);
  }

  /**
   *  My custom plugin.
   *
   *  @constructor
   *  @param {Phaser.Scene} scene - The game scene that owns this plugin.
   */
  constructor(scene) {
    Object.defineProperty(this, 'scene', {value: scene, enumerable: true});
    Object.defineProperty(this, 'sys', {value: scene.sys, enumerable: true});

    if (!scene.sys.settings.isBooted) {
      !scene.sys.events.once('boot', this.boot, this);
    }
  }

  /**
   *  Called when this plugin is booted by Phaser plugin manager.
   *
   *  @protected
   */
  boot() {
    //  Bind this plugin to the life-cycle events of the scene.
    this.sys.events
      .on('start', this.start, this)
      .on('preupdate', this.preUpdate, this)
      .on('update', this.update, this)
      .on('postupdate', this.postUpdate, this)
      .on('pause', this.pause, this)
      .on('resume', this.resume, this)
      .on('sleep', this.sleep, this)
      .on('wake', this.wake, this)
      .on('shutdown', this.shutdown, this)
      .on('destroy', this.destroy, this);
  }

  /**
   *  Called when a scene is started by the scene manager. The scene is now
   *  active, visible and running.
   *
   *  @private
   */
  start() {
  }

  /**
   *  Called every time a scene in being updated - pre-update step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  preUpdate(t, dt) {
  }

  /**
   *  Called every time a scene in being updated - update step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  update(t, dt) {
  }

  /**
   *  Called every time a scene in being updated - post-update step.
   *
   *  @private
   *  @param {number} t - The current internal clock value.
   *  @param {number} dt - The interval since last update.
   */
  postUpdate(t, dt) {
  }

  /**
   *  Called when a scene is paused. A paused scene doesn't have its step run,
   *  but still renders.
   *
   *  @private
   */
  pause() {
  }

  /**
   *  Called when a scene is resumed from a paused state.
   *
   *  @private
   */
  resume() {
  }

  /**
   *  Called when a scene is put to sleep. A sleeping scene doesn't update or
   *  render, but isn't destroyed or shutdown. `preUpdate` events still fire.
   *
   *  @private
   */
  sleep() {
  }

  /**
   *  Called when a scene is woken from a sleeping state.
   *
   *  @private
   */
  wake() {
  }

  /**
   *  Called when a scene shuts down, it may then come back again later (which
   *  will invoke the `start` event) but should be considered dormant.
   *
   *  @private
   */
  shutdown() {
  }

  /**
   *  Called when a scene is destroyed by the scene manager. All allocated
   *  resources should be cleaned up.
   *
   *  @private
   */
  destroy() {
    this.shutdown();

    this.scene = undefined;
  }
}
