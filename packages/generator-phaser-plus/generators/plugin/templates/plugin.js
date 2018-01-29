/*
 * <%- name %>
 * <%- '='.repeat(name.length) %>
 *
 * My custom plugin.
 */

export default class <%- name %> {
  static register(sys) {
    sys.plugins.constructor.register('<%- name %>', this, '<%- id %>');
    sys.plugins.installGlobal(sys, ['<%- name %>']);
  }

  constructor(scene) {
    Object.defineProperty(this, 'scene', {value: scene, enumerable: true});
    Object.defineProperty(this, 'sys', {value: scene.sys, enumerable: true});

    if (!scene.sys.settings.isBooted) {
      !scene.sys.events.once('boot', this.boot, this);
    }
  }

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
      .on('destroy', this.destroy, this)
  }

  start() {
  }

  preUpdate(/* t, dt */) {
  }

  update(/* t, dt */) {
  }

  postUpdate(/* t, dt */) {
  }

  pause() {
  }

  resume() {
  }

  sleep() {
  }

  wake() {
  }

  shutdown() {
  }

  destroy() {
    this.shutdown();

    this.scene = undefined;
  }
}
