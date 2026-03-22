#!/usr/bin/env bash
# Pull --rebase, auto-resolving conflicts in pipeline-managed content.
# These files are overwritten every publish run, so the remote version wins.
set -euo pipefail

CONTENT_PATHS=(
  "src/content/blog/"
  "src/content/pages/"
  "public/blog-assets/"
)

if git pull --rebase origin main 2>/dev/null; then
  echo "Rebased cleanly."
  exit 0
fi

echo "Conflict detected — auto-resolving pipeline-managed content files..."

# Resolve conflicts in content paths by taking the remote (incoming) version
for path in "${CONTENT_PATHS[@]}"; do
  git diff --name-only --diff-filter=U | grep "^${path}" | while read -r file; do
    echo "  Taking remote: $file"
    git checkout --theirs "$file"
    git add "$file"
  done
done

# If unresolved conflicts remain, they're in non-content files and need manual attention
if git diff --name-only --diff-filter=U | grep -q .; then
  echo "⚠ Non-content conflicts remain — resolve manually, then run: git rebase --continue"
  exit 1
fi

git rebase --continue
echo "Rebased with auto-resolved content files."
