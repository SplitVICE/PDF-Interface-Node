from os import system

commands = [
    "rm -rvf ./build",
    "mkdir build",
    "cp -rv ./backend/package.json ./build/package.json",
    "cp -rv ./backend/package-lock.json ./build/package-lock.json",
    "cp -rv ./backend/src ./build/src",
    "rm -rvf ./build/public/",
    "rm -rvf ./build/src/files/",
]

for c in commands:
    system(c)
