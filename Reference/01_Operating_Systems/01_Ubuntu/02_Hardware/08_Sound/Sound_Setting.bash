###########################################
# Using alsamixer
$ alsamixer

###########################################
# Using Pulseaudio
$ sudo apt install pavucontrol

###########################################
# Using amixer
$ amixer		# List all devices
$ amixer info
$ amixer controls # List all controls
$ 


$ amixer -D pulse sset Master toggle # Mute/UnMute
$ amixer -D pulse -R sset Master 3277+ # Up sound
$ amixer -D pulse -R sset Master 3277- # Down sound
# Add shorcut key for i3WM
	# Up/Down Sound
	bindsym $mod+shift+equal exec amixer -D pulse -R sset Master 3277+
	bindsym $mod+shift+minus exec amixer -D pulse -R sset Master 3277-


###########################################
# Using pamix
$ sudo apt install pamix
$ pamix
