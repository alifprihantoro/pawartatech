## TODO: get pid
## can stop
## if this running, don running twice
sh ./bin/removeDist.sh
pnpm --filter=loadmore dev &
pnpm --filter=mygisqus dev &
pnpm --filter=blogger dev &
