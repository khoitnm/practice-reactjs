@echo off
set /P foldername="Enter removing foldername: "
echo "You are removing ... %foldername%"
pause
@echo on
del /f/s/q %foldername% > nul 
rmdir /s/q %foldername%

pause