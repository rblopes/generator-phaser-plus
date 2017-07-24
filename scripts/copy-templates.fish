#!/usr/bin/env fish

set -l GENERATOR generator/generators/app
set -l TEMPLATES $GENERATOR/templates

# Tasks and game assets are the same for both projects, so we only need to copy
# one of them.
cp -r \
  templates/commonjs/gulpfile.js/ \
  templates/commonjs/static/ \
  $TEMPLATES/

# Copy files from both templates.
for d in commonjs esnext
  set -l SRC templates/$d
  set -l DEST $TEMPLATES/$d

  # Copy:
  # - Application scripts
  # - Dependency manifest and lock files
  # - ESLint rule-set
  cp -r \
    $SRC/src/ \
    $SRC/{package.json,yarn.lock} \
    $SRC/.eslintrc.js \
    $DEST/

  # Copy Babel configuration, if there is one.
  if test -f $SRC/.babelrc
    cp $SRC/.babelrc $DEST/
  end
end
