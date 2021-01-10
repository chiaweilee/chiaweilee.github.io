diffInfo=`git diff --stat`
if [ "$diffInfo" != "" ]; then
  echo "$diffInfo";
  if [ -d /home/ ]; then
    git config --global user.email "$EMAIL"
    git config --global user.name "$NAME"
    git add -f home
    git commit -m "deply: 🤖 auto build"
    git push
  fi
fi
