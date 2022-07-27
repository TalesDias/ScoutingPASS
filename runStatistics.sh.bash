@REM (){ return 0; }
@REM \
@ECHO OFF
REM (){ return 0; }

REM This script 
REM Works on UNIX, AmigaDOS
REM And Windows.

REM \
GOTO Batch

# Thank you https://www.stardot.org.uk/forums/viewtopic.php?f=11&t=2564

jupyter notebook ./stats.ipynb
exit 0

:Batch
REM Insert Batch here
echo Test from Batch

