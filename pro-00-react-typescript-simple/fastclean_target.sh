# http://www.ashleysheridan.co.uk/blog/Why+You+Should+Not+Use+Rimraf
# Why do we need to remove `node_modules`
# "While updating packages, I ran into an issue with some sub-modules not being updated correctly,
# hence my need to wipe out node_modules and install afresh.
# This is because the standard canned response for 90% of all npm issues is usually to delete node_modules and reinstall;
# reminiscent of the typical advice of "turning it off and on again" for basically any hardware issue!
# It's annoying, and just deals with the symptoms without really giving any idea what the actual cause.
# However, it does work, so this is what I need to do."

# Make this file executable:
# chmod +x fastclean_target.sh

# Executing this file by the following command lines:
# ./fastclean_target.sh

# This solution could be the fastest.
# However, I just afraid a mistake that if we failed to cd into node_modules,
# we could end up removing the current folder, which is a huge risk!!!
# cd node_modules
# perl -e 'for(<*>){((stat)[9]<(unlink))}'

# This solution is much faster than rm -rf ./node_modules
mkdir empty_dir
rsync -a --delete empty_dir/ ./node_modules/
rm -rf ./empty_dir
rm -rf ./node_modules

