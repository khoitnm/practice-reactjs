rem This script will help us to delete a massive folder faster than deleting them on Windows Explorer

set foldername=.\node_modules
echo "removing %foldername%"
del /f/s/q %foldername% > nul
rmdir /s/q %foldername%
echo "finish deleting %foldername%"

set foldername=.\build
echo "removing %foldername%"
del /f/s/q %foldername% > nul
rmdir /s/q %foldername%
echo "finish deleting %foldername%"