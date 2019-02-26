#!/bin/bash
tmux set status on
SECONDS=30
END_DATE=$((`date +%s` + $SECONDS))
while [ "$END_DATE" -ge `date +%s` ]; do
   tmux set status-right "Time Remaining: $(date -u --date @$(($END_DATE - `date +%s`)) +%H:%M:%S)"
   sleep 1
done
