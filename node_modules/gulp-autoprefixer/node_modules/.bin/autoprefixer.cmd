@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\autoprefixer\bin\autoprefixer" %*
) ELSE (
  node  "%~dp0\..\autoprefixer\bin\autoprefixer" %*
)