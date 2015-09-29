#!/usr/bin/env sh
#
# Exports better JVM settings: Usage:
#    $ . ./set-jvm-opts.sh

export BOOT_JVM_OPTIONS="-Xmx2g -client -XX:+TieredCompilation -XX:TieredStopAtLevel=1 -XX:MaxPermSize=256m -XX:+UseConcMarkSweepGC -XX:+CMSClassUnloadingEnabled -Xverify:none -XX:-OmitStackTraceInFastThrow"
