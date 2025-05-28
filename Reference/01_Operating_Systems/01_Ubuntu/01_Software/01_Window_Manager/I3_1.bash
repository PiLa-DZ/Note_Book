mod+shift+q			# Quit
mod+d				# Menu
mod+enter			# Terminal

mod+v				# Vertical
mod+h				# Horizontal
mod+_jkl;			# Jump between windows
mod+_JKL:			# Move Windows

mod+s				# Stacking mod
mod+e				# Retorn to split mod
mod+w				# Tabe mod

mod+r_jkl;			# Resize

mod+Num				# Jump to workspace
mod+shift+Num		# Move window to workspace

mod+E				# Log out
mod+R				# Refrash

$ i3lock			# Lock labtop

######################################################
i3-config-wizard	# Create or show config file

# Create new shortcut
	bindsym $mod+shift+x exec i3lock
	bindsym $mod+shift+x exec firefox

# Auto open app on startup
	exec firefox
# Auto open app on refrach
	exec_always firefox


# Change Wallpaper background
	$ sudo apt install feh
	$ feh --bg-scale PATH.png
	exec_always feh --bg-scale /home/pila/Pictures/Wallpapers/pexels-kevin-ku-92347-577585.jpg

# ???
	$ sudo apt install arandr
	# After edit 
	$ cat ~/.screenlayout/fileName.sh
	# Copy and past
		exec_always xrandr --output eDP-1 --primary --mode 1280x720 --pos 0x0 --rotate normal --output DP-1 --off --output HDMI-1 --off --output DP-2 --off --output HDMI-2 --off


# ------------------------------------------------------
# Get app name
	# open your app
	# and open terminall
	$ xprop
	# And click on app to show information about it

#? Auto open app in workspace
assign [class="gnome-calculator"] $ws6 #It's not work in my computer
# ------------------------------------------------------


# ------------------------------------------------------
set $bg-color 	         #2f343f
set $inactive-bg-color   #2f343f
set $text-color          #f3f4f5
set $inactive-text-color #676E7D
set $urgent-bg-color     #E53935

# window colors
#                       border              background         text                 indicator
client.focused          $bg-color           $bg-color          $text-color          #00ff00
client.unfocused        $inactive-bg-color $inactive-bg-color $inactive-text-color #00ff00
client.focused_inactive $inactive-bg-color $inactive-bg-color $inactive-text-color #00ff00
client.urgent           $urgent-bg-color    $urgent-bg-color   $text-color          #00ff00

hide_edge_borders both
# ------------------------------------------------------


bar {
        status_command i3status

		#? -------------------------------------------------------------------------------------------
		colors {
				background $bg-color
					separator #757575
				#                  border             background         text
				focused_workspace  $bg-color          $bg-color          $text-color
				inactive_workspace $inactive-bg-color $inactive-bg-color $inactive-text-color
				urgent_workspace   $urgent-bg-color   $urgent-bg-color   $text-color
			}
		#? -------------------------------------------------------------------------------------------
}





# ------------------------------------------------------
# rofi menu
$ sudo apt install rofi
$ rofi -show run			# To start rofi one time
$ sudo apt install compton	# For transepenret




# ------------------------------------------------------
https://github.com/bookercodes/dotfiles/blob/ubuntu/.i3/config

































#### Start text -------------------------------------------------------------------------------------
# Pulse Audio controls
bindsym XF86AudioRaiseVolume exec --no-startup-id pactl set-sink-volume 0 +5% #increase sound volume
bindsym XF86AudioLowerVolume exec --no-startup-id pactl set-sink-volume 0 -5% #decrease sound volume
bindsym XF86AudioMute exec --no-startup-id pactl set-sink-mute 0 toggle # mute sound

# Sreen brightness controls
bindsym XF86MonBrightnessUp exec xbacklight -inc 20 # increase screen brightness
bindsym XF86MonBrightnessDown exec xbacklight -dec 20 # decrease screen brightness

# Touchpad controls
bindsym XF86TouchpadToggle exec /some/path/toggletouchpad.sh # toggle touchpad

# Media player controls
bindsym XF86AudioPlay exec playerctl play
bindsym XF86AudioPause exec playerctl pause
bindsym XF86AudioNext exec playerctl next
bindsym XF86AudioPrev exec playerctl previous
#### End text -------------------------------------------------------------------------------------




