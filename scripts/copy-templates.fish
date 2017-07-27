#!/usr/bin/env fish

set -l GENERATOR generator/generators/app
set -l TEMPLATES $GENERATOR/templates

# Shared elements like Webpack configuration and game assets are copied first.
cp -r \
  templates/esnext/app/index.html \
  templates/esnext/app/static/ \
  $TEMPLATES/shared/
cp -r templates/esnext/config $TEMPLATES/

# Copy files from both templates.
for d in commonjs esnext
  set -l SRC templates/$d
  set -l DEST $TEMPLATES/$d

  # Copy:
  # - ESLint rule-set
  # - Dependency manifests
  # - Application scripts
  cp $SRC/{.eslintrc.js,package.json} $DEST/
  cp -r $SRC/app/scripts/ $DEST/app/

  # Copy Babel configuration, if there is one.
  if test -f $SRC/.babelrc
    cp $SRC/.babelrc $DEST/
  end
end
