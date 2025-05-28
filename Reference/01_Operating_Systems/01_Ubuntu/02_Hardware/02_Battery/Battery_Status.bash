# First install acpi by running this command,
$ sudo apt install acpi

# Then run:
$ acpi

# Or for a more verbose output that constantly updates:
$ acpi -V

# Or
$ watch --interval=5 acpi -V

###########################################################
# Another way
$ cat /sys/class/power_supply/BAT0/capacity

# Find all battery status
$ find /sys/class/power_supply/BAT0/ -type f | xargs -tn1 cat
